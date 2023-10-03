import bot from "../botCreation.js";
import { firstMessage } from "../messages.js";
import { firstKeyboard } from "../keyboards.js";

export const firstStart = () => {
  const photo = "../assets/social-06.jpg";
  bot.on("message", (msg) => {
    console.log(msg.message_id);
    const chatId = msg.chat.id;
    console.log(msg);

    bot.sendMessage(chatId, firstMessage, {
      reply_markup: JSON.stringify(firstKeyboard),
    });
    bot.sendPhoto(chatId, photo);
    // bot.sendVideo(chatId, videoFilePath);
  });
};
