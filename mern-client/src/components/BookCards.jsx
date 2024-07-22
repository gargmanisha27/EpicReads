import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-8 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black mb-8">{headline}</h2>

      <div className="mt-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="flex justify-center items-center overflow-hidden">
              <Link to={`/book/${book._id}`} className="block w-full">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-auto object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
