export const firstKeyboard = {
  inline_keyboard: [
    [{ text: "Login", callback_data: "login" }],
    [{ text: "Digi Nums Channel ", url: "https://t.me/diginums" }],
    [{ text: "Digi Nums Support ", url: "mailto:support@diginums.com" }],
    [{ text: "Full Guide ", url: "WWW.GOOGLE.COM" }],
  ],
};
export const personalKeyboard = {
  inline_keyboard: [
    [{ text: "My Account", callback_data: "myAccount" }],
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
    [{ text: "Go Back", callback_data: "goBack1" }],
  ],
};

export const cancelKey = {
  inline_keyboard: [[{ text: "Cancel", callback_data: "cancel" }]],
};

export const loggedInKeyboard = {
  inline_keyboard: [
    [
      { text: "Buy number", callback_data: "buyNumber" },
      { text: "Rent number", callback_data: "rent" },
    ],
    [
      { text: "My numbers", callback_data: "My Rents" },
      { text: "Rent number", callback_data: "rent" },
    ],
    [{ text: "Balance", callback_data: "balance" }],
    [{ text: "Logout", callback_data: "logout" }],

    [{ text: "Go Back", callback_data: "goBack2" }],
  ],
};
export const rentKeyboard = {
  inline_keyboard: [
    [
      { text: "Few Hours", callback_data: "fewHours" },
      { text: "Few Days", callback_data: "fewDays" },
    ],
    [
      { text: "Few Weeks", callback_data: "fewWeeks" },
      { text: "Few Months", callback_data: "fewMonths" },
    ],

    [{ text: "Go Back", callback_data: "goBack3" }],
  ],
};

export const rentHoursKeyboard = {
  inline_keyboard: [
    [
      { text: "4 Hours", callback_data: "fourHours" },
      { text: "5 Hours", callback_data: "fiveHours" },
    ],
    [
      { text: "6 Hours", callback_data: "sixHours" },
      { text: "7 Hours", callback_data: "sevenHours" },
    ],

    [{ text: "Go Back", callback_data: "goBack4" }],
  ],
};
export const rentDaysKeyboard = {
  inline_keyboard: [
    [
      { text: "1 Day", callback_data: "day" },
      { text: "2 Days", callback_data: "twoDays" },
    ],
    [
      { text: "3 Days", callback_data: "threeDays" },
      { text: "4 Days", callback_data: "fourDays" },
    ],
    [
      { text: "5 Days", callback_data: "fiveDays" },
      { text: "6 Days", callback_data: "sixDays" },
    ],
    [{ text: "7 Days", callback_data: "sevenDays" }],

    [{ text: "Go Back", callback_data: "goBack5" }],
  ],
};
export const rentWeeksboard = {
  inline_keyboard: [
    [
      { text: "1 Week", callback_data: "oneWeek" },
      { text: "2 Weeks", callback_data: "twoWeeks" },
    ],
    [
      { text: "3 Weeks", callback_data: "threeWeeks" },
      { text: "4 Weeks", callback_data: "fourWeeks" },
    ],

    [{ text: "Go Back", callback_data: "goBack6" }],
  ],
};
export const rentMonthsboard = {
  inline_keyboard: [
    [
      { text: "1 Month", callback_data: "month" },
      { text: "2 Months", callback_data: "twoMonths" },
    ],
    [{ text: "3 Months", callback_data: "threeMonths" }],

    [{ text: "Go Back", callback_data: "goBack7" }],
  ],
};
