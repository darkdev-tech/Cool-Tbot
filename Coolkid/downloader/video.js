const axios = require('axios');

module.exports = {
  name: 'video',
  category: 'downloader',
  description: 'Searches YouTube and sends the requested video.',
  run: async (ctx) => {
    const query = ctx.message.text.replace('/video', '').trim();

    if (!query) {
      return ctx.reply('Please provide a video name. Example: /video Rick Astley Never Gonna Give You Up');
    }

    try {
      // Replace with your actual YouTube-to-video API endpoint
      const res = await axios.get(`https://your-video-api.example.com/api/video?query=${encodeURIComponent(query)}`);

      if (!res.data || !res.data.video_url) {
        return ctx.reply('Could not find or download the video.');
      }

      await ctx.replyWithVideo({ url: res.data.video_url }, {
        caption: `📹 ${res.data.title}`
      });
    } catch (err) {
      console.error('Video command error:', err);
      ctx.reply('Failed to fetch the video. Try again later.');
    }
  }
};
