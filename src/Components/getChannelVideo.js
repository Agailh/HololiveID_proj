import axios from "axios";

const getChannelVideos = async (channelId, apiKey) => {
  try {
    const publishedBeforeDate = new Date().toISOString();
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCP85AhrvlXuQcfhSjauwueVFs5LnKXpUo&part=snippet&channelId=UCTvHWSfBZgtxE4sILOaurIQ&maxResults=10&type=video&order=date&publishedBefore=${publishedBeforeDate}`
    );
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};

export default getChannelVideos;