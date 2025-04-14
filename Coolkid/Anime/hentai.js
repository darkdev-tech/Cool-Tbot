const axios = require('axios');

module.exports = {
  name: 'hentai',
  category: 'anime',
  description: 'Sends a random NSFW hentai image.',
  run: async (ctx) => {
    // Check if the chat is allowed for NSFW
    const isGroup = ctx.chat.type.includes('group');
    const allowed = !isGroup || ctx.chat.title.toLowerCase().includes('[nsfw]'); // example rule

    if (!allowed) {
      return ctx.reply('This command is only allowed in NSFW-enabled chats.');
    }

    try {
      const res = await axios.get('https://waifu.pics/api/nsfw/waifu'); // or use hentai endpoint from another API
      const imageUrl = res.data.url;

      await ctx.replyWithPhoto({ url: imageUrl }, { caption: 'Here you go...' });
    } catch (err) {
      console.error('Hentai fetch error:', err);
      ctx.reply('Failed to fetch image. Try again later.');
    }
  }
};
