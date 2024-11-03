export const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeZone: "Europe/Berlin",
});

export const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Berlin",
});

export const getLastMessage = (updatedAt?: string | Date) => {
  if (!updatedAt) return "";
  const today = new Date();
  const date = new Date(updatedAt);
  const deltaHours = Math.round(
    (today.getTime() - date.getTime()) / (60 * 60 * 1000)
  );
  const delta = Math.round(deltaHours / 24)


  switch (true) {

    case delta === 0:
      return `vor ${deltaHours} Stunden`;

    case delta === 1:
      return `vor ${delta} Tag`;

    case delta < 30:
      return `vor ${delta} Tagen`;

    case delta < 365:
      return `vor ${Math.round(delta / 30)} Monaten`;

    case delta >= 365:
      return `vor ${Math.round(delta / 365)} Jahren`;

    default:
      return "";
  }
};
