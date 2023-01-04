# Day 02 - Introduction to ReactJS

## Exercises answers

### What is React?

1. What is React?

   ```
    React is a JavaScript library that eases the development of fully interactive and functional user interfaces for web apps.
   ```

2. What is a library?

   ```
     Library is a set of classes, functions and blocks of code that extend the functionalities of a programming language in order to solve a series of related problems that are repeated in the daily life of application development. React, for example, has several readymade functions to solve the problem of creating interfaces.
   ```

3. What is a single page application?

   ```
     SPA is an web app that has only one HTML page (index.html) but it is actually no limited to only one page. In fact, the user experiences a desktop-like app when using a SPA app.
   ```

4. What is a component ?

   ```
     In React, a component is a regular function that resolves to an HTML element, i.e., it returns HTML (which can have children and grand-children and so on)
   ```

5. What is the latest version of React?

   ```
     Version 18, but I'm using 16 in this series, right?
   ```

6. What is DOM?

   ```
     DOM stands for Document Object Model. It is an set of JavaScript APIs that browsers make available for developers in order to them programmatically manipulate HTML, CSS, resources from the browser itself and from the machine it is running on. The basic purpose of DOM is to transform all the web page documents in a big object, which has several properties and methods that can be easily accessed via JavaScript.
   ```

7. What is React Virtual DOM?

   ```
     It is the way React makes DOM available though JSX. Is has the same purpose the common DOM, but it uses the concepts of Virtual DOM to, among other reasons, improve the performance issues the common DOM holds.
   ```

8. What does a web application or a website(composed of) have? `I did not understand the question`

### Why React?

1. Why did you chose to use react?

   ```
     Because it is the most popular library amongst its rivals; it has a big community, with thousand of free online resources, among other advantages.
   ```

2. What measures do you use to know popularity ?

   ```
     GitHub, StackOverflow, online resources, YouTube channels.
   ```

3. What is more popular, React or Vue ?
   ```
     React, but Vue is almost as popular as React (which is great).
   ```

### Exercises: JSX

4. What is JSX?

   ```
     It the combination of JavaScript and XML, which makes possible to write HTML code within JS code.
   ```

5. What is babel?

   ```
     It is a JavaScript transpiler used to convert cutting-edge JS code into old JS version in order to make the program compatible with older browsers.
   ```

6. What is a transpiler?
   ```
     It is a translator alike program capable of convert source code from one programming language to another (or to the same language just as Babel works).
   ```

### Exercises: JSX Elements

1. What is a JSX element?

   ```
     It's a variable that stores HTML code.
   ```

2. Write your name in a JSX element and store it in a name variable

   ```js
   const name = <h1>João Oliveira</h1>;
   ```

3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

   ```js
   const name = (
     <div>
       <h1>João Oliveira</h1>
       <p>Brazil</p>
       <p>Lorem Ipsum</p>
       <p>Male</p>
       <p>
         <a href="mail:deoliveira.jvm@gmail.com">Contact me</a>
       </p>
     </div>
   );
   ```

4. Write a footer JSX element

   ```js
   const footer = (
     <footer>
       <em>Copyleft 2023</em>
     </footer>
   );
   ```

### Inline Style

1. Create a style object for the main JSX
2. Create a style object for the footer and app JSX
3. Add more styles to the JSX elements

```
  See index.html for answers
```

### Internal Styles

1. Apply different styles to your JSX elements

```
  See index.html for answers
```

### Inject data to JSX

1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)

```js
// It is as simple as inject any JavaScript code within HTML in JSX: just write the variable inside curly brackets:
const data = "Joao Oliveira";
const nameElement = <h1>{data}</h1>;
```
