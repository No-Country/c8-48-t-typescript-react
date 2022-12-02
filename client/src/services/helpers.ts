export const handleMessageError = (messages: string[] = []) =>
  messages
    .map((e) => {
      return `<p>${e}</p>`;
    })
    .join('');
