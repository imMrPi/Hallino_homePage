import { HeroPic } from '../assets';
import styles from '../styles';
import Button from './Button';

const Hero = () => (
    <section id="home" className={`flex sm:flex-row flex-col  gap-[6vw] justify-center items-center ${styles.paddingY} mx-[10%]  `}>
      <div>
        <img src={HeroPic} className='w-[500px]'/>
      </div>
      <div className='flex flex-col sm:items-end  items-center'>
        <h2 className='text-[#4145C7] font-extrabold sm:text-[3em] text-[2.5em] whitespace-nowrap'> نسل جدید در یادگیری</h2>
        <h2 className='text-[#4145C7] font-medium sm:text-[1em] text-[0.8em] whitespace-nowrap'>پلتفرمی پیشرو برای یادگیری نوین و به روز در دنیای دیجیتال</h2>   

      <Button styles={"bg-primary text-white w-[120px] mt-[10px]"}>
        بزن بریم
        </Button>
      </div>
      
    </section>

)
export default Hero