// export const ssr = false;
import { apiKey, clientId, clientSecret, temporaryTogken } from '$env/static/private';
import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
import IdentityManager from "@arcgis/core/identity/IdentityManager.js";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

export async function load({}) {
// Create a new OAuthInfo object.
// The OAuth sign-in page will be shown in a popup window and use the specified callback URL.
const info = new OAuthInfo({
  appId: clientId,
  popup: true,
  // If using a callback page other than the default one,
  // make sure it supports the authentication type used.
  popupCallbackUrl: "<url to callback page>"
});

// Add this OAuthInfo object to the IdentityManager.
esriId.registerOAuthInfos([info]);


  // Fetch data from API
  const res = await fetch(`https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=${apiKey}`);

  const data = await res.json();

  // Return data as JSON
  return {data};
  // console.log(data);
};