# Answers

## Exercises: Level 1

1. What is an event?

    Event is a result of an action triggered by a human or a computer program.

2. What is the different between an HTML element event and React event?

    React makes use of inline events written in camelCase, which receives a JavaScript reference to function as handler. In HTML, inline events are written in lowercase and receives a JavaScript function invocation as string.

3. Write at least 4 keyboard events?

    ```onKeyUp, onKeyDown and onKeyPress. onCut, onCopy and onPaste can be triggered both by keyboard or mouse.```

4. Write at least 8 mouse events?

    ```onClick, onMouseOver, onMouseOut, onMouseEnter, onMouseLeave, onContextMenu, onDblClick, onMouseDown, onMouseUp.```

5. What are the most common mouse and keyboard events?

    The ones I written in two past question.

6. Write an event specific to input element?

    ```onInput```

7. Write an event specific to form element?

    ```onSubmit```

8. Display the coordinate of the view port when a mouse is moving on the body?

    ```html
    <body onmousemove="cursorCoords(event)" style="min-height: 100vh">
      <h1>Where is the mouse cursor coordinates?</h1>
      <p>Cursor coordinates: (x: 0, y: 0)</p>
      <script>
        function cursorCoords({ x, y }) {
          p.innerText = p.innerText
            .replace(/x: \d+/, `x: ${x}`)
            .replace(/y: \d+/, `y: ${y}`);
        }

        const p = document.querySelector("p");
      </script>
    </body>
    ```

9. What is the difference between onInput, onChange and onBlur?

    They are all related to input elements. The earlier is triggered whenever a value is entered in the text field; onChange is triggered only when the input loses focus or receives an enter key; the later is triggered when the field loses focus.

10. Where do we put the onSubmit event ?

    In the ```form``` element.

## Exercises: Level 2

Run the react project under ./exercises directory.
