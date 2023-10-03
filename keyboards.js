export const firstKeyboard = {
  inline_keyboard: [
    [{ text: "Login", callback_data: "login" }],
    [{ text: "Digi Nums Channel ", url: "https://t.me/diginums" }],
    [{ text: "Digi Nums Support ", url: "mailto:support@diginums.com" }],
    [{ text: "Full Guide ", url: "WWW.GOOGLE.COM" }],
  ],
};

export const loginKeyboard = {
  inline_keyboard: [
    [
      { text: "Login Via Telegram ", url: "https://t.me/diginums" },
      { text: "Login via API Key ", callback_data: "loginApi" },
    ],
    [{ text: "Go Back", callback_data: "goBack1" }], // Add a "Go Back" button
  ],
};

export const cancelKey = {
  inline_keyboard: [
    [{ text: "Cancel", callback_data: "cancel" }], // Add a "Go Back" button
  ],
};
