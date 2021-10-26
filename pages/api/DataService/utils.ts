import {Data, NormalizedCourse} from "./types";

/**
 * Нормализация данных с backend
 * @param _data {Data} - Исходные данные
 * @param countOfPrograms - Количество программ, которые хотим оставить
 */
const normalizeCourse = (_data: Data, countOfPrograms: number): NormalizedCourse[] => {
  const resData: NormalizedCourse[] = [];

  for (let i = 0; i < countOfPrograms; i++) {

    const current = _data.data[i];

    resData.push({
      title: current.title,
      specializedSubjects: current.specializedSubjects
    })
  }

  return resData;
};

export default normalizeCourse;
