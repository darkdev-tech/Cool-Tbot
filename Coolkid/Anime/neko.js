const axios = require('axios');

module.exports = {
  name: 'neko',
  category: 'anime',
  description: 'Sends a random neko image.',
  run: async (ctx) => {
    try {
      const res = await axios.get('https://nekos.best/api/v2/neko');
      const imageUrl = res.data.results[0].url;

      await ctx.replyWithPhoto({ url: imageUrl }, { caption: 'Here\'s your neko!' });
    } catch (err) {
      console.error('Neko fetch error:', err);
      ctx.reply('Could not fetch neko image. Try again later.');
    }
  }
};
