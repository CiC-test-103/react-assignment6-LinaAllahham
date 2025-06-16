/** Styling imports */
import styles from './ArticleSide.module.css'
import Article from './Article'
import ArtInfo from './ArtInfo'
import Header from './Header'


const ArticleSide = () => {
  return (
    <div className={styles['article-side']}>
        <Header/>
        <Article/>
        
        <ArtInfo/>
        
       
    </div>
  )
}

export default ArticleSide