const axios = require('axios');

module.exports = {
  name: 'wikipedia',
  category: 'search',
  description: 'Searches Wikipedia and returns a summary.',
  run: async (ctx) => {
    const query = ctx.message.text.replace('/wikipedia', '').trim();

    if (!query) {
      return ctx.reply('Please provide a search term. Example: /wikipedia JavaScript');
    }

    try {
      const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);

      if (res.data.extract) {
        const reply = `*${res.data.title}*\n\n${res.data.extract}\n\n[Read more on Wikipedia](${res.data.content_urls.desktop.page})`;
        await ctx.replyWithMarkdown(reply);
      } else {
        ctx.reply('No summary found for that term.');
      }
    } catch (err) {
      console.error('Wikipedia error:', err);
      ctx.reply('Could not fetch information from Wikipedia.');
    }
  }
};
