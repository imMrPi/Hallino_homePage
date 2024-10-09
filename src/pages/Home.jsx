
import styles from '../styles.js'
import {  Navbar, Hero ,Services,
  Featured,
  FeedBacks,
  PreFooter,
  Footer} from "../components";
const Home = () => {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Services/>
        <Featured/>
        <FeedBacks/>
        <PreFooter/>
        
      </div>
    </div>
    <div className={`bg-secondary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer/> 
      </div>
     
    </div>
   
  </div>
  )
}

export default Home