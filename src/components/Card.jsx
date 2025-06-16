/** Styling imports */
import styles from './Card.module.css'
import Img from './Img'
import ArticleSide from'./ArticleSide'



const Card = () => {
  return (
    <div className={styles['article-card']}>
      <Img/>
      <ArticleSide/>

    </div>
  )
}

export default Card