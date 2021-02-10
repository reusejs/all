import React, { useEffect } from 'react';

export default function (onChange, value, textareaRef) {
  useEffect(() => {
    autoReziseTextarea();
  }, [value]);

  const autoReziseTextarea = () => {
    textareaRef.current.style.height = '0px';
    textareaRef.current.style.overflowY = 'hidden';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  };

  const handleChange = (e) => {
    autoReziseTextarea();
    onChange(e);
  };

  return { handleChange };
}
