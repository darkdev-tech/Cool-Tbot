const axios = require('axios');

module.exports = {
  name: 'play',
  category: 'downloader',
  description: 'Downloads and sends audio from YouTube based on a search query.',
  run: async (ctx) => {
    const query = ctx.message.text.replace('/play', '').trim();

    if (!query) {
      return ctx.reply('Please provide a song name. Example: /play Believer Imagine Dragons');
    }

    try {
      // Example: Using a custom backend or API that returns audio info
      const res = await axios.get(`https://your-mp3-api.example.com/api/play?query=${encodeURIComponent(query)}`);

      if (!res.data || !res.data.audio_url) {
        return ctx.reply('Could not find or download the song.');
      }

      await ctx.replyWithAudio({ url: res.data.audio_url }, {
        caption: `🎶 ${res.data.title}`
      });
    } catch (err) {
      console.error('Play command error:', err);
      ctx.reply('Failed to fetch the song. Try again later.');
    }
  }
};
