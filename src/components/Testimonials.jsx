import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const TestimonialData = [
  {
    id: 1,
    name: "Hildan Syaeful Arif",
    text: "“Sejak coba gula aren batok dari Jati Rasa, saya langsung ganti pemanis di rumah. Rasanya khas, manisnya pas, dan lebih sehat dibanding gula putih biasa. Cocok banget buat bikin teh panas di pagi hari.”",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Mohamad Rifky Rosyadi",
    text: "“Gula aren semut Jati Rasa jadi favorit saya karena praktis banget. Tinggal tabur aja ke kopi atau oatmeal. Rasanya alami, gak bikin enek, dan yang penting indeks glikemiknya lebih rendah.”",
     img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Muhamad Faqih",
    text: "“Sebagai pemilik kedai kopi, saya butuh pemanis yang konsisten rasanya. Gula aren semut Jati Rasa ini juara. Teksturnya halus, gampang dicampur, dan bikin cita rasa minuman lebih kaya.”",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Rifyal Amrullah",
    text: "“Sebagai orang yang jaga pola makan, gula aren cair Jati Rasa jadi solusi terbaik. Tinggal tuang sedikit, manisnya langsung terasa tapi gak bikin guilty. Lebih sehat dibanding gula rafinasi.”",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Salwa Fitri",
    text: "“Dulu anak-anak saya susah minum jamu, tapi sejak pakai gula aren batok Jati Rasa rasanya jadi lebih enak. Teksturnya mudah larut, dan aromanya bikin minuman jadi lebih segar.”",
    img: "https://picsum.photos/105/105",
  },
    {
    id: 5,
    name: "Sherly Suci Ramadhani",
    text: "“Gula aren cair Jati Rasa bener-bener memudahkan saya bikin resep. Mau bikin dessert, minuman kekinian, sampai saus marinasi jadi lebih enak. Kemasannya juga higienis dan gampang dipakai.”",
    img: "https://picsum.photos/106/106",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="testimonial"
      className="py-20 from-amber-100 to-amber-700 bg-gradient-to-t"
    >
      <div className="max-w-7xl mx-auto">
        {/* header section */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-center text-amber-900 text-4xl font-bold font-cursive"
          >
            Testimonials
          </motion.h1>
        </div>
        {/* Testimonials cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-amber-900/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
