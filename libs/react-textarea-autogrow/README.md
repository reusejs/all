# React-Textarea-Autogrow

A solution for automatically growing textarea element on typing.

###### npm installation

```
npm install @reusejs/react-textarea-autogrow
```

## Usage

Follow up the below steps to use renderless react autogrow textarea package:

```
import { AutogrowTextarea } from "@reusejs/react-textarea-autogrow";

export default function () {
	const [value, setValue] = useState("");

	return (
		<>
			<AutogrowTextarea
				rows={1}
				placeholder="Please enter here..."
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
		</>
	)
}
```

Or you can make use of the renderless functionality of the package as below:

```
	import { UseAutoGrow } from "@reusejs/react-textarea-autogrow";

	export default function ({ onChange, value }) {
	  	const textareaRef = useRef();
	  	const { handleChange } = UseAutoGrow(onChange, value, textareaRef);

	  	return (
	  		<textarea ref={textareaRef} onChange={handleChange} value={value} />;
  	  	)
	}
```

###### Props/Attributes used

```
	1. rows
	2. placeholder
	3. onChange
	4. value
	5. styles
	6. className
```
