module.exports = {
  name: 'uptime',
  category: 'general',
  description: 'Displays how long the bot has been running.',
  run: async (ctx) => {
    const uptime = process.uptime(); // in seconds

    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const message = `⏱ *Bot Uptime:* ${hours}h ${minutes}m ${seconds}s`;
    await ctx.replyWithMarkdown(message);
  }
};
