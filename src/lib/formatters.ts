export const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeZone: "Europe/Berlin",
});

export const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Berlin",
});

export const getLastMessage = (updatedAt?: string) => {
  if (!updatedAt) return "";
  const today = new Date();
  const date = new Date(updatedAt);
  const delta = Math.round(
    (today.getTime() - date.getTime()) / (24 * 60 * 60 * 1000)
  );

  switch (true) {
    case delta === 1:
      return `vor ${delta} Tag`;

    case delta < 30:
      return `vor ${delta} Tagen`;

    case delta < 365:
      return `vor ${Math.round(delta / 30)} Monaten`;

    case delta >= 365:
      return `vor ${Math.round(delta / 365)} Jahren`;

    default:
      "";
  }
};
