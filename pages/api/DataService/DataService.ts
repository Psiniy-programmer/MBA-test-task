import {Data, NormalizedCourse} from "./types";
import api from "../api";
import normalizeCourse from "./utils";
import axios from "axios";

interface IDataService {
  getCourses(countOfPrograms: number, countOfDisciplines: number): Promise<NormalizedCourse[] | DataServiceErrors>
}

export enum DataServiceErrors {
  COURSES
}

class DataService implements IDataService {
  async getCourses(countOfPrograms: number): Promise<NormalizedCourse[] | DataServiceErrors> {
    try {
      const response = await axios.get(api.courses)
      const data = response.data as Data;

      return normalizeCourse(data, countOfPrograms);
    } catch (e) {
      return DataServiceErrors.COURSES;
    }
  }
}

export default new DataService();