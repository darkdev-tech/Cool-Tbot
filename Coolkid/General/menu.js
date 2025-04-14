module.exports = {
  name: 'menu',
  category: 'general',
  description: 'Shows all available commands categorized.',
  run: async (ctx) => {
    const menu = `
*╭─〔 🤖 COOL_KID BOT MENU 〕─╮*

*⚙️ General*
• /dev — Developer info  
• /channel — Bot's channels  
• /system — Bot system info  
• /uptime — Bot uptime  
• /menu — This menu  

*🔍 Search*
• /wikipedia — Search Wikipedia  

*⚡ AI*
• /gpt — Chat with AI  
• /sd — Generate images  

*🎌 Anime*
• /neko — Random neko image  
• /hentai — NSFW image  
• /gojo — Gojo image  
• /waifu — Random waifu  

*⬇️ Downloader*
• /apk — Download APK  
• /gitclone — Clone a GitHub repo  
• /play — Download music  
• /video — Download video  
• /ytmp3 — YouTube to MP3  
• /ytmp4 — YouTube to MP4  

━━━━━━━━━━━━━━━
*🔗 Join our WhatsApp Channel:*  
[Click here](https://whatsapp.com/channel/your-channel-id)

*╰─ Powered by COOL_KID ─╯*
    `.trim();

    ctx.replyWithMarkdown(menu, {
      disable_web_page_preview: true
    });
  }
};
