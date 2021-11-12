import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ZkMzU0ZGFlYzc1NmI5YWE4Njk3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTk1NjMwNywiZXhwIjoxNjM2MjE1NTA3fQ.qzdoYyRNpLxRAFnuL3xMeqlPiFum1BhCwJOO6OKczT4";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});

