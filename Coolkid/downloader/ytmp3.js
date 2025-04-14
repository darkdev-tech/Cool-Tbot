const axios = require('axios');

module.exports = {
  name: 'ytmp3',
  category: 'downloader',
  description: 'Converts a YouTube video to MP3 and sends the audio.',
  run: async (ctx) => {
    const input = ctx.message.text.replace('/ytmp3', '').trim();

    if (!input || !input.startsWith('https://')) {
      return ctx.reply('Please provide a valid YouTube link. Example: /ytmp3 https://youtube.com/watch?v=dQw4w9WgXcQ');
    }

    try {
      // Replace this with your backend or a trusted API
      const res = await axios.get(`https://your-mp3-api.example.com/api/ytmp3?url=${encodeURIComponent(input)}`);

      if (!res.data || !res.data.audio_url) {
        return ctx.reply('Failed to convert the video to MP3.');
      }

      await ctx.replyWithAudio({ url: res.data.audio_url }, {
        caption: `🎵 ${res.data.title || 'Here is your MP3'}`
      });
    } catch (err) {
      console.error('ytmp3 error:', err);
      ctx.reply('Something went wrong while fetching the MP3.');
    }
  }
};
