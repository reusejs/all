import React from 'react';
import classNames from 'classnames';

export default function TextInput({
	id,
	type,
	placeholder,
	onChange,
	value,
	invalid,
	prefix,
	suffix,
	className,
	styles = {
		outline: 'none',
		border: '1px solid black',
		padding: '0.2rem 0.4rem',
	},
}) {
	const classes = classNames(className);

	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
			value={value}
			className={classes}
			style={styles}
		/>
	);
}

TextInput.defaultProps = {
	type: 'text',
	placeholder: 'Placeholder',
};
