import React, { useRef } from 'react';
import useAutoGrow from './use-autogrow';

export default function AutoGrowTextarea({
	value,
	onChange,
	placeholder,
	rows,
	className,
	styles = {
		fontSize: '16px',
		lineHeight: '24px',
		overflow: 'auto',
		height: 'auto',
		width: '100%',
	},
}) {
	const textareaRef = useRef();

	const { handleChange } = useAutoGrow(onChange, value, textareaRef);

	return (
		<>
			<textarea
				ref={textareaRef}
				rows={rows}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
				className={className}
				style={styles}
			/>
		</>
	);
}

AutoGrowTextarea.defaultProps = {
	rows: 4,
	onChange: () => {},
	placeholder: 'Please enter your text here...',
};
