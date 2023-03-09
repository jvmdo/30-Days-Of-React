# Answers

## Exercises: Level 1

1. What is higher order function

    It's a function that accepts another function as parameter and/or returns a function.

    > A Higher Order Function is a function that takes one or more functions as arguments and/or returns a function as a result. It's a function that operates on other functions, either by modifying them or returning new ones. The main purpose of HOFs is to abstract common functionality and allow for more reusable code.

2. What is Higher Order Component

    It's a component that accepts another component as props and returns this passed component but with modifications

    > A Higher Order Component is a function that takes a component as an argument and returns a new component with some additional functionality. It's a component that wraps another component and provides it with some props or behavior. The main purpose of HOCs is to enhance the functionality of components, provide code reuse, and separate concerns.

3. What is the difference between higher order function and higher order component?

    The later is supposed to work in plain javascript wherein the earlier, with react components.

    > Higher Order Function (HOF) and Higher Order Component (HOC) are both patterns in functional programming that allow for code reuse and abstraction. However, they are used in different contexts and have some key differences. [...] So while both HOFs and HOCs provide code reuse and abstraction, they operate at different levels of abstraction. HOFs operate on functions, while HOCs operate on components.

4. A higher order component can allow us to enhance a component. (T or F)

    True

## Exercises: Level 2

1. Make a higher order component which can handle all the input type.

    ```jsx
    import { useState } from "react";

    function withInputHandling(WrappedComponent) {
      return function InputHandling(props) {
        const [value, setValue] = useState(props.defaultValue || "");

        function handleChange(event) {
          const newValue =
            event.target.type === "checkbox" || "radio"
              ? event.target.checked
              : event.target.value;
          setValue(newValue);
        }

        const { defaultValue, ...rest } = props;

        return (
          <WrappedComponent
            value={value}
            checked={typeof value === "boolean" ? value : undefined}
            onChange={handleChange}
            {...rest}
          />
        );
      };
    }

    ```
