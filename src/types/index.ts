export interface Subreddit {
  title: string;
  id: string;
  url: string;
  color: string;
  iconURL: string;
  softName: string;
}

export interface RedditPost {
  id: string;
  title: string;
  author: string;
  ups: number;
  permalink: string;
  url: string;
  created_utc: number;
  is_video: boolean; // Важно
  media?: {
    reddit_video?: {
      fallback_url: string;
    };
  };
  preview?: {
    images: Array<{
      resolutions: Array<{ url: string; width: number; height: number }>;
    }>;
  };
}

export interface RedditResponse {
  data: {
    children: Array<{
      kind: string;
      data: RedditPost;
    }>;
  };
}
