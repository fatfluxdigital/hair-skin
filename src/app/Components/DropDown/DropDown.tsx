import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DropDown.css";
interface DropdownProps {
  title: string;
  options: string[];
  initial?: number;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.initial || -1);

  let menuRef: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleClick = (i: number) => {
    setSelected(i);
  };

  const renderOptions = () => {
    if (!props.options) {
      return;
    }

    return props.options.map((option, i) => (
      <a href={`/${option}`}>
        <li
          onClick={(evt) => handleClick(i)}
          key={i}
          className={`dropdown__list-item ${
            i === selected ? "dropdown__list-item--active" : ""
          }`}
        >
          {option.split("-").join(" ")}
        </li>
      </a>
    ));
  };

  return (
    <div className="dropdown" ref={menuRef}>
      <div
        onClick={toggleDropdown}
        className="dropdown__toggle dropdown__list-item"
      >
        {props.title}
        {open ? (
          <img src="icons/arrowDown.svg" alt="arrow down" width="15px" className="logo__display__web" />
        ) : (
          <img src="icons/arrowUp.svg" alt="arrow up" width="15px" className="logo__display__web" />
        )}
        {open ? (
          <img src="icons/arrowDownWhite.svg" alt="arrow down" width="10px" className="logo__display__mobile"/>
        ) : (
          <img src="icons/arrowUpWhite.svg" alt="arrow up" width="10px" className="logo__display__mobile"/>
        )}
      </div>
      <ul
        className={`absolute__dropdown dropdown__list ${
          open ? "dropdown__list--active" : ""
        }`}
      >
        {renderOptions()}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  initial: PropTypes.number,
};

export default Dropdown;
