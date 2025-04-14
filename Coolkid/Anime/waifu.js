const axios = require('axios');

module.exports = {
  name: 'waifu',
  category: 'anime',
  description: 'Sends a random SFW waifu image.',
  run: async (ctx) => {
    try {
      const res = await axios.get('https://api.waifu.pics/sfw/waifu');
      const imageUrl = res.data.url;

      await ctx.replyWithPhoto({ url: imageUrl }, { caption: 'Here is your waifu!' });
    } catch (err) {
      console.error('Waifu command error:', err);
      ctx.reply('Failed to fetch waifu. Try again later.');
    }
  }
};
