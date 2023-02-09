# Day 08/30 of React - States

## Exercises answers

### Level 1

2. What is state in React ?

  State is a set of variables that defines the current rendering conditions for a component. In other words, state are self contained variables that decides what to display (considering the dynamically parts of a screen) on every new render.

3. What is the difference between props and state in React ?

[ReactJS.org](https://reactjs.org/docs/faq-state.html#what-is-the-difference-between-state-and-props) says: "While both hold information that influences the output of render, they are different in one important way: props get passed to the component whereas state is managed within the component (similar to variables declared within a function)."

Also, a component can't change its properties during runtime, but can do it for states. That's how to decide between them: if a component needs to change one of its render data, then this data must be a state not a prop. Better explained [here](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

4. How do you access state in a React component ?

Since React 16, states variables are better instantiated with useState hook. This hook returns the variable itself (which can be accessed like any other variable) and a function to update this variable (hence, update the component state).

5. How do you set the state in a React component ?

Utilizing the update function returned by the useState hook.

### Level 2

### Level 3

I mixed exercises level 2 and 3 into one single project implemented in this current directory.

### [Live preview](https://random-country-flag-jvmdo.vercel.app/)

### Color pallettes

- [Light](https://colorhunt.co/palette/f7ecdee9dac19ed2c654bab9)

- [Dark](https://colorhunt.co/palette/0a043c03506fbbbbbbffe3d8)
