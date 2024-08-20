import styles from './style';
import {Navbar,
        Billing,
        CardDeal,
        Hero,
        CTA,
        Stats,
        Footer,
        Testimonials,
        FeedBackCard,
        Clients,
        Business,
        GetStrated,
        Button,} from './Components/Navbar';

const App = () =>(
    <div className='bg-primary h-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            Navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>

    </div>
  )

export default App