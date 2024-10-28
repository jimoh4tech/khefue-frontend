import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_URL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3OTU1OThlLTkwZWYtNDEyNy1iNmU3LTQxODQzMDIwOTg3OCIsImVtYWlsIjoib2x1d2FzYW11ZWwwNTBAZ21haWwuY29tIiwiYWNjb3VudFR5cGUiOiIxMTQ1IiwiaWF0IjoxNzMwMTM0MDY3LCJleHAiOjE3MzI3MjYwNjcsImlzcyI6ImtoZWZ1ZXdlYmFuZGFwcCJ9.-0mBP3XB18nziZKo_f4dbkTFQbICNnTei29Axl6XQAc";
export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});
