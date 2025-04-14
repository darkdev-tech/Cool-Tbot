module.exports = {
  name: 'dev',
  category: 'general',
  description: 'Displays information about the bot developer.',
  run: async (ctx) => {
    const message = `
*COOL_KID Bot Developer Info*
👨‍💻 Developer: Cool_kid
🛠 Tech: https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26
📦 Source: (https://github.com/darkdev-tech/Cool-Tbot)
💬 Need help? Contact: @WEB_X ꪹ
    `.trim();

    await ctx.replyWithMarkdown(message);
  }
};
