import React, { useState } from 'react';
import clsx from 'clsx';
import { TextInput, InputGroup } from '@reusejs/react-text-input';

function CheckDefaultIcon() {
	return (
		<span style={{ marginLeft: '5px', color: 'green', cursor: 'pointer' }}>
			&#10004;
		</span>
	);
}

function CloseDefaultIcon() {
	return (
		<span style={{ marginLeft: '5px', color: 'red', cursor: 'pointer' }}>
			&#10008;
		</span>
	);
}

export default function (props) {
	const {
		defaultValue,
		saveText,
		cancelEdit,
		className,
		checkIcon = <CheckDefaultIcon />,
		closeIcon = <CloseDefaultIcon />,
		customStyles = {
			border: '1px solid black',
			borderRadius: '0.2rem',
			padding: '0.4rem',
		},
		...others
	} = props;
	const [value, setValue] = useState(defaultValue);

	const updateText = () => {
		saveText(value);
	};

	return (
		<InputGroup>
			<TextInput
				onChange={(e) => {
					setValue(e.target.value);
				}}
				value={value}
				className={clsx(className)}
				styles={customStyles}
			/>
			<InputGroup.Append onClick={updateText}>{checkIcon}</InputGroup.Append>
			<InputGroup.Append onClick={cancelEdit}>{closeIcon}</InputGroup.Append>
		</InputGroup>
	);
}
