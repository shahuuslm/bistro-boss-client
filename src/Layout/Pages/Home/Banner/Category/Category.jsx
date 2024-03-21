import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../../../Components/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
            heading={'Order Online'}
            subHeading={'---From 11:00am to 10:00pm---'}></SectionTitle>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="https://i.ibb.co/zfcP2QV/slide3.jpg"/>
                <h2 className='text-center uppercase -mt-24 text-2xl text-white shadow-lg'>pizza</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/4sZfkrm/slide4.jpg"/>
                <h2 className='text-center uppercase -mt-24 text-2xl text-white shadow-lg'>Sauce</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/QNsnckp/slide2.jpg"/>
                <h2 className='text-center uppercase -mt-24 text-2xl text-white shadow-lg'>CHocolate</h2>
                </SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;