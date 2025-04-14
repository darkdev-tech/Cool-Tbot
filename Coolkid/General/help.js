module.exports = {
  name: 'help',
  category: 'general',
  description: 'Provides help and usage guidance.',
  run: async (ctx) => {
    const helpText = `
*🆘 HELP MENU — COOL_KID BOT*

Hey *${ctx.from.first_name || 'there'}*! I'm your multipurpose bot.

Here's what you can do:

• Use */menu* to see all available commands
• All commands start with a slash (/)
• Categories: AI, Anime, General, Downloader, Search

Need something or found a bug?
Contact: @your_support_username

━━━━━━━━━━━━━━━
*Join our WhatsApp Channel:*  
[Click here](https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26)
    `.trim();

    ctx.replyWithMarkdown(helpText, {
      disable_web_page_preview: true
    });
  }
};
