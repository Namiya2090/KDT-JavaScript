const settings = {
  theme: "light",
  notifications: { email: true, push: false },
};

// spread로 updated 생성
const updated = {
  ...settings,
  notifications: { ...settings.notifications },
};

updated.theme = "dark";
updated.notifications.email = false;

// 출력
console.log(
  `Settings: ${settings.theme}, ${settings.notifications.email}, ${settings.notifications.push}`,
);
console.log(
  `Settings: ${updated.theme}, ${updated.notifications.email}, ${updated.notifications.push}`,
);
