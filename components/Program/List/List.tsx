import Module from "./Module";
import styles from './List.module.scss';

interface ListProps {
  data: string[]
}

const List = ({data}: ListProps) => {
  if (data.length === 10) {
    return <div className={styles.double}>
      <Module moduleTitle='1 модуль' specializedSubjects={data.slice(0, 5)}/>
      <Module moduleTitle='2 модуль' specializedSubjects={data.slice(5, 10)}/>
    </div>
  } else {
    return <div className={styles.single}>
      <Module moduleTitle='Модуль' specializedSubjects={data}/>
    </div>
  }
}

export default List;
