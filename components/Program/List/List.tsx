import styles from './List.module.scss';

interface ListProps {
  data: string[]
}

const List = ({data}: ListProps) => {
  return <ul className={styles.list}>
    {
      data.map((discipline) => (
        <p key={discipline}>{discipline}</p>
      ))
    }
  </ul>
}

export default List;
