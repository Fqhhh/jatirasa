import React from 'react'
import Img1 from '../assets/arenbatok.png'
import Img2 from '../assets/arensemut.png'
import { motion } from 'framer-motion'
import { useState } from "react";


const MenuData = [
  {
    id: 1,
    img: Img1,
    name: "Gula Aren Batok",
    description: "Nikmati manis alami dari aren batok pilihan...",
    price: 12000,
    details: {
      berat: "1000 gr",
      manfaat: "Sumber energi alami, kaya mineral.",
      penggunaan: "Larutkan dalam kopi, teh, atau masakan.",
    },
  },
  {
    id: 2,
    img: Img2,
    name: "Gula Aren Semut",
    description: "Rasakan gula semut aren yang lembut...",
    price: 35000,
    details: {
      berat: "1000 gr",
      manfaat: "Praktis, cocok untuk minuman dan kue.",
      penggunaan: "Taburkan langsung atau larutkan.",
    },
  },
  {
    id: 3,
    img: Img2,
    name: "Gula Aren Cair",
    description: "Gula aren cair praktis dengan cita rasa otentik...",
    price: 35000,
    details: {
      berat: "1000 ml",
      manfaat: "Alternatif sehat gula pasir, mudah digunakan.",
      penggunaan: "Campurkan dalam minuman dingin/panas atau saus.",
    },
  },
];

const Menu = () => {
  const [openId, setOpenId] = useState(null);

  // formatter untuk rupiah
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  return (
    <div id="menu" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl font-bold font-cursive text-amber-900 capitalize"
          >
            Our Menu
          </motion.h1>
        </div>

        {/* Menu card section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center"
        >
          {MenuData.map((menu) => (
            <div
              key={menu.id}
              className="rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-300 group max-w-[380px]"
            >
              <div className="h-[122px]">
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-3 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{menu.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {menu.description}
                </p>
                <div className="flex justify-between mt-5 px-6 items-center">
                  <p className="text-lg font-semibold">
                    {formatRupiah(menu.price)}
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-amber-900 relative -right-3">
                      Order Now
                    </button>
                    <button
                      onClick={() =>
                        setOpenId(openId === menu.id ? null : menu.id)
                      }
                      className="bg-gray-200 text-gray-800 px-3 py-2 relative -right-4 rounded-md hover:bg-gray-300"
                    >
                      {openId === menu.id ? "Close" : "Detail"}
                    </button>
                  </div>
                </div>

                {/* Detail section */}
                {openId === menu.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 text-left text-sm bg-amber-50 text-amber-900 p-3 rounded-md"
                  >
                    <p>
                      <span className="font-semibold">Berat Bersih:</span>{" "}
                      {menu.details.berat}
                    </p>
                    <p>
                      <span className="font-semibold">Manfaat:</span>{" "}
                      {menu.details.manfaat}
                    </p>
                    <p>
                      <span className="font-semibold">Cara Penggunaan:</span>{" "}
                      {menu.details.penggunaan}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;