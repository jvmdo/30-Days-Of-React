# Day 05 - Props
This is my answers and solutions for today's proposed exercises.

## Exercises: Level 1

1. What is props in a React component ?
    - Props (properties) are the data attributes any React component can have. They are the mean to exchange information between components. The author can set his/her own properties our use the ones available for HTML5 elements.
    - Props are for componentes as arguments are for traditional functions.

2. How do you access props in a React component ?
    ```jsx
      function myComponent(props) {
        return (
          <>
            <h1>props.title</h1>
            <p>props.body</p>
          </>
        )
      }
    ```

3. What data types can we pass as props to components ?
    - String, Number, Boolean, Array, Object

5. What is a default propTypes?
    - Components can have default values for their props:
    ```jsx
      function myComponent({
        title="Lorem Ipsum", 
        body="No content available yet"
      }) {
        return (
          <>
            <h1>title</h1>
            <p>body</p>
          </>
        )
      }
    ```