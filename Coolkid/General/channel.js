module.exports = {
  name: 'channel',
  category: 'general',
  description: 'Sends the link to the official whatsapp channel.',
  run: async (ctx) => {
    const channelInfo = `
📢 *Official COOL_KID Channel*  
Join for updates, news, and fun stuff!

➡️ [Click here to join](https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26)
    `.trim();

    await ctx.replyWithMarkdown(channelInfo);
  }
};
