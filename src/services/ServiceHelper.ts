import axios from "axios";

export const api = axios.create({
  baseURL:
    "mongodb+srv://DevMode:DEV23meca16_@mecagarage.vsemaee.mongodb.net/?retryWrites=true&w=majority",
  timeout: 10000,
  headers: {
    accept: "application/json",
  },
});
