const axios = require('axios');

module.exports = {
  name: 'play',
  category: 'search',
  description: 'Searches YouTube and returns the first result.',
  async execute(ctx) {
    const query = ctx.message.text.split(' ').slice(1).join(' ');
    if (!query) return ctx.reply('Please provide a search query.');

    try {
      const res = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          key: process.env.YT_API_KEY,
          maxResults: 1,
          type: 'video',
        },
      });

      const video = res.data.items[0];
      const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

      ctx.reply(`Top result:\n${video.snippet.title}\n${videoUrl}`);
    } catch (err) {
      console.error(err);
      ctx.reply('Error fetching search results.');
    }
  },
};
