import React from "react";
// import './post.css'
import Skeleton from 'react-loading-skeleton';



const PostLoading = () => {

    const getRandomNumber = (min,max) =>{
        return Math.floor(Math.random() * (max - min) + min)
  }

    return (
        <>
        <article >
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <Skeleton count={1} height={getRandomNumber(60,120)} width={'100%'}/>
                        </h3>
                        <div className="post-image-container">
                            <Skeleton count={1} height={getRandomNumber(300,500)} width={'100%'}/>
                        </div>
                        <div className="post-details" style={{display: 'block'}}>
                            <Skeleton count={1} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article >
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <Skeleton count={1} height={getRandomNumber(60,120)} width={'100%'}/>
                        </h3>
                        <div className="post-image-container">
                            <Skeleton count={1} height={getRandomNumber(300,500)} width={'100%'}/>
                        </div>
                        <div className="post-details" style={{display: 'block'}}>
                            <Skeleton count={1} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article >
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <Skeleton count={1} height={getRandomNumber(60,120)} width={'100%'}/>
                        </h3>
                        <div className="post-image-container">
                            <Skeleton count={1} height={getRandomNumber(300,600)} width={'100%'}/>
                        </div>
                        <div className="post-details" style={{display: 'block'}}>
                            <Skeleton count={1} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article >
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <Skeleton count={1} height={getRandomNumber(60,120)} width={'100%'}/>
                        </h3>
                        <div className="post-image-container">
                            <Skeleton count={1} height={getRandomNumber(300,500)} width={'100%'}/>
                        </div>
                        <div className="post-details" style={{display: 'block'}}>
                            <Skeleton count={1} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article >
            <div className="post-card">
                <div className="post-wrapper">
                    <div className="post-container">
                        <h3 className="post-title">
                            <Skeleton count={1} height={getRandomNumber(60,120)} width={'100%'}/>
                        </h3>
                        <div className="post-image-container">
                            <Skeleton count={1} height={getRandomNumber(300,500)} width={'100%'}/>
                        </div>
                        <div className="post-details" style={{display: 'block'}}>
                            <Skeleton count={1} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        </>

        
    );
}

export default PostLoading
