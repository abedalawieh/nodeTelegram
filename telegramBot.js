import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Define the video file path
const videoFilePath = "path_to_your_video.mp4"; // Replace with the actual file path

bot.onText(/\/start/, (message) => {
  const chatId = message.chat.id;

  // Create an inline keyboard with buttons
  const keyboard = {
    inline_keyboard: [
      [
        { text: "Login/Website", callback_data: "loginW" },
        { text: "Login/API", callback_data: "loginA" },
      ],
      [{ text: "Digi Nums Channel ", url: "https://t.me/diginums" }],
      [{ text: "Digi Nums Support ", url: "mailto:support@diginums.com" }],
      [{ text: "Email Us", url: "WWW.GOOGLE.COM" }],
      [{ text: "Full Guide ", url: "WWW.GOOGLE.COM" }],
    ],
  };

  // Send the welcome message with the inline keyboard
  bot.sendMessage(
    chatId,
    `Welcome to the main menu of the Digi Nums Bot!\n\n` +
      `With this bot, you can buy or rent virtual numbers to receive SMS with confirmation codes.\n\n` +
      `To get started with the bot, you must first authorize. Please, if you are not authorized, click on the Login button.\n\n` +
      `Authorization Options:\n` +
      `1. 🔑 Via API Key (Find it on your personal account page)\n` +
      `2. 👤 Via Telegram account (Register on our website)\n\n` +
      `If you have any problems, you can write to us in the Telegram Channel https://t.me/diginums or send a message to support@diginums.com. Our support staff will help you solve any questions.\n\n` +
      `Telegram: @digiNums_Support_Bot\n` +
      `😱 Digi Nums BOT WALKTHROUGH 😱\n` +
      `⁉️ Feel complicated about using our bot? We've created a special solution for you!\n` +
      `✅ Watch this video to understand how to:\n` +
      `    🔑 Log in to your account\n` +
      `    🔍 Browse available numbers\n` +
      `    🛒 Buy or rent virtual numbers\n` +
      `    📱 Receive SMS with confirmation codes`,
    {
      reply_markup: JSON.stringify(keyboard),
    }
  );
  // Send the video as a separate message
  bot.sendVideo(chatId, videoFilePath);
});
