const axios = require('axios');

const YT_API_KEY = 'YOUR_YOUTUBE_API_KEY';

async function searchYouTube(query) {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        key: YT_API_KEY,
        maxResults: 3,
        type: 'video',
      }
    });

    const videos = response.data.items;
    if (videos.length === 0) return 'No videos found.';

    return videos.map(video => {
      const title = video.snippet.title;
      const url = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      return `${title}\n${url}`;
    }).join('\n\n');

  } catch (error) {
    console.error(error);
    return 'Error fetching YouTube videos.';
  }
}

// Example usage
(async () => {
  const result = await searchYouTube('cool coding tutorials');
  console.log(result);
})();
