import { useState } from 'react';

import ArrowIcon from "../../../../public/arrow.svg"

import { changeHeaderLinkColor, noHeaderFooterUrls } from '../../constants'
import classes from './index.module.scss'
import { usePathname } from 'next/navigation';


const CustomDropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const pathname = usePathname();

  return (
    <div className={classes.dropdown}>
      <div className={
            [
                classes.selectedOption,
                noHeaderFooterUrls.includes(pathname)
                &&
                classes.hide,
                changeHeaderLinkColor.includes(pathname)
                &&
                classes.changeLinkColor
            ]
                .filter(Boolean)
                .join(' ')} 
        onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption.label : 'English'}</span>
        <ArrowIcon className={isOpen ? classes.arrowUp : classes.arrowDown} />

        <span className={isOpen ? classes.arrowUp : classes.arrowDown}></span>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options.map((option) => (
            <div key={option.value} onClick={() => handleOptionClick(option)}>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;