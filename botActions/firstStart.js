import bot from "../botCreation.js";
import { firstKeyboard } from "../keyboards.js";

export const firstStart = () => {
  try {
    bot.on("message", (msg) => {
      const chatId = msg.chat.id;

      try {
        bot.sendMessage(chatId, "Please Choose from the options below:", {
          reply_markup: JSON.stringify(firstKeyboard),
        });
        //  bot.sendVideo(chatId, videoFilePath);
      } catch (error) {
        console.error("Error sending messages:", error);
      }
    });
  } catch (e) {
    console.error("Error in firstStart:", e);
  }
};
