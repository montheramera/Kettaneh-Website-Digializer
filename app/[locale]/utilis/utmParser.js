export function parseUTMParameters() {
    // Check if document is defined (not in SSR)
    if (typeof document === "undefined") {
      return {}; // or return some default value
    }
  
    // Function to get the value of a cookie by name
    function getCookie(name) {
      const cookies = document.cookie.split(";");
  
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1); // +1 to skip the '=' character
        }
      }
  
      return null; // Return null if the cookie with the specified name is not found
    }
  
    const utmSourceValue = getCookie("utm_source");
    const utmMediumValue = getCookie("utm_medium");
    const utmCampaignValue = getCookie("utm_campaign");
    const utmTermValue = getCookie("utm_term");
    const utmContentValue = getCookie("utm_content");
    const hubspotUtckValue = getCookie("hubspotutk");
    
  
    return {
      utm_source: utmSourceValue,
      utm_medium: utmMediumValue,
      utm_campaign: utmCampaignValue,
      utm_term: utmTermValue,
      utm_content: utmContentValue,
      hubspotUtckValue,
    }
  }