# react-text-input

React Text Input component is a complete form control including a label, input, prefix, suffix, help text and error text.

###### npm installation

```
npm install @reusejs/react-text-input
```

## Usage

Follow up the below steps to use react text input package:

```
import { InputGroup, TextInput } from "@reusejs/react-text-input";

export default function () {
	const [value, setValue] = useState("");

	return (
		<InputGroup>
			<InputGroup.Label>Label</InputGroup.Label>
			<InputGroup.Prepend>$</InputGroup.Prepend>
			<TextInput
				id="username"
				type="text"
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<InputGroup.Append>.00</InputGroup.Append>
			<InputGroup.HelperText>This is a help text</InputGroup.HelperText>
			<InputGroup.ErrorText>This is a error text</InputGroup.ErrorText>
		</InputGroup>
	)
}
```

###### Props/Attributes used

###### For Label

```
1. for
2. className
3. styles
```

###### For Append/Prepend/HelperText/ErrorText

```
1. className
2. styles
```

###### For TextInput

```
1. id
2. type
3. placeholder
4. className
5. styles
6. onChnage
7. value
8. invalid
```
