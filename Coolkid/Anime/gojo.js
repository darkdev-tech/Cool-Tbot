const gojoMedia = [
  'https://i.imgur.com/XYZ123.jpg',
  'https://media.giphy.com/media/l3vR4K2mjX5zs0vZ6/giphy.gif',
  'https://i.redd.it/abc123.png',
  // Add more Gojo pics or gifs here
];

module.exports = {
  name: 'gojo',
  category: 'anime',
  description: 'Sends a random image or gif of Gojo Satoru.',
  run: async (ctx) => {
    try {
      const random = gojoMedia[Math.floor(Math.random() * gojoMedia.length)];
      await ctx.replyWithPhoto({ url: random }, { caption: 'Limitless.' });
    } catch (err) {
      console.error('Gojo command error:', err);
      ctx.reply('Could not load Gojo right now.');
    }
  }
};
