import Banner from "./Banner/Banner";
import Category from "./Banner/Category/Category";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;