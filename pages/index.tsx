import {InferGetStaticPropsType} from "next";
import {useEffect} from "react";
import DataService, {DataServiceErrors} from "./api/DataService/DataService";
import {NormalizedCourse} from "./api/DataService/types";
import Container from "../components/Container";
import Header from "../components/Header";
import Program from "../components/Program";

interface HomeProps {
  data: NormalizedCourse[],
  error: DataServiceErrors | null
}

const Home = ({homeProps}: InferGetStaticPropsType<typeof getStaticProps>) => {

  useEffect(() => {
    console.log('from static', homeProps);
  }, [homeProps])

  return <>
    <Header title='Специализированные дисциплины'/>
    <Container>
      {
        homeProps.data.map((program, index) => (
          <Program key={program.title + index} {...program}/>
        ))
      }
    </Container>
  </>
}

export const getStaticProps = async () => {

  const homeProps: HomeProps = {
    data: [],
    error: null
  }

  await DataService.getCourses(5)
    .then((res) => homeProps.data = res as NormalizedCourse[])
    .catch((err: DataServiceErrors) => homeProps.error = err as DataServiceErrors)

  return {
    props: {
      homeProps
    },
  }
}


export default Home
