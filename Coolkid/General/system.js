const os = require('os');

module.exports = {
  name: 'system',
  category: 'general',
  description: 'Shows system and runtime stats.',
  run: async (ctx) => {
    const uptime = process.uptime(); // in seconds
    const formatUptime = `${Math.floor(uptime / 60)}m ${Math.floor(uptime % 60)}s`;

    const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);

    const message = `
🖥 *System Status*
• Uptime: ${formatUptime}
• Platform: ${os.platform()} (${os.arch()})
• RAM Usage: ${usedMem} MB / ${totalMem} MB
• CPU: ${os.cpus()[0].model}
    `.trim();

    await ctx.replyWithMarkdown(message);
  }
};
