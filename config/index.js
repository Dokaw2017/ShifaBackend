import pkg from "dotenv";
const { config } = pkg;
const { parsed } = config();

export const {
  PORT,
  MODE,
  BASE_URL,
  URL = `${BASE_URL}${PORT}`,
  IN_PROD = MODE !== "prod",
  SECRET,
  STRIP_SECRET_TEST,
} = parsed;
