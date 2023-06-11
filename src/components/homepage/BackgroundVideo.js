import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Welcome from './Welcome';

const BackgroundVideo = ({ src, data}) => {
    const [showWelcome, setShowWelcome] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setShowWelcome(scrollPosition < window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const videoStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        '@media (maxWidth: 600px)': {
          height: '50%',
        },
      };
      

    return (
        <div>
            <div style={videoStyle}>
                <ReactPlayer url={`${process.env.PUBLIC_URL}/${src}`} playing loop muted width="100%" height="100%" />
            </div>
            <div style={{ height: '100vh', position: 'relative' }}>
                {showWelcome && (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                         <Welcome welcome={data.welcome} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default BackgroundVideo;
