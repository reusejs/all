# react-editable-text

React editable text input is a component that converts your text into editable content when clicked on the text.

###### npm installation

```
npm install @reusejs/react-editable-text
```

## Usage

Follow up the below steps to use react editable text package:

```
import EditableCustomInput from "@reusejs/react-editable-text";

export default function App() {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("Default Text");

  const handleEdit = () => {
    setEdit(true);
  };

  const save = (val) => {
    setValue(val);
    setEdit(false);
  };

  const close = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <p onClick={handleEdit}>{value}</p>
      ) : (
        <EditableCustomInput
          defaultValue={value}
          saveText={save}
          cancelEdit={close}
        />
      )}
    </>
  );
}

```

###### Props/Attributes used

```
1. defaultValue
2. saveText
3. cancelEdit
4. checkIcon
5. closeIcon
6. className
7. customStyles
```
