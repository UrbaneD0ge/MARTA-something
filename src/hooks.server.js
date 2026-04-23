// import { apiKey, clientId, clientSecret, temporaryToken } from '$env/static/private';
// import { onMount } from 'svelte';
// import OAuthInfo from "@arcgis/core/identity/OAuthInfo.js";
// import IdentityManager from "@arcgis/core/identity/IdentityManager.js";

// // let IdentityManager;

// console.log('Hooks');

//   // const module = await import("@arcgis/core/identity/IdentityManager.js");
//   // const Omodule = await import( "@arcgis/core/identity/OAuthInfo.js");
//   // IdentityManager = module.default;
//   // const OAuthInfo = Omodule.default;

//   // Create a new OAuthInfo object.
//   // The OAuth sign-in page will be shown in a popup window and use the specified callback URL.
//   const info = new OAuthInfo({
//     appId: clientId,
//     popup: true,
//     // If using a callback page other than the default one,
//     // make sure it supports the authentication type used.
//     popupCallbackUrl: "<url to callback page>"
//   });

//   // Add this OAuthInfo object to the IdentityManager.
//   esriId.registerOAuthInfos([info]);
