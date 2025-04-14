const axios = require('axios');

module.exports = {
  name: 'ytmp4',
  category: 'downloader',
  description: 'Converts a YouTube video to MP4 and sends the video.',
  run: async (ctx) => {
    const input = ctx.message.text.replace('/ytmp4', '').trim();

    if (!input || !input.startsWith('https://')) {
      return ctx.reply('Please provide a valid YouTube link. Example: /ytmp4 https://youtube.com/watch?v=dQw4w9WgXcQ');
    }

    try {
      // Replace with your actual backend or API endpoint
      const res = await axios.get(`https://your-video-api.example.com/api/ytmp4?url=${encodeURIComponent(input)}`);

      if (!res.data || !res.data.video_url) {
        return ctx.reply('Failed to convert the video to MP4.');
      }

      await ctx.replyWithVideo({ url: res.data.video_url }, {
        caption: `🎬 ${res.data.title || 'Here is your MP4'}`
      });
    } catch (err) {
      console.error('ytmp4 error:', err);
      ctx.reply('Something went wrong while fetching the MP4.');
    }
  }
};
