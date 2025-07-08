const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7570491609:AAHq0-secS5jfOq4FRvgoB0hkYB8SK0S7Ds',
  id: isNaN(parsedId) ? 123456789 : 7570491609 // replace 12345.. with your telegram chat id
};
