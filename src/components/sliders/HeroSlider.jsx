import Slider from "react-slick";


function HeroSlider() {
   const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 2000,
      slidesToShow: 2,
      slidesToScroll: 1,
      pauseOnHover: true,
      swipeToSlide: true,
    };
  return (
    <div className="slider-container inner-arrows">
      <Slider {...settings}>
         <div className="relative group rounded-lg bg-black h-80 overflow-hidden">
            <div className="h-full w-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://imageproxy.wolt.com/mes-image/8695de58-c638-437d-a314-ad0ee5bc530f/2c3dbb05-f61a-429a-9338-b5c22f38b408')" }}>
            </div>
         </div>

         <div className="relative group rounded-lg bg-black h-80 overflow-hidden">
            <div className="h-full w-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://imageproxy.wolt.com/mes-image/8695de58-c638-437d-a314-ad0ee5bc530f/2c3dbb05-f61a-429a-9338-b5c22f38b408')" }}>
            </div>
         </div>

         <div className="relative group rounded-lg bg-black h-80 overflow-hidden">
            <div className="h-full w-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://imageproxy.wolt.com/mes-image/8695de58-c638-437d-a314-ad0ee5bc530f/2c3dbb05-f61a-429a-9338-b5c22f38b408')" }}>
            </div>
         </div>

         <div className="relative group rounded-lg bg-black h-80 overflow-hidden">
            <div className="h-full w-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://imageproxy.wolt.com/mes-image/8695de58-c638-437d-a314-ad0ee5bc530f/2c3dbb05-f61a-429a-9338-b5c22f38b408')" }}>
            </div>
         </div>


      </Slider>
    </div>
  );
}

export default HeroSlider;
