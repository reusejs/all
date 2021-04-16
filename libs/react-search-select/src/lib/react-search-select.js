import React, { useState, useEffect } from "react";
import useOutsideClicker from "./use-outside-clicker";
import useSearchSelect from "./use-search-select";
import "./react-search-select.module.css"

const ShowLabel = ({ selected }) => {
  const [text, setText] = useState("None Selected");

  useEffect(() => {
    if (selected.length > 0) {
      let tempText = selected.map((val) => val.label).join(", ");
      setText(tempText);
    } else {
      setText("None Selected");
    }
  }, [selected]);

  return <>{text}</>;
};

const Index = ({
  label,
  value,
  onChange,
  multiple = false,
  dataSource,
  OptionRenderer,
  ShowSelected = ShowLabel,
  clearStyle,
  labelWrapperStyles = { display: "flex", justifyContent: "space-between" },
  dropdownStyle = {},
  inputStyle = {},
  placeHolderText = "Type someting...",
  defaultSelected = [],
  optionsStyle = {},
  disabled = false,
  customArrow
}) => {
  const {
    open,
    setOpen,
    query,
    setQuery,
    options,
    addOrRemove,
    selected,
    setSelected
  } = useSearchSelect(onChange, dataSource, defaultSelected);

  const visRef = useOutsideClicker(() => {
    setOpen(false);
  });

  return (
    <>
      <div style={disabled ? { pointerEvents: "none", opacity: "0.5" } : {}}>
        {/* Start Label */}
        <div style={labelWrapperStyles}>
          <span>{label}</span>
          {selected.length > 0 && (
            <span className="clear" onClick={() => setSelected([])}>
              {clearStyle}
            </span>
          )}
        </div>
        {/* End Label */}

        {/* Start Element */}
        <div className="dropdown" style={dropdownStyle}>
          {/* Start Default */}
          {open === false && (
            <div className="show-dd" onClick={() => setOpen(true)}>
              <ShowSelected selected={selected} />
              {!customArrow ? (
                <div className={` ${!open ? "arrow" : null}`} />
              ) : (
                customArrow
              )}
            </div>
          )}
          {/* End Default */}

          {open === true && (
            <div ref={visRef}>
              {/* Start Input */}
              <div className="control">
                <div className="selected-value">
                  <input
                    style={inputStyle}
                    type="text"
                    value={(value && value.label) || query}
                    placeholder={placeHolderText}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                </div>
                <div className={` ${!open ? "arrow" : null}`} />
              </div>
              {/* End Input */}

              {/* Start Dropdown */}
              <div
                className={`options ${open ? "open" : null}`}
                style={optionsStyle}
              >
                {options.map((option) => (
                  <div
                    onClick={() => {
                      addOrRemove(multiple, option);
                    }}
                    key={`option${option.value}`}
                  >
                    <OptionRenderer value={option} selected={selected} />
                  </div>
                ))}
              </div>
              {/* End Dropdown */}
            </div>
          )}
        </div>
        {/* End Element */}
      </div>
    </>
  );
};

export default Index;
