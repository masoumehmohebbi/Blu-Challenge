"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  const [loanData, setLoanData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then(({ data }) => setLoanData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mb-6">
      <Swiper
        speed={1500}
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {loanData?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="sliderWrapper">
              <img src={item.cover} alt={item.name} />

              <div className="loam-wrapper">
                <h3>{item.name}</h3>
                <div>
                  <span>مبلغ:</span>
                  <span>{item.amount}</span>
                </div>
                <div>
                  <span>مدت زمان پرداخت:</span>
                  <span>{item.repaymentType[0].name}</span>
                </div>
                <div>
                  <span>نرخ بهره:</span>
                  <span>{item.interestRate}</span>
                </div>
                <div>
                  <span>نرخ جریمه:</span>
                  <span>{item.penaltyRate}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
