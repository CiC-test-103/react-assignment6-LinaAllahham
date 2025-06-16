/** Styling imports */
import styles from './Img.module.css'
/**import drawerImg from '../images/drawers.jpg'*/



const Img = () => {
  return (
    <div className={styles['article-img']}>
       <img src="public/images/drawers.jpg"  /> 
    </div>
    
  )
}

export default Img