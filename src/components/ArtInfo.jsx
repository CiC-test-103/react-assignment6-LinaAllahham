import styles from './ArtInfo.module.css'
import AuthorImg from './AuthorImg'
import AuthorInfo from './AuthorInfo'
import SocialShare from './SocialShare'


const ArtInfo = () => {
  return (
    <div className={styles['article-info']}>
        
        <AuthorImg/>
        <AuthorInfo/>
        <SocialShare/>
       
    </div>
  )
}

export default ArtInfo