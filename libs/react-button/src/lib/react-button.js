import React from 'react';

export default function ReactButton({
  btnText,
  onClick,
  prefix,
  suffix,
  styles,
  disabled,
  className,
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={className}
        style={styles}
      >
        {prefix !== '' && prefix}
        {btnText}
        {suffix !== '' && suffix}
      </button>
    </>
  );
}

ReactButton.defaultProps = {
  styles: {
    width: '11.5rem',
    height: '2.5rem',
    border: 'unset',
    margin: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.05em',
    backgroundColor: '#007bff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
