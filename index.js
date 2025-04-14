require('dotenv').config();
const { Telegraf } = require('telegraf');
const { OpenAI } = require('openai');

const bot = new Telegraf(process.env.BOT_TOKEN);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

bot.command('gpt', async (ctx) => {
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
    console.error('OpenAI Error:', error);
    ctx.reply('Sorry, something went wrong while contacting OpenAI.');
  }
});

bot.launch();
console.log('COOL_KID bot is running...');
