export type Data = {
  success: boolean,
  count: number,
  data: Course[]
}

/**
 * Модель запрашиваемых данных с api
 */
export type Course = {
  scholarshipAvailable: boolean,
  _id: string,
  picture: string,
  whatWillYouLearn: string[]
  specializedSubjects: string[]
  showInMenu: boolean,
  title: string,
  titleEng: string,
  mbaFormat: string,
  mbaTypeOfProgram: string,
  goalsOfProgram: string,
  url: string,
  bootcamp: string,
  user: string,
  createdAt: string,
  __v: number
}

/**
 * Модель нормализованных данных, которые будут использованы
 */
export type NormalizedCourse = {
  title: string,
  specializedSubjects: string[]
}
