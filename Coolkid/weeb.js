const axios = require('axios');

async function weebCommand() {
  try {
    const res = await axios.get('https://api.waifu.pics/sfw/waifu');
    return res.data.url; // Send this image URL in your bot
  } catch (err) {
    console.error(err);
    return 'Weeb server down, try again later.';
  }
   
}

const axios = require('axios');

async function nekoCommand() {
  try {
    const res = await axios.get('https://api.waifu.pics/sfw/neko');
    return res.data.url; // Send this image as a photo/message
  } catch (err) {
    console.error(err);
    return 'Neko ran away... try again later.';
  }
}
