import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: "mail.roofsnroots.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});
// here is send email
async function sendEmail(data) {
  console.log("data",data)
  try {
    const emailBody = `
Hello,

You have received a new lead added . Here are the details:

-----------------------------------------------
**Contact Information**
- **Name:** ${data.firstname} ${data.lastname}
- **Email:** ${data.email||""}
- **Phone:** ${data.phone}
- **Country Code:** ${data.hs_country_region_code}
- **Country:** ${data.country}
- **Category:** ${data.category}
- **Industry:** ${data.industry}


**Inquiry Details**
- **Subject:** New lead added
----------------------------------------------
Informations Lead
**Webste-url:** ${data.website}
**Message:** ${data.message}

-----------------------------------------------
**Page Information**
- **URL Page:** ${data.urlPage}
-

-----------------------------------------------
Thank you,
kettaneh Team
`.trim();

    await transporter.sendMail({
      from: '"kettaneh" <noreply@digializer.com>',
      // to: 'Mohamed@digializer.com',
      // to: ['development@digializer.com', 'mohamedshalaby19595@gmail.com'],
      to: ["ghosheh.k@kettaneh.com.jo","development@digializer.com"],
      subject: "Lead Add property Submission - kettaneh",
      html: `<pre>${emailBody}</pre>`, // Sends the content as preformatted text
    });
  } catch (emailError) {
    console.error("Failed to send email:", emailError);
    await sendErrorEmail(emailError.stack || emailError.toString(), data);
    // throw emailError
  }
}
// Function to send an error notification email
async function sendErrorEmail(errorDetails, requestBody) {
  try {
    const emailContent = `
      An error occurred:

      Error Details:
      ${JSON.stringify(errorDetails, null, 2)}

      Request Body:
      ${JSON.stringify(requestBody, null, 2)}
    `;

    await transporter.sendMail({
      from: '"kettaneh" <noreply@digializer.com>',
      to: "development@digializer.com",
      subject: "Error in kettaneh Form Submission",
      text: emailContent,
    });
  } catch (emailError) {
    console.error("Failed to send error email:", emailError);
  }
}
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
    await sendEmail(data.properties);



    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Error processing request",
    });
  }
}
