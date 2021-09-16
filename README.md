# Simple Task List in React.js

Click on the link to see how it works || https://ewelina-en.github.io/todo-list-react/

Simple task list moved from vanilla JS into React.js.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instruction

Website shows three sections:
1. "Dodaj nowe zadanie" - where you can add new task
    - Type in the task in the input field
    - Click "Dodaj zadanie" button
    - The task will appear in the "Lista zadań" section
    - If you want get example tasks from server, click on "Pobierz przykładowe zadania" button

2. "Wyszukiwarka" - where you can search specified task
    - Type specified task in "Wyszukiwarka" section
    - If the searched task exists it will be displayed in the "Lista zadań" section

3. "Lista zadań" - which shows your to-do list
    - If task done - click the green checkbox on the left
    - If you want to delete the task, click the red icon on the right
    - If you want read task details, click on its content to show them.

    Button "Ukryj ukończone" toggles the status of all finished tasks to hidden. Clicking on it again shows the list.
    Button "Ukończ" sets the status of all tasks to the done. The button is disabled if all tasks are marked as done.
    
In the "O mnie" in menu, you can read information about the author of this author

## Technologies

- HTML
- CSS
- Styled Components
- React.js
- React-Redux
- Redux-Saga
- Redux Router
- Redux/Toolkit

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## Other information

Project done as a part of front-end development course at YouCode.

