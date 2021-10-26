import styles from './Header.module.scss';

interface HeaderProps {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return <header className={styles.header}>
    <h1 className={styles.header__title}>
      {title}
    </h1>
  </header>
}

export default Header;
