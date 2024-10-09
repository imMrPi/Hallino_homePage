import styles from "../styles";
import { BgWhiteIcon, icon } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="w-full flex-col bg-primary">
    <div className="flex flex-col justify-center items-center text-[30px] w-full">
      <img src={BgWhiteIcon} className="sm:w-[80px] mt-[40px] w-[65px]" />

      <div className="flex flex-row justify-between items-center gap-6 mt-[60px]">
        {socialMedia.map((Media, index) => (
          <img src={Media.icon} className="sm:w-[30px] w-[25px]" key={index} />
        ))}
      </div>

      <div className="mt-[70px] flex flex-row sm:gap-[100px] justify-between items-center">

         
          <div className="text-left  w-[120px]">
          <h1 className="font-bold text-white sm:text-[1em] ">حلینو</h1>
            {footerLinks
              .filter((item) => item.title === "Services")
              .map((item) =>
                item.sublinks.map((link, index) => (
                  <a
                    href={link.link}
                    key={index}
                    className="block text-white mt-2 text-[0.8em] font-thin"
                  >
                    {link.name}
                  </a>
                ))
              )}
        </div>

        <div className="text-right">
          <h1 className="font-bold text-white sm:text-[1em]">خدمات</h1>
          <div className="text-right w-[120px]">
            {footerLinks
              .filter((item) => item.title === "Halino")
              .map((item) =>
                item.sublinks.map((link, index) => (
                  <a
                    href={link.link}
                    key={index}
                    className="block text-white mt-2 text-[0.8em] font-thin"
                  >
                    {link.name}
                  </a>
                ))
              )}
          </div>
        </div>
      </div>    
      <div className="flex sm:flex-row flex-col justify-center items-center text-[#DADADA] sm:text-[0.5em] text-[0.4em] mt-[100px] sm:gap-10 gap-3 mb-[10px]">
        <h1>.تمامی حقوق مادی و معنوی این سایت متعلق به حلی نو میباشد</h1>
        <div className=" flex flex-row gap-5">
        <a href="#"> خط مشی</a>
        <a href="#"> شرایط خدمات</a>
        </div>

      </div>
    </div>
  </section>
);

export default Footer;
