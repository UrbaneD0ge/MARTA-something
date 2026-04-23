// export const ssr = false;
import { apiKey, clientId, clientSecret, temporaryTogken } from '$env/static/private';

// import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
// import IdentityManager from "@arcgis/core/identity/IdentityManager.js";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;



export async function load({}) {
  // Fetch data from API
  const res = await fetch(`https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=${apiKey}`);

  const data = await res.json();

  // Return data as JSON
  return {data};
  // console.log(data);
};