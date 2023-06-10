import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import BackgroundVideo from './BackgroundVideo';
import Values from './Values';
import SocialMedia from './SocialMedia';
import './SocialMedia.css'; 

const HomePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('${process.env.PUBLIC_URL}/data/homepage.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (data === null) {
        return 'Loading...';
    }


    return (
        <div>
            <BackgroundVideo src={data.videoBackground} data={data}/>
            <ImageCarousel images={data.carouselImages} />
            <Values values={data.values} />
            <SocialMedia content={data.socialMedia.content} links={data.socialMedia.links} />
        </div>
    );
}

export default HomePage;
