import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay infiniteLoop stopOnHover>
            <div>
                <img src="https://i.ibb.co/W0FNx9R/01.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/rbMdMFB/02.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/ScPx0GK/03.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/ysKqJhf/04.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/f4xjCf9/05.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/gTm54TN/06.png" />
            </div>
        </Carousel>
    );
};

export default Banner;