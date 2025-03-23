import React from 'react';

const VideoSection = ({ title, subTitle, videoSource }) => {

    const handleRightClick = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="video-background-holder" data-aos='fade-down' data-aos-duration="1000">
                <div className="video-background-overlay"></div>
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
                <div className="video-background-content container h-100" data-aos='zoom-in' data-aos-duration="2000">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-4 video-title">
                                {title}
                            </h1>
                            <p className="lead mb-0 video-sub-title">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoSection;
