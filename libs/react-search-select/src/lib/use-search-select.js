import React, { useEffect, useState } from "react";

export default function (
  onChange,
  dataSource,
  defaultSelected,
  defaultOpen = false,
  defaultQuery = ""
) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState(defaultQuery);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(defaultSelected);

  const onTyping = async (query, force = false) => {
    let dropdownOptions = await dataSource(query);
    setOptions(dropdownOptions);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onTyping(query);
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const addOrRemove = (multiple, option) => {
    if (!multiple) {
      setSelected([option]); 
      onChange(option);
      setOpen(false);
    } else {
      if (!selected.some((current) => current.value === option.value)) {
        if (multiple) {
          onChange([...selected, option]);
          setSelected([...selected, option]);
        }
      } else {
        let selectionAfterRemoval = selected;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current.value !== option.value
        );
        onChange([...selectionAfterRemoval]);
        setSelected([...selectionAfterRemoval]);
      }
    }
  };

  return {
    open,
    setOpen,
    query,
    setQuery,
    options,
    setOptions,
    selected,
    setSelected,
    addOrRemove
  };
}
