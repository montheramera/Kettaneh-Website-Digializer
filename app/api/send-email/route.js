import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { data } = await req.json();
    let context = {
      pageUri: data.properties.urlPage || "Unknown URL",
      pageName: data.properties.pagePath || "Unknown Page",
    };

    if (data.properties.hs_context && data.properties.hs_context !== "null") {
      context.hutk = data.properties.hs_context;
    }

    const payload = {
      fields: [
        { name: "email", value: data.properties.email || "" },
        { name: "mobilephone", value: data.properties.mobilephone || "" },
      ],
      context: context,
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    };

    const formResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/144235498/0844eb52-02ff-4bcf-b3fe-3dbf1c9100ca`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const formResponseData = await formResponse.json();

    if (!formResponse.ok) {
      console.error("Form submission failed:", formResponseData);
      throw new Error("Failed to submit the form");
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    let contactData = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const contactResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${data.properties.email}?idProperty=email`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_token}`,
          },
        }
      );

      if (contactResponse.ok) {
        contactData = await contactResponse.json();
        break; // Exit loop if successful
      }

      if (attempt === 2) {
        throw new Error("Failed to get the contact after 3 attempts");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Optional delay between retries
    }

    if (data.properties) {
      delete data.properties.email;
      delete data.properties.hs_context;
      delete data.properties.pagePath;
      delete data.properties.urlPage;
    }

    const updateResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactData.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_token}`,
        },
        body: JSON.stringify({ properties: data.properties }),
      }
    );

    if (!updateResponse.ok) {
      const updateErrorData = await updateResponse.json();
      console.error("Failed to update the contact:", updateErrorData);

      await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactData.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_token}`,
          },
        }
      );
      
      throw new Error(`Failed to update the contact: ${updateErrorData.message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      success: false,
      message: error.message || "Error processing request",
    });
  }
}
