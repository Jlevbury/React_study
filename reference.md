## Introduction to React
React is a JavaScript library for building user interfaces, primarily for single-page applications. It's used for handling the view layer in web and mobile apps. React allows you to design simple views for each state in your application, and it will efficiently update and render the right components when your data changes. 

Now, let's start setting up a new React project. We'll be using `create-react-app`, which is a command line interface (CLI) tool that helps us to create a new React application with a modern build setup with no configuration. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

## Starting a new project
Here are the steps to create a new React project using `create-react-app`:

1. **Install Node.js and npm**:  The Node.js installation will also install npm (Node Package Manager), which we need for managing our project's dependencies.

2. **Install Create React App**: You install this globally on your computer. This is a one-time installation. If you already have it installed, you can skip this step. Open your terminal or command prompt and type:

```bash
npm install -g create-react-app
```

3. **Create a new React app**: Now that we have `create-react-app` installed, we can use it to create a new application. Go to the directory where you want to create your project and run:

```bash
npx create-react-app my-app
```

Here, `my-app` is the name of your new application. Replace it with whatever name you prefer.

4. **Start the development server**: `create-react-app` will create a new directory in your current folder named after your application, and it will copy the skeleton of a React application into it. Move to this new directory (`cd my-app`) and start the development server by running:

```bash
npm start
```

This will start the development server, and if you open your browser to `http://localhost:3000`, you will see the default welcome page of your new React application.

Great! Now that we have a running React application, let's take a moment to understand the file structure that `create-react-app` generates for us. 

If you open your project in Visual Studio Code, you will see a directory structure something like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.js
    logo.svg
```

Here is a brief explanation of the files and directories:

- `README.md`: This file contains instructions on how to use `create-react-app`.

- `node_modules/`: This is where npm (Node Package Manager) stores the packages and libraries that your project depends on. 

- `package.json`: This file contains metadata about your application like the name, version, and dependencies. 

- `public/`: This directory contains static files that won't be processed by Webpack. The `index.html` file is the main HTML file for your app.

- `src/`: This is the directory where you will put all your JavaScript (.js) and CSS (.css) files. When you run `npm start` or `npm build`, Webpack will start here and build up your application based on the imports it finds.

Let's go over the important files inside the `src/` directory:

- `App.js`: This is the main component in your application. By default, it returns a simple HTML (JSX) that says "Edit src/App.js and save to reload.".

- `index.js`: This is the JavaScript entry point. It imports the `App` component and renders it inside the `root` div element defined in your `public/index.html` file.

## Webpack Reference

Webpack is a powerful and popular static module bundler for modern JavaScript applications. When Webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

Let's break down what that means:

- **Static Module Bundler**: In modular programming, developers break programs up into discrete chunks of functionality called modules. Each module has a smaller surface area than a full program, making verification, debugging, and testing easier. When you refer to it as a static module bundler, it means webpack looks at these modules (and their dependencies) in your codebase and packages them into one or more bundles.

- **Dependency Graph**: Every time one file depends on another, the dependent file is said to have a dependency on the file it needs to function correctly. These dependencies are then processed by webpack and output into a bundle. Webpack starts the process from a list of modules defined on the command line or in its configuration file.

In terms of a React application, webpack can take all of your JSX and ES6 syntax and transpile it (using Babel) into code that the browser can understand. It also allows you to use `import` statements to include one JavaScript file into another - which is a common practice in React applications. 

Webpack can do a lot of other things like handling CSS files, converting SCSS to CSS, loading images, and more. However, when using `create-react-app`, you don't have to worry about configuring webpack yourself as it comes pre-configured for you. It's still good to have an understanding of what it does, as it's a key part of modern React development.



## Introducing components

If you open `src/App.js`, you'll see the code for a basic React component. The default `App.js` file might look something like this:

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

This is a functional component in React. Let's go through this code:

1. **Imports**: At the top of the file, we import the modules we need. `React` is the React library itself, `logo` is an SVG that create-react-app provides for us, and `App.css` is a CSS file that applies styles to this component.

2. **Component Definition**: `function App()` is the definition of our `App` component. This function returns the JSX (JavaScript XML) that will be rendered by this component. 

3. **JSX**: JSX is a syntax extension for JavaScript that looks similar to HTML. It's used to describe what the UI should look like. For instance, `<div className="App">` is a JSX element. 

4. **Export**: `export default App;` is how we make this component available for import by other files in our application.

The `App` function is returning JSX which represents the structure of the UI in this component. You can see that it's a mix of JavaScript and HTML-like syntax.

In this JSX, there are HTML tags like `<div>`, `<header>`, `<img>`, `<p>`, and `<a>`. We can also see some attributes you may recognize from HTML, like `className`, `src`, `alt`, `href`, `target`, and `rel`.

However, there are also things that are not typical in HTML. For example, the curly braces `{}`. In JSX, anything enclosed in `{}` is a JavaScript expression. For instance, `src={logo}` means the value of `src` is the value of the JavaScript variable `logo`.

## Adding use to a component
Customizing our `App` component. For this example, we're going to create a simple functional component that displays a greeting message.

Here's a step-by-step guide on how to do it:

1. **Remove existing code**: First, let's clean up our `App.js` file a bit. Remove everything inside the `App` function.

```jsx
function App() {
  return (
    // We'll add our new JSX here
  );
}
```

2. **Add new JSX code**: Now, inside the return statement, add the following JSX:

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <p>Welcome to your first React application.</p>
      </header>
    </div>
  );
}
```

Here, we've replaced the previous JSX with some of our own. We've added an `h1` heading and a `p` paragraph. We've kept the `div` and `header` elements, as well as their `className` attributes, to maintain the CSS styles that create-react-app provides.

3. **Review the result**: Save your changes (`Ctrl+S` or `Cmd+S`), and you should see the browser automatically update with your new content.

This is a very simple example, but it's the start of your journey in React. You've just created your first React component! As you continue learning, you'll create more complex components with state, props, and other React features.

Please make the changes and let me know if you see the updated greeting on your screen!
Fantastic! Now that you have created your first simple component, let's move on to understanding some of the key concepts of React: `props` and `state`.

**Props**

"Props" is short for properties. In React, you can think of props as attributes that you pass to a component. They give you the ability to make your components more dynamic. Here's an example of how you might use props:

```jsx
function WelcomeMessage(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage name="John Doe" />
      </header>
    </div>
  );
}

export default App;
```

In this example, we have two components: `App` and `WelcomeMessage`. The `WelcomeMessage` component accepts a `props` object as its argument. Inside the component, we access the `name` property of `props` using `{props.name}`. In the `App` component, we use the `WelcomeMessage` component and pass the `name` prop to it.

This code would display "Hello, John Doe" on the screen.

**State**

While props allow you to pass data down the component tree (from parent to child), state is a feature that allows components to change their output over time in response to user actions, network responses, and anything else. State is similar to props, but it is private and fully controlled by the component.

Let's add a state to our `App` component:

```jsx
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('John Doe');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}!</h1>
        <button onClick={() => setName('Jane Doe')}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
```

Here, we import the `useState` hook from React and use it to create a `name` state variable, and the function to update it (`setName`). The `useState` hook is called with the initial state (`'John Doe'`). When the button is clicked, we call `setName` with a new name ('Jane Doe'), and the component re-renders with the new name.

This example is more interactive: it starts by saying "Hello, John Doe!", and when you click the button, it changes to say "Hello, Jane Doe!".

## Lifecycle methods
 Now that you have a basic understanding of components, props, and state, let's introduce another key concept in React: `Lifecycle Methods`.

Lifecycle methods are special methods in the component class that allow you to run code at specific times in the component's lifecycle. They can be used in class components (not functional components), but with the introduction of Hooks in React 16.8, you can accomplish the same tasks in functional components using the `useEffect` Hook. Since functional components are more common in modern React development, I'll explain the lifecycle concept using Hooks.

In a React component, the `useEffect` Hook allows you to perform side effects, such as fetching data, manually changing the DOM, setting up subscriptions (like WebSocket connections), and more. The `useEffect` Hook is a close equivalent to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined in class components.

Here's a basic example of how `useEffect` can be used to fetch some data from an API:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from API:</h1>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </header>
    </div>
  );
}

export default App;
```

In this example, we are doing the following:

1. We create a state variable `data` for storing our fetched data.

2. We use `useEffect` to tell React that our component needs to do something after render. In this case, we want to fetch some data from an API. The `fetch` function returns a Promise, and we use `.then()` to get the JSON response and update our state with the new data.

3. Inside our JSX, we conditionally render a `pre` element with our data. The `{data && ...}` syntax is a 'short-circuit' operation that means "if data is not null or undefined, then render the following".

4. The empty array `[]` passed as the second argument to `useEffect` means that the effect should only run once, similar to `componentDidMount()` in a class component.

Please note that the API endpoint 'https://api.example.com/data' in this example is made up and will not work. You would replace this with a real API endpoint if you were fetching real data.

## Fetching data to display
We will fetch data from a public API and display it in a list. For this example, we'll use the JSONPlaceholder API, which provides dummy data for testing and prototyping.

Here is a step-by-step guide to create a component that fetches data from an API and displays it:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
```

Let's go over the new things in this code:

1. We've updated our `useState` call to initialize `data` as an empty array.

2. We're fetching data from 'https://jsonplaceholder.typicode.com/posts' instead of our previous made up URL. This endpoint will return an array of posts.

3. Inside our JSX, we're using the `Array.map` function to loop over our `data` array and create a new `<div>` for each item. Each `div` contains an `h2` with the post title and a `p` with the post body.

4. We're passing `post.id` to the `key` prop of each `div`. When creating a list in React, you should typically assign keys to your list items. Keys help React identify which items have changed, are added, or are removed, and should be stable, predictable, and unique.

After you've made these changes, your app should display a list of post titles and bodies fetched from the JSONPlaceholder API. If this works as expected, it means you've successfully fetched data in a React component!

Now that you've created a component that fetches data from an API and displays it, let's build on this by adding some interactivity.

## Rendering response items - adding interactivity to the content
One common pattern in web applications is to have a list of items where you can select an item to see more details. Let's implement this pattern: we'll start by displaying just the titles of the posts, and when you click on a title, we'll display the body of that post.

Here's how we can do this:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        {selectedPost ? (
          <div>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
            <button onClick={() => setSelectedPost(null)}>Back</button>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post)}>
              <h2>{post.title}</h2>
            </div>
          ))
        )}
      </header>
    </div>
  );
}

export default App;
```

In this code:

1. We've added a new state variable `selectedPost` that will keep track of the currently selected post.

2. We've added a `handlePostClick` function that sets the `selectedPost` to the post that was clicked.

3. In our JSX, we've added an `onClick` handler to each post div that calls `handlePostClick` with the current post.

4. We've also changed our JSX to conditionally render different UI depending on whether a post is selected. If `selectedPost` is not null, we display the title and body of the selected post, along with a "Back" button that sets `selectedPost` back to null. If `selectedPost` is null, we display the list of posts as before.

With these changes, you should be able to click on a post title to view the details of that post, and click "Back" to go back to the list of all posts.

## Components and Props
Now that you're fetching data from an API, displaying it, and handling user interactions, let's look at another key concept in React: `Components and Props`.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This concept is not unique to React, but React does provide a powerful way to combine components through `props`.

`Props` (short for properties) are how components talk to each other. If you think of components as functions, then props are the arguments to these functions. You can pass data from a parent component to a child component via props.

Let's take our existing application and split it into smaller components. We'll create a `PostList` component for displaying the list of posts and a `PostDetail` component for displaying the details of a post.

Here's how we can do this:

```jsx
import React, { useState, useEffect } from 'react';

function PostList({ posts, onPostClick }) {
  return posts.map((post) => (
    <div key={post.id} onClick={() => onPostClick(post)}>
      <h2>{post.title}</h2>
    </div>
  ));
}

function PostDetail({ post, onBackClick }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        {selectedPost ? (
          <PostDetail post={selectedPost} onBackClick={() => setSelectedPost(null)} />
        ) : (
          <PostList posts={posts} onPostClick={handlePostClick} />
        )}
      </header>
    </div>
  );
}

export default App;
```

With this code:

1. We've created two new functional components: `PostList` and `PostDetail`.

2. `PostList` receives `posts` (the list of posts) and `onPostClick` (the function to call when a post is clicked) as props. It maps over the `posts` array and creates a div for each post.

3. `PostDetail` receives `post` (the selected post) and `onBackClick` (the function to call when the "Back" button is clicked) as props. It displays the title and body of the post, and a "Back" button.

4. In our `App` component, we've replaced the inline JSX for the post list and post detail with the `PostList` and `PostDetail` components, respectively. We've passed the necessary data and functions as props to these components.

By splitting our app into smaller components, we've made it more modular and easier to understand. Each component has its own responsibility and they can be developed and tested independently.


## JavaScript Fetch Reference
`response.json()` is  a built-in method of the `Response` object returned by the `fetch` API in modern JavaScript. 

When you make a request with `fetch`, it returns a `Promise` that resolves to the `Response` object representing the response to the request. This `Response` object has several methods to parse the body of the response in various formats, one of which is `json()`.

The `json()` method reads the body of the response and returns another `Promise` that resolves with the result of parsing the body text as JSON. This is why you often see `response.json()` chained after a `fetch` call when you want to retrieve JSON data.

Here's a simple example:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

In this example, `fetch` returns a `Promise` that resolves to a `Response` object. Then we call `response.json()` to read the body of the response and parse it as JSON, which returns another `Promise`. We can handle this `Promise` with another `then` to log the data when it's ready.

## Hooks

It's important to understand that the `useEffect` Hook lets us express different kinds of side effects after a component renders, including those with cleanup requirements. For example, we could set up a subscription to a WebSocket connection in `useEffect`, and return a function from `useEffect` to disconnect from the WebSocket.

 Here are a few more built in hooks:

1. **`useContext`**: This Hook allows you to access data from a React context without wrapping your component in a `Context.Consumer`. A context in React is a way to pass data through the component tree without having to pass props down manually at every level.

```jsx
import React, { useContext } from 'react';
const MyContext = React.createContext(defaultValue);

function MyComponent() {
  const contextValue = useContext(MyContext);
  // Now you can use contextValue in your component.
}
```

2. **`useReducer`**: This Hook is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It also allows for an event-style API rather than having to call a setter function directly. It's similar to how state is managed in Redux.

```jsx
import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

3. **`useRef`**: This Hook can be used to create a mutable ref object whose `.current` property is initialized with the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. It's often used to keep track of variables across re-renders.

```jsx
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

These are just a few examples of the built-in Hooks you can use in React. There are others, and you can also create your own custom Hooks to encapsulate and reuse stateful logic across your application. 



**Conditional Rendering**

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. This is commonly referred to as "conditional rendering".

**Ternary Operator**

The ternary operator is a simple way to do conditional rendering in React. It's not specific to React - it's a feature of JavaScript. Here's what it looks like:

```jsx
condition ? expressionIfTrue : expressionIfFalse
```

In this syntax:

- `condition` is any valid JavaScript expression that resolves to either truthy or falsy.
- `expressionIfTrue` is the expression that will be evaluated and its result will be returned if the `condition` is truthy.
- `expressionIfFalse` is the expression that will be evaluated and its result will be returned if the `condition` is falsy.

**Multiple Returns**

In React, a component can have multiple return statements. This is a powerful pattern that allows you to write cleaner conditional rendering code.

Here's an example of how you might use multiple returns and the ternary operator in a React component:

```jsx
function MyComponent({ isLoading, data }) {
  // First return
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Second return
  return (
    <div>
      {data.length > 0 ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}
```

In this example:

1. We're using multiple returns to render different JSX depending on the state of the `isLoading` prop. If `isLoading` is true, we return early with a "Loading..." message. If `isLoading` is false, we proceed to the next return statement.

2. In the second return statement, we're using the ternary operator to conditionally render different JSX based on the `data` prop. If `data` has a length greater than 0 (i.e., it's not an empty array), we render the data. Otherwise, we render a "No data available." message.

This example demonstrates how you can use multiple returns and the ternary operator to cleanly handle different states of your props and render different UI accordingly. It also shows how you can nest the ternary operator inside your JSX to conditionally render different parts of your UI inline.

## Pizza Project reference - Component Tree


Here's how the component tree of your app would look:

```
App
│
├── Header
│
├── Menu
│   └── Pizza (This component is rendered multiple times, once for each pizza in the data)
│
└── Footer
    └── Order (This component is conditionally rendered)
```

In this tree:
(ref index.js of Fast React Pizza Project)
- `App` is the root component of your app. It renders the `Header`, `Menu`, and `Footer` components.
- `Header` is a child of `App`. It does not render any other components.
- `Menu` is a child of `App`. It maps over the `pizzaData` array and renders a `Pizza` component for each item.
- `Pizza` is a child of `Menu`. It receives `pizzaObject` as a prop and uses this data to display details about each pizza. It does not render any other components.
- `Footer` is a child of `App`. It conditionally renders the `Order` component based on the current time.
- `Order` is a child of `Footer`. It does not render any other components.

This component structure allows for separation of concerns. Each component is responsible for its own part of the UI, and data is passed down from parent components to child components through props. 




