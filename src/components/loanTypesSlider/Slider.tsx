"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/common/Loading";

const Slider = () => {
  const [loanData, setLoanData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(false);
        const { data } = await axios.get("http://localhost:5000/data");
        setLoanData(data);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="modal__wrapper">
        <Loading />
      </div>
    );
  return (
    <div className="mb-6">
      <Swiper
        speed={1500}
        slidesPerView={1}
        spaceBetween={30}
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
