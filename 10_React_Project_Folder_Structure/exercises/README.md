# Day 10/30 of React - Project Folder Structure

## My answers

### Exercises:Level 1

1. What is the importance of React Folder Structure and File Naming

    A folder structure that fits well in a project helps improving its maintainability, scalability, ease of understanding it and its use. A good approach to fit some structure in a project is the [five step growing](https://www.robinwieruch.de/react-folder-structure/):

    ```md
    1. One single file;
    2. Several files;
    3. Folders and subfolders;
    4. Folders for reusable files;
    5. Feature folders.
    ```

2. How do you export file

    Using the ```export``` keyword. There are two types of exports: name and default.

    ```js
    // Named export
    export function Button() {}

    // Default export
    export default function Button() {}

    // Default export (recommended approach)
    function Button() {}
    export default Button
    ```

3. How do you  import file

    Using the `import` keyword

    ```js
    // Named export 
    import { Button } from './components/Button';

    // Default export
    import Btn from './components/Button';
    ```
