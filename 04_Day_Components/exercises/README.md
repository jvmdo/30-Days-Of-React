## Exercises: Level 1

1. What is the difference between a regular function and an arrow function?
    - The two main differences is the way they are declared (its definition) and the use of ```this``` key word (it does not work on arrow functions)

2. What is a React Component?
    - A React component is block of code that can be easily reused across the application UI code. Technically, it's a function that returns JSX

3. How do you make a React functional component?
    - Declaring a function that returns JSX

4. What is the difference between a pure JavaScript function and a functional component?
    - A pure function returns a primitive or another combined data type that exists in JavaScript. A component must return JSX

5. How small is a React component?
    - It can be as small as just a HTML element

6. Can we make a button or input field component?
    - Yes

7. Make a reusable Button component.
    ```jsx
      function Button() {
        return <button>Click me</button>
      }
    ```

8. Make a reusable InputField component.
    ```jsx
      function Button() {
        return <input type="text" placeholder="Type something"/>
      }
