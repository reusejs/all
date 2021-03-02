# react-button

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test react-button` to execute the unit tests via [Jest](https://jestjs.io).

# React-Button

A reusable and extendable button component.

###### npm installation

```
npm install @reusejs/react-button
```

## Usage

Follow up the below steps to use renderless react button package:

```
import { ReactButton } from "@reusejs/react-button";

export default function () {

	return (
		<>
			<Button
                btnText="Primary"
                onClick={handleFormSubmit}
                prefix={icon}
                className="btn btn-default btn-big"
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
		</>
	)
}
```

###### Props/Attributes used

```
	1. btnText: Represent the displayed text on the button
    2. onClick: Function on handle onClick functionality
    3. prefix: Represents a icon before the text
    4. suffix: Represents a icon after the text
    5. style: Can be used to pass custom inline styles
    6. disabled: A boolean flag for disabled button
    7. className: Represents class/classes to be applied to the button
```
