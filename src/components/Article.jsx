/** Styling imports */
import styles from './Article.module.css'

const Article = () => {
  return (
    <div className={styles['article']}>
      <p>
        Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.

      </p>
    </div>
  )
}

export default Article