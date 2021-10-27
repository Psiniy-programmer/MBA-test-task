import {NormalizedCourse} from "../../pages/api/DataService/types";
import Title from "./Title";
import List from "./List";
import styles from './Program.module.scss';

const Program = ({title, specializedSubjects}: NormalizedCourse) => {
  return <section className={styles.program}>
    <Title title={title}/>
    <List data={specializedSubjects}/>
  </section>
}

export default Program;
