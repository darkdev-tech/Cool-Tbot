const { exec } = require('child_process');

async function rebotCommand(msg, bot) {
  const chatId = msg.chat.id;
  
  // Optional: Owner check (replace with your Telegram ID)
  const ownerId = 123456789;
  if (msg.from.id !== ownerId) {
    return bot.sendMessage(chatId, 'Only the bot owner can use this command.');
  }

  await bot.sendMessage(chatId, '♻️ Rebooting...');

  // Restart command (assuming you're using something like PM2, forever, or a custom script)
  exec('pm2 restart cool_kid_bot', (error, stdout, stderr) => {
    if (error) {
      console.error(`Reboot error: ${error}`);
      return;
    }
    console.log(`Rebooted: ${stdout}`);
  });
}
