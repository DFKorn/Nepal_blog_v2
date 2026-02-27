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
  is_gallery?: boolean;
  gallery_data?: {
    items: Array<{ media_id: string; caption?: string }>;
  };
  media_metadata?: Record<
    string,
    {
      s: { u: string; x: number; y: number }; // Source
      p: Array<{ u: string; x: number; y: number }>; // Previews
    }
  >;
}

export interface RedditResponse {
  data: {
    children: Array<{
      kind: string;
      data: RedditPost;
    }>;
  };
}
