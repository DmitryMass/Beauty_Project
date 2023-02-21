import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface IDropDownProps {
  setSelected: (value: string) => void;
  setToggleDropDown: (value: boolean) => void;
  modificator?: string;
  options?: any[] | [];
  styles: string;
  visit?: boolean;
}
const DropDown: FC<IDropDownProps> = ({
  modificator,
  setSelected,
  setToggleDropDown,
  options,
  styles,
  visit = false,
}) => {
  const { t } = useTranslation();

  const hanldeClick = (value: string) => {
    setSelected(value);
    setToggleDropDown(false);
  };

  return (
    <>
      {visit ? (
        <div className={modificator}>
          {options &&
            options.map((value) => (
              <div
                className={styles}
                key={value.procedure}
                onClick={() => hanldeClick(value.procedure)}
              >
                <span>{t(`${value.procedure}`)}</span>
                <span>
                  {value.price} {t('money')}
                </span>
              </div>
            ))}
        </div>
      ) : (
        <div className={modificator}>
          {options &&
            options.map((value) => (
              <div
                className={styles}
                key={value.type}
                onClick={() => hanldeClick(value.type)}
              >
                <p className='block first-letter:uppercase '>
                  {t(`${value.type}`)}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default memo(DropDown);
