import { HeroPic, jsIcon, servicespic } from "../assets";
import { Courses } from "../constants";
import styles from "../styles";
import {Link} from "react-router-dom"
const Services = () => {
  return (
    <section
      id="home"
      className={`border-3 flex flex-col  gap-[6vw] justify-center items-center ${styles.paddingY} mx-[10%] text-[30px]`}
    >
      <div
        className="w-full bg-primary sm:h-[300px]  rounded-[20px] p-[5vw] 
    flex sm:flex-row flex-col sm:gap-0 gap-[20px] justify-evenly items-center overflow-hidden "
      >
        <div className="flex flex-col items-center sm:mt-0 mt-[10px]">
          <h2 className="font-bold sm:text-[1em] text-[0.6em] text-secondary whitespace-nowrap">
            {" "}
            آموزش تعاملی و نتایجی دقیق
          </h2>
          <h2 className="font-medium sm:text-[0.6em] text-[0.35em] sm:mt-0 mt-[5px] text-secondary whitespace-nowrap">
            !امکان نداره که با آموزش ما چیزی نفهمی
          </h2>
        </div>
        <img src={servicespic} className="" />
      </div>

      <div
        className="w-full bg-primary sm:h-[300px]  rounded-[20px] sm:p-[1vw] 
    flex flex-col gap-[30px] justify-start"
      >
        <div className="flex flex-col justify-center items-center mt-[10px]">
          <h1 className="font-bold sm:text-[1.3em] text-[1em] text-secondary whitespace-nowrap">
            دوره ها
          </h1>
          <h3 className="font-normal sm:text-[0.8em] text-[0.4em] text-secondary whitespace-nowrap">
            آموزش چندی از پرکاربردترین زبان های برنامه نویسی
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {Courses.map((course, index) => (
            <Link to={course.path} key={index}  className={`flex flex-col justify-center items-center gap-[10px] w-[calc(50%-20px)] sm:w-[auto] mb-[20px] ${index===Courses.length-1 ?"sm:mr-[0px]" :"sm:mr-[40px]" }`}>
              <img src={course.icon} className="sm:w-[40px] w-[30px]" />
              <div className="bg-secondary rounded-[15px] sm:py-[2px] sm:px-[10px] py-[3px] px-[7px]">
                <h2 className="text-primary font-medium sm:text-[0.55em] text-[0.4em] whitespace-nowrap">
                  {course.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;