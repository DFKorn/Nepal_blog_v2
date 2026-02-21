const API_Root = "https://www.reddit.com";

// https://www.reddit.com/r/EarthPorn/search.json?q=nepal&restrict_sr=1&sr_nsfw=

export const getSubredditPosts = async (subreddit = "EarthPorn") => {
  try {
    const response = await fetch(
      `${API_Root}/r/${subreddit}/search.json?q=nepal&restrict_sr=1&sr_nsfw=&sort=new`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const jsonResponse = await response.json();
    return jsonResponse.data.children.map((post) => post.data);
  } catch (error) {
    console.log(error);
  }
};

export const subredditsList = [
  {
    title: "EarthPorn",
    id: "EarthPorn",
    url: "https://www.reddit.com/r/EarthPorn",
    color: "rgb(221, 189, 55)",
    iconURL:
      "https://styles.redditmedia.com/t5_2sbq3/styles/communityIcon_pf6xg83rv3981.png?width=256&s=2294e78c41cca8a026b027c60c1aea5877b71edd",
    softName: "EarthPictures",
  },
  {
    title: "worldnews",
    id: "worldnews",
    url: "https://www.reddit.com/r/worldnews",
    color: "#24a0ed",
    iconURL: "",
    softName: "World News",
  },
  {
    title: "pics",
    id: "pics",
    url: "https://www.reddit.com/r/pics",
    color: "rgb(255, 255, 255)",
    iconURL:
      "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
    softName: "Pictures",
  },
  {
    title: "NatureIsFuckingLit",
    id: "NatureIsFuckingLit",
    url: "https://www.reddit.com/r/NatureIsFuckingLit",
    color: "rgb(255, 135, 23)",
    iconURL:
      "https://styles.redditmedia.com/t5_3gdh7/styles/communityIcon_pm39k02ckws01.png?width=256&s=a46ca2ac0bc217c4e533a15b2aa3e84b71c7d7ae",
    softName: "Nature",
  },
  {
    title: "travel",
    id: "travel",
    url: "https://www.reddit.com/r/travel",
    color: "rgb(0, 121, 211)",
    iconURL:
      "https://styles.redditmedia.com/t5_2qh41/styles/communityIcon_x4pa3xf5z4d11.jpg?width=256&s=b235da794133a51b9f6ce9fe93eb789553a29d46",
    softName: "Travel",
  },
];
