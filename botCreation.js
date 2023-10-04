import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { firstMessage } from "./messages.js";

dotenv.config();

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {
  polling: true,
  baseApiUrl: "https://api.telegram.org",
});

export default bot;

// Example usage of the mutex
bot.on("message", async (msg) => {
  try {
    //   "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
    await bot.sendMessage(msg.chat.id, firstMessage);
    // bot.sendPhoto(msg.chat.id, photo);
  } catch (error) {
    console.error("Error processing message:", error.MESSAGE);
  }
});
