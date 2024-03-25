import React from "react";
import Icon1 from '../assets/Icons/ic-phone.svg';
import Icon2 from '../assets/Icons/mdi_instagram.svg';
import Icon3 from '../assets/Icons/material-symbols_mail-outline.svg';
import { Link } from "react-router-dom";

const HomeSection2 = () => {
  return (
    <div className="pt-[90px] bg-whiteColor">
      <div className="container mx-auto py-5 px-[30px] md:px-[75px] ">
        <div className="Contact flex-col flex md:flex-row items-center  justify-start  md:justify-between gap-4 bg-blackColor py-10 lg:py-[50px] px-10 lg:px-[100px] rounded-[24px]">
          <div className="left max-w-[389px]">
            <h1 className="text-[39px] font-int text-whiteColor">Əlaqə</h1>
            <p className="text-[16px] font-int text-whiteColor">
              Hər hansı sualınız, təklifiniz və rəyiniz üçün bizimlə əlaqə
              saxlamaqdan çəkinməyin.
            </p>
          </div>
          <div className="right flex flex-col gap-3 justify-center">
             <div className="socialBox flex items-center gap-2">
                <img src={Icon1} alt="phone" />
                <span className="text-[20px] font-int text-whiteColor"> <Link to='https://wa.me/994553091509' target="_blank">+994553091509</Link></span>
             </div>
             <div className="socialBox flex items-center gap-2">
                <img src={Icon2} alt="phone" />
                <span className="text-[20px] font-int text-whiteColor">
                  <Link  target="_blank" to='https://www.instagram.com/fotory.az/ ' >@fotory.az</Link></span>
             </div>
             <div className="socialBox flex items-center gap-2">
                <img src={Icon3} alt="phone" />
                <span className="text-[20px] font-int text-whiteColor"> <Link  target="_blank" to='mailto:info.fotory@gmail.com' >info.fotory@gmail.com</Link> </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
