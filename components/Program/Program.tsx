import styles from './Program.module.scss';
import {NormalizedCourse} from "../../pages/api/DataService/types";
import Title from "./Title";
import List from "./List";

interface ProgramProps {
  data: NormalizedCourse
}

const Program = ({title, specializedSubjects}: NormalizedCourse) => {
  return <div className={styles.program}>
    <Title title={title}/>
    <List data={specializedSubjects}/>
  </div>
}

export default Program;
