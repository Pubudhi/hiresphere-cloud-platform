import axios from "axios";

export const profileAPI = axios.create({
  baseURL: "http://ab01531058c9d44d19c579612b3e07f2-1982258502.ap-southeast-1.elb.amazonaws.com:3001"
});

export const bookingAPI = axios.create({
  baseURL: "http://ade162663129b40e79491fd25306783e-241988909.ap-southeast-1.elb.amazonaws.com:3002"
});

export const submissionAPI = axios.create({
  baseURL: "http://a0a842368e2b244bca3f05ca51034018-1100873480.ap-southeast-1.elb.amazonaws.com:3003"
});