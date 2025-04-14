const axios = require('axios'); // Required if using image APIs

module.exports = {
  name: 'sd',
  category: 'ai',
  description: 'Generate an image from a text prompt using Stable Diffusion.',
  run: async (ctx) => {
    const prompt = ctx.message.text.replace('/sd', '').trim();

    if (!prompt) {
      return ctx.reply('Please provide a prompt. Example: /sd A robot reading a book in space');
    }

    try {
      // Replace with actual API call to image generation service
      // Placeholder image URL
      const fakeImageUrl = 'https://placehold.co/512x512?text=AI+Image';

      await ctx.replyWithPhoto({ url: fakeImageUrl }, { caption: `Prompt: ${prompt}` });
    } catch (err) {
      console.error('Image generation error:', err);
      ctx.reply('Failed to generate image. Please try again later.');
    }
  }
};
