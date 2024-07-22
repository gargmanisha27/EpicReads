import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className="my-8 px-4 lg:px-14">
      <h2 className="text-5xl font-bold text-center mb-6 leading-snug">
        Our Customers
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-md bg-white py-6 px-4 rounded-lg border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Excellent Service</h3>
            <div className="text-amber-500 flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mb-4">
              "Excellent service! The variety of books available is impressive, and the buying process was smooth and quick. Highly recommend!"
            </p>
            <Avatar alt="avatar of Mark Ping" img={proPic} rounded className="w-10 mb-2" />
            <h5 className="text-lg font-medium">Mark Ping</h5>
            <p className="text-sm">CEO, ABC Company</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-md bg-white py-6 px-4 rounded-lg border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Great Platform</h3>
            <div className="text-amber-500 flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mb-4">
              "Fantastic platform for book lovers! The selection is great, and I found several rare books I was looking for. Customer service is also top-notch."
            </p>
            <Avatar alt="avatar of Jane Doe" img={proPic} rounded className="w-10 mb-2" />
            <h5 className="text-lg font-medium">Jane Doe</h5>
            <p className="text-sm">Editor, XYZ Publishing</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-md bg-white py-6 px-4 rounded-lg border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Great Experience</h3>
            <div className="text-amber-500 flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mb-4">
              "A great experience from start to finish. The website is easy to navigate, and the range of books is impressive. Will definitely return."
            </p>
            <Avatar alt="avatar of Alex Smith" img={proPic} rounded className="w-10 mb-2" />
            <h5 className="text-lg font-medium">Alex Smith</h5>
            <p className="text-sm">Freelance Writer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-md bg-white py-6 px-4 rounded-lg border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Highly Recommend</h3>
            <div className="text-amber-500 flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base mb-4">
              "The best place to buy books online. The selection is vast, and the delivery is prompt. I always find what I'm looking for here."
            </p>
            <Avatar alt="avatar of Linda Clark" img={proPic} rounded className="w-10 mb-2" />
            <h5 className="text-lg font-medium">Linda Clark</h5>
            <p className="text-sm">Librarian</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
