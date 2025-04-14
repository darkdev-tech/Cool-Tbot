const axios = require('axios');

module.exports = {
  name: 'apk',
  category: 'download',
  description: 'Searches for an Android APK and returns the app link.',
  run: async (ctx) => {
    const query = ctx.message.text.replace('/apk', '').trim();

    if (!query) {
      return ctx.reply('Please provide an app name. Example: /apk WhatsApp');
    }

    try {
      const searchUrl = `https://apkpure.com/search?q=${encodeURIComponent(query)}`;
      const message = `
🔍 *APK Search:* _${query}_
Here’s a link to view results on APKPure:
[View on APKPure](${searchUrl})
      `.trim();

      await ctx.replyWithMarkdown(message);
    } catch (err) {
      console.error('APK search error:', err);
      ctx.reply('Failed to search for APK. Try again later.');
    }
  }
};
