import styles from './List.module.scss';
import Module from "./Module";

interface ListProps {
  data: string[]
}

const List = ({data}: ListProps) => {
  if (data.length === 10) {
    return <div className={styles.list}>
      <Module moduleTitle='1 модуль' specializedSubjects={data.slice(0, 5)}/>
      <Module moduleTitle='2 модуль' specializedSubjects={data.slice(5, 10)}/>
    </div>
  } else {
    return <>
      <Module moduleTitle='Модуль' specializedSubjects={data}/>
    </>
  }
}

export default List;
