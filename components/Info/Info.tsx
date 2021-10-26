import styles from './Info.module.scss';
import Block from "./Block";
import {InfoColors} from "./Block/Block";

const Info = () => {
  return <section className={styles.info}>
    <Block color={InfoColors.RED} title='Практические модули'>
      Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
    </Block>
    <Block color={InfoColors.BLACK} title='Итоговая аттестация'>
      <ul className={styles.info__list}>
        <li className='listTextWithDot'>
          Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)
        </li>
        <li className='listTextWithDot'>
          Защита итоговой аттестационной работы
        </li>
      </ul>
    </Block>
  </section>
}

export default Info;
