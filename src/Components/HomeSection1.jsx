import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Img/img1.png";
import img2 from "../assets/Img/img2.png";
import img3 from "../assets/Img/img3.png";
import img4 from "../assets/Img/img4.png";
import img5 from "../assets/Img/img5.png";
import img6 from "../assets/Img/img6.png";

const Photo13 = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
];
const Photo46 = [
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

const HomeSection1 = () => {
  return (
    <section className="pt-[90px] bg-whiteColor  ">
      <div className="container mx-auto py-5 px-[30px] md:px-[75px] flex-col flex md:flex-row items-center  justify-start  md:justify-between gap-4">
        <div className="left max-w-[400px]   lg:max-w-[541px] px-2">
          <h1 className=" font-int font-bold text-[17px] sm:text-[25px] lg:text-[39px] leading-10 text-black ">
            Xatirələrinizi toplayın və Fotory ilə gələcəyə daşıyın.
          </h1>
          <p className="leading-6 text-[12px] sm:text-[15px] lg:text-[20px] font-int text-blackColor max-w-[400px] pt-2">
            Özəl günlər, Bayramlar, Məzuniyyətlər və daha çox xatirələrinizi
            Fotory ilə paylaşın.
          </p>
          <button className=" mt-6 lg:mt-11 w-[160px] p-[16px] bg-[#30980D] rounded-[12px] outline-none  flex items-center justify-center "  >
            <Link  target="_blank" to='https://wa.me/994553091509' className="text-whiteColor font-bold font-int leading-5 text-[17px]">
              Sifariş et!
            </Link>
          </button>
        </div>
        <div className="right flex flex-col gap-3 ">
          <div className="box1-3 flex items-center gap-4">
            {Photo13.map((item, key) => (
              <div key={key} className="imgBox">
                <img src={item.img} alt="images" />
              </div>
            ))}
          </div>
          <div className="box4-6 flex items-center gap-4">
            {Photo46.map((item, key) => (
              <div key={key} className="imgBox">
                <img src={item.img} alt="images" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
