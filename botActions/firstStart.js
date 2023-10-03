import bot from "../botCreation.js";
import { firstMessage } from "../messages.js";
import { firstKeyboard } from "../keyboards.js";

export const firstStart = () => {
  try {
    const photo = "../assets/social-06.jpg";
    bot.on("message", async (msg) => {
      console.log(msg.message_id);
      const chatId = msg.chat.id;
      console.log(msg);

      try {
        await bot.sendMessage(chatId, firstMessage, {
          reply_markup: JSON.stringify(firstKeyboard),
        });
        await bot.sendPhoto(chatId, photo);
        // await bot.sendVideo(chatId, videoFilePath);
      } catch (error) {
        console.error("Error sending messages:", error);
      }
    });
  } catch (e) {
    console.error("Error in firstStart:", e);
  }
};
