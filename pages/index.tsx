import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss';
import {useEffect} from "react";
import DataService from "./api/DataService/DataService";

const Home: NextPage = () => {

  useEffect(() => {
    DataService.getCourses(5, 5)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }, [])

  return (
   <p className={styles.home}>kek</p>
  )
}

export default Home
