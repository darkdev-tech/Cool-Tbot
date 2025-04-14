module.exports = {
  name: 'gitclone',
  category: 'downloader',
  description: 'Download a public GitHub repo as a ZIP file.',
  run: async (ctx) => {
    const input = ctx.message.text.replace('/gitclone', '').trim();

    if (!input) {
      return ctx.reply('Please provide a GitHub repository URL. Example: /gitclone https://github.com/user/repo');
    }

    const match = input.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)(\/)?$/);
    if (!match) {
      return ctx.reply('Invalid GitHub URL. Please make sure it follows the format: https://github.com/user/repo');
    }

    const user = match[1];
    const repo = match[2];
    const zipUrl = `https://github.com/${user}/${repo}/archive/refs/heads/main.zip`; // Default branch assumed: main

    const message = `
📁 *GitHub Repo Clone*
• Repository: \`${user}/${repo}\`
• [Download ZIP](${zipUrl})
    `.trim();

    await ctx.replyWithMarkdown(message);
  }
};
