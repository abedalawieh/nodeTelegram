import bot from "../botCreation.js";
import { loginKeyboard, firstKeyboard, cancelKey } from "../keyboards.js";
import { firstMessage } from "../messages.js";
export const callbackQuery = () => {
  bot.on("callback_query", (query) => {
    console.log(query);
    const data = query.data;
    const chatId = query.message.chat.id;
    const message_id = query.message.message_id;
    console.log(message_id);

    if (data === "login") {
      const text = "Choose a way to Login In";
      bot.editMessageText(text, {
        chat_id: chatId,
        message_id: message_id,
        reply_markup: JSON.stringify(loginKeyboard),
      });
    } else if (data === "loginApi") {
      const text =
        "Please enter the API key you received on the site\n If you are not registered, follow this link to register.";

      bot.editMessageText(text, {
        chat_id: chatId,
        message_id: message_id,
        reply_markup: JSON.stringify(cancelKey), // Return to the previous menu
      });
    } else if (data === "goBack1") {
      // Handle the "Go Back" button
      const text = firstMessage;
      bot.editMessageText(text, {
        chat_id: chatId,
        message_id: message_id,
        reply_markup: JSON.stringify(firstKeyboard), // Return to the previous menu
      });
    } else if (data === "cancel") {
      // Handle the "Go Back" button
      const text = firstMessage;
      bot.editMessageText(text, {
        chat_id: chatId,
        message_id: message_id,
        reply_markup: JSON.stringify(firstKeyboard), // Return to the previous menu
      });
    }
  });
};
