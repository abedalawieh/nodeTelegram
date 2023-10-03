import bot from "../botCreation.js";
import { loginKeyboard, firstKeyboard, cancelKey } from "../keyboards.js";
import { firstMessage } from "../messages.js";

export const callbackQuery = () => {
  try {
    bot.on("callback_query", async (query) => {
      console.log(query);
      const data = query.data;
      const chatId = query.message.chat.id;
      const message_id = query.message.message_id;
      console.log(message_id);

      if (data === "login") {
        const text = "Choose a way to Login In";
        await bot.editMessageText(text, {
          chat_id: chatId,
          message_id: message_id,
          reply_markup: JSON.stringify(loginKeyboard),
        });
      } else if (data === "loginApi") {
        const text =
          "Please enter the API key you received on the site\n If you are not registered, follow this link to register.";

        await bot.editMessageText(text, {
          chat_id: chatId,
          message_id: message_id,
          reply_markup: JSON.stringify(cancelKey),
        });
      } else if (data === "goBack1" || data === "cancel") {
        const text = firstMessage;
        await bot.editMessageText(text, {
          chat_id: chatId,
          message_id: message_id,
          reply_markup: JSON.stringify(firstKeyboard),
        });
      }
    });
  } catch (e) {
    console.log(e.message);
  }
};
