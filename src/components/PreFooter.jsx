import { PreFooterPic } from "../assets";
import styles from "../styles";

import React from "react";
import Button from "./Button";
const PreFooter = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col  gap-[6vw] justify-center items-center ${styles.paddingY} mx-[10%] `}
    >
      <div
        className="w-full bg-primary sm:h-[300px]  rounded-[20px] p-[5vw] 
    flex sm:flex-row flex-col sm:gap-0 gap-[20px] justify-between items-center overflow-hidden "
      >
        <div className=" flex flex-col sm:items-end items-center  justify-center">
          <h1 className="font-bold text-white sm:text-[1.5em] text-[1em] whitespace-nowrap ">دارای مدرکی معتبر در سراسر کشور</h1>
          <h3 className="font-bold text-white sm:text-[0.8em]  text-[0.6em] leading-5">میتونی رو مدرک ما حساب باز کنی و راحتتر استخدام شی</h3>
          <Button styles={"bg-secondary text-primary p-8 mt-[10px]"}>
            همین حالا عضو شو
          </Button>
        </div>

        <img src={PreFooterPic} className="w-[400px]" />
      </div>
    </section>
  );
};

export default PreFooter;
