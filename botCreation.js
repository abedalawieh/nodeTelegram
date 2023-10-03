import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {
  polling: true,
  baseApiUrl: "https://api.telegram.org",
});
export default bot;
