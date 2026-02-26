import "./post.css";
import moment from "moment";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { RedditPost } from "@/types";

interface PostProps {
  post: RedditPost;
  index: number;
}

const REDDIT_BASE = "https://www.reddit.com";
const USER_BASE = "https://www.reddit.com/user/";

const transformUrl = (url: string) => url.replaceAll("amp;", "");

const Post = ({ post, index }: PostProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!post) return <h2>Something went wrong...</h2>;

  const resolutions = post.preview?.images?.[0]?.resolutions;

  // content definition logic: if post is video and has reddit_video media, then it's a video post
  const isVideo = post.is_video && post.media?.reddit_video;
  const isGallery = post.is_gallery && post.gallery_data && post.media_metadata;

  // 2. gallery data preparation
  const galleryItems = isGallery
    ? post.gallery_data!.items.map((item) => {
        const metadata = post.media_metadata![item.media_id];
        // take 4th resolution for gallery preview, if there are less than 4, take the highest available
        const url = metadata.p?.[4]?.u || metadata.s.u;
        return { url: transformUrl(url), caption: item.caption };
      })
    : [];

  const nextPhoto = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent link navigation
    setCurrentImgIndex((prev) =>
      prev + 1 === galleryItems.length ? 0 : prev + 1,
    );
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1,
    );
  };

  const videoUrl = post.media?.reddit_video?.fallback_url;

  const generateSrcSet = () => {
    if (!resolutions || resolutions.length === 0) return undefined;
    if (resolutions.length < 5)
      return transformUrl(resolutions[resolutions.length - 1].url);
    return `${transformUrl(resolutions[3].url)} 640w, ${transformUrl(resolutions[4].url)} 960w`;
  };

  const backgroundThumb = resolutions?.[0]
    ? `url(${transformUrl(resolutions[0].url)})`
    : "none";

  return (
    <article className="post-card">
      <div className="post-wrapper">
        <div className="post-container">
          <h3 className="post-title">
            <a
              href={`${REDDIT_BASE}${post.permalink}`}
              className="post-title-link"
              target="_blank"
              rel="noreferrer"
            >
              {post.title}
            </a>
          </h3>

          <div className="post-media-container">
            {isVideo ? (
              /* render video */
              <div className="video-wrapper">
                <video
                  controls
                  muted
                  loop
                  playsInline
                  className="post-video"
                  poster={
                    resolutions
                      ? transformUrl(resolutions[resolutions.length - 1].url)
                      : ""
                  }
                >
                  <source src={transformUrl(videoUrl!)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : isGallery ? (
              /* Gallery render */
              <div className="gallery-wrapper">
                <img
                  src={galleryItems[currentImgIndex].url}
                  alt=""
                  className="post-image"
                />
                {galleryItems.length > 1 && (
                  <>
                    <button
                      className="gallery-nav prev"
                      onClick={prevPhoto}
                      aria-label="Previous"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="gallery-nav next"
                      onClick={nextPhoto}
                      aria-label="Next"
                    >
                      <FaChevronRight />
                    </button>
                    <div className="gallery-counter">
                      {currentImgIndex + 1} / {galleryItems.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* render image */
              <a
                href={`${REDDIT_BASE}${post.permalink}`}
                className="post-image-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="post-image"
                  src={post.url}
                  srcSet={generateSrcSet()}
                  sizes="(max-width: 640px) 200px, 1100px"
                  alt={post.title}
                  loading={index < 3 ? "eager" : "lazy"}
                  style={{
                    backgroundImage: backgroundThumb,
                    backgroundSize: "cover",
                  }}
                />
              </a>
            )}
          </div>

          <div className="post-details">
            <span className="post-by">Posted by</span>
            <div className="author-details">
              <a
                href={`${USER_BASE}${post.author}`}
                className="autor-link"
                target="_blank"
                rel="noreferrer"
              >
                <FaUserCircle className="user-icon" />
                <span className="author-username">{post.author}</span>
              </a>
            </div>
            <span className="post-time">
              {moment.unix(post.created_utc).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
