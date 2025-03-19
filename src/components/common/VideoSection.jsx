import React from 'react';

const VideoSection = ({ title, subTitle, videoSource }) => {

    const handleRightClick = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div class="video-background-holder">
                <div class="video-background-overlay"></div>
                <video
                    src={videoSource}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 rounded"
                    onContextMenu={handleRightClick}
                >
                    Vaš pretraživač ne podržava video oznaku.
                </video>
                <div class="video-background-content container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-4">
                                <strong>
                                    {title}
                                </strong>
                            </h1>
                            <p class="lead mb-0">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoSection;
