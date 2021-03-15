import classNames from 'classnames';
import React from 'react';

export default function createInputGroupComponent(
  prefix,
  { Component = 'div', defaultProps } = {}
) {
  const InputGroupComponent = (props) => {
    const { className, as: Tag = Component, styles, ...others } = props;

    return (
      <Tag
        {...defaultProps}
        {...others}
        className={classNames(className, prefix)}
        style={styles}
      />
    );
  };
  return InputGroupComponent;
}
