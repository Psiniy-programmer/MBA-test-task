import {Data, NormalizedCourse} from "./types";

/**
 * Извлечь опр. количество диспцилин
 * @param disciplines {string[]} - Начальный массив дисциплин
 * @param count {number} - Количество дисциплин, которое должно остаться
 */
const trimDisciplines = (disciplines: string[], count: number): string[] => {
  return disciplines.slice(0, count);
}

/**
 * Нормализация данных с backend
 * @param _data {Data} - Исходные данные
 * @param countOfPrograms - Количество программ, которые хотим оставить
 * @param countOfDisciplines - Количество дисциплин, которые хотим оставить
 */
const normalizeCourse = (_data: Data, countOfPrograms: number, countOfDisciplines: number): NormalizedCourse[] => {
  const resData: NormalizedCourse[] = [];

  for (let i = 0 ; i < countOfPrograms; i++) {
    const current = _data.data[i];

    resData.push({
      title: current.title,
      specializedSubjects: trimDisciplines(current.specializedSubjects, 5)
    })
  }

  return resData;
};

export default normalizeCourse;
