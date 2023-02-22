# Answers

## Exercises: Level 1

1. What is the importance of form?

    Forms are used to grab users' information.

2. How many input types do you know?

    Text, number, email, tel, checkbox, radio, password

3. Mention at least four attributes of an input element

    type, name, placeholder, pattern, value, required, checked

4. What is the importance of htmlFor?

    Bind one label to one input

5. Write an input type which is not given in the example if there is?

    ```html
    <input type="week"/>
    ```

6. What is a controlled input?

    It's an input element which value is known by React in realtime because this value is stored in a state variable. On the other hand, uncontrolled inputs have their values retrieved on submit only.

7. What do you need to write a controlled input?

    A state variable, `value` property and `onChange` event listener.

8. What event type do you use to listen changes on an input field?

    `onChange={(e) => setState(e.target.value)}`

9. What is the value of a checked checkbox?

    True for checked, false for not checked.

10. When do you use onChange, onBlur, onSubmit?

    `onChange` in controlled inputs; `onBlur` at validation logic; `onSubmit` at form submit.

11. What is the purpose of writing e.preventDefault() inside the submit handler method?

    By default, when a form is submitted, the page reloads. In order to prevent this behavior, `e.preventDefault()` is used.

12. How do you bind data in React? The first input field example is data binding in React.

    Applying a state variable as an input's `value` and updating this state on every new input using `onChange` event listener.

13. What is validation?

    The process of checking if an input value is valid or not according to predefined rules.

## Exercises: Level 2

Run today's project (12_Day_Forms/exercises)
