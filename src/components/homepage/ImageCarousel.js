import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    const carouselStyle = {
        width: '50%', // 将图片显示区域缩小为当前区域的50%
        margin: '0 auto', // 居中显示
    };

    return (
        <div className="custom-carousel-container"> {/* 使用新的 CSS 类名 */}
            <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                stopOnHover={false}
                swipeable={true}
                style={carouselStyle} // 应用样式
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;
