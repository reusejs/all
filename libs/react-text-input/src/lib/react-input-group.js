import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import createInputGroupComponent from './utils/input-group-component';

const propTypes = {
	className: PropTypes.string,
};

const defaultProps = {
	tag: 'div',
};

const InputGroup = (props) => {
	const { className, tag: Tag, styles, ...attributes } = props;

	return (
		<Tag {...attributes} className={classNames(className)} style={styles} />
	);
};

const Label = (props) => {
	const { className, styles, children } = props;

	return (
		<label htmlFor={props.for} className={classNames(className)} style={styles}>
			{children}
		</label>
	);
};

InputGroup.Label = Label;
InputGroup.Prepend = createInputGroupComponent('input-group-prepend', {
	Component: 'span',
});
InputGroup.Append = createInputGroupComponent('input-group-append', {
	Component: 'span',
});
InputGroup.Prefix = createInputGroupComponent('input-group-prefix', {
	Component: 'span',
});
InputGroup.Suffix = createInputGroupComponent('input-group-suffix', {
	Component: 'span',
});
InputGroup.HelperText = createInputGroupComponent('input-group-helper-text');
InputGroup.ErrorText = createInputGroupComponent('input-group-error-text');

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
