import { features } from '../constants';
import styles from '../styles';

const Featured = () => {
  return (
    <section className={`border-3 flex flex-col gap-[6vw] justify-center items-center ${styles.paddingY} mx-[10%] text-[30px] `}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 '>
        {features.map((feature, index) => (
          <div key={index} className='grid grid-cols-[1fr_70px] items-start gap-4 '>
            
            <div className='flex flex-col items-end'>
              <h3 className='text-primary sm:text-[0.7em] text-[0.8em] font-bold whitespace-nowrap'>{feature.title}</h3>
              <p className='text-black font-medium text-right sm:w-[300px] w-[250px] sm:text-[0.5em] text-[0.5em]  whitespace-normal'>{feature.content}</p>
            </div>
           
            <img src={feature.icon} className='sm:w-[70px] w-[50px] self-start ' /> 
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
