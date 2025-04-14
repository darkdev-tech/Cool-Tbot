const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = {
  name: 'gpt',
  category: 'ai',
  description: 'Ask anything and get a GPT-powered response.',
  run: async (ctx) => {
    const prompt = ctx.message.text.replace('/gpt', '').trim();

    if (!prompt) {
      return ctx.reply('Please provide a prompt. Example: /gpt Tell me a joke');
    }

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });

      const reply = response.choices[0].message.content.trim();
      ctx.reply(reply);
    } catch (error) {
      console.error('GPT Error:', error);
      ctx.reply('Oops! Something went wrong with the AI.');
    }
  }
};
