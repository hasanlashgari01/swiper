import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `
              <span class="${className}">
                <span class="progress"></span>
              </span>
            `;
        },
      }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={(_swiper, _time, progress) => {
        const activeBullet = document.querySelector(".swiper-pagination-bullet-active .progress");

        if (activeBullet) {
          activeBullet.style.setProperty("--progress", `${(1 - progress) * 100}%`);
        }
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://dgshahr.com/_next/image?url=https%3A%2F%2Fmarketplace.s3.ir-thr-at1.arvanstorage.ir%2Fpage_builder%2F2024%2F11%2F8rQ_-jM.webp&w=1920&q=75"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dgshahr.com/_next/image?url=https%3A%2F%2Fmarketplace.s3.ir-thr-at1.arvanstorage.ir%2Fpage_builder%2F2025%2F7%2Fnx8D0RM.webp&w=1920&q=75"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dgshahr.com/_next/image?url=https%3A%2F%2Fmarketplace.s3.ir-thr-at1.arvanstorage.ir%2Fpage_builder%2F2025%2F2%2F-N5ewEM.webp&w=1920&q=75"
          alt=""
        />
      </SwiperSlide>
      <button ref={nextRef} className="swiper-btn prev">
        ←
      </button>
      <button ref={prevRef} className="swiper-btn next">
        →
      </button>
    </Swiper>
  );
}

export default App;
