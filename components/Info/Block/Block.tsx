import styles from './Block.module.scss';
import cn from "classnames";

export enum InfoColors {
  RED,
  BLACK
}

interface InfoProps {
  color: InfoColors,
  title: string,
  children: JSX.Element | string | null | undefined
}

const Block = ({color, children, title}: InfoProps) => {
  const infoClasses = cn(
    styles.block,
    color === InfoColors.BLACK ? styles.black : styles.red
  )

  return <div className={infoClasses}>
    <h3 className={styles.block__title}>{title}</h3>
    <div className={styles.block__text}>
      {children}
    </div>
  </div>
}

export default Block;
