import styles from './Title.module.scss';

interface TitleProps {
  title: string
}

const Title = ({title}: TitleProps) => {
  return <h2 className={styles.title}>
    {title}
  </h2>
}

export default Title;

