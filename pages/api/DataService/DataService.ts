import {NormalizedCourse} from "./types";

interface IDataService {
  getCourses(): NormalizedCourse[]
}

class DataService implements IDataService{
  getCourses(): NormalizedCourse[] {
    return [];
  }
}

export default new DataService();