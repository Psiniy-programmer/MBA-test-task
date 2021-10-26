import Image from 'next/image'
import cn from 'classnames'
import {useState} from "react";
import styles from './Module.module.scss';

interface ModuleProps {
  specializedSubjects: string[],
  moduleTitle: string
}

enum ImgsPaths {
  plus = '/imgs/plusicon.svg',
  minus = '/imgs/minusicon.svg'
}

type ModuleState = {
  isOpen: boolean,
  imgPath: ImgsPaths,
  altText: string
}

const Module = ({specializedSubjects, moduleTitle}: ModuleProps) => {
  const [moduleState, setModuleState] = useState<ModuleState>({
    isOpen: false,
    altText: '+',
    imgPath: ImgsPaths.plus
  });

  const listClasses = cn(
    styles.module__list, moduleState.isOpen ? styles.module__list_open : styles.module__list_closed
  );
  const toggleClasses = cn(
    styles.module__toggle, moduleState.isOpen ? styles.module__toggle__on : styles.module__toggle__off
  );

  const handleClick = (): void => {
    if (moduleState.isOpen) {
      setModuleState({
        isOpen: false,
        altText: '+',
        imgPath: ImgsPaths.plus
      })
    } else {
      setModuleState({
        isOpen: true,
        altText: '-',
        imgPath: ImgsPaths.minus
      })
    }
  }

  return <div className={styles.module}>
    <div className={toggleClasses} onClick={handleClick}>
      <Image
        src={moduleState.imgPath}
        alt={moduleState.altText}
        width={18}
        height={18}
      />
      <p>{moduleTitle}</p>
    </div>
    <ul className={listClasses}>
      {
        specializedSubjects.map((subject) => (
          <li key={subject}>
            {subject}
          </li>
        ))
      }
    </ul>
  </div>
}

export default Module;
