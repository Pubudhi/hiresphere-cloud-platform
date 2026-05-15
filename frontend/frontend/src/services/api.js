import axios from "axios";

export const profileAPI = axios.create({
  baseURL: "http://localhost:3001"
});

export const bookingAPI = axios.create({
  baseURL: "http://localhost:3002"
});

export const submissionAPI = axios.create({
  baseURL: "http://localhost:3003"
});