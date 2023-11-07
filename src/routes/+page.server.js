import { apiKey } from '$env/static/private';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

export async function load({ context, params }) {

  // perform fetech

  // Fetch data from API
  const res = await fetch(`https://developerservices.itsmarta.com:18096/railrealtimearrivals?apiKey=${apiKey}`);

  const data = await res.json();

  // Return data as JSON
  return data;
};