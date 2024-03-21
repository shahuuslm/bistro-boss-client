import SectionTitle from "../../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5050/reviews',[])
        .then(res => res.json())
        .then(data => setReview(data))
    })
    return (

        <div>
            <SectionTitle
                subHeading={'---What our clients say---'}
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    ><div className="mx-20 text-center flex flex-col gap-6 items-center">
                        <Rating value={review.rating} style={{maxWidth:300}} readOnly/>
                        <p>{review.details}</p>
                        <h3 className="font-medium text-xl">{review.name}</h3>
                    </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;