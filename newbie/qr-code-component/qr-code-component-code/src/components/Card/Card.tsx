import * as styles from './styles'

interface ITopImage {
  src: string
  alt: string
}

export const TopImage: React.FC<ITopImage> = ({ src, alt }, props) => {
  return <img src={src} alt={alt} css={styles.topImage} {...props} />
}

export const Card = ({ topImage }: { topImage: JSX.Element }) => {
  return (
    <div css={styles.container}>
      {topImage}
      <div css={styles.cardContent}>
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}
