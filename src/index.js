import React from 'react';
import ReactDOM from 'react-dom';

import Page from './LandingPage/Page.js';

import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


/*  Because we pulled in a ReactDom libary - it allows us to use a global variable = ReactDOM with a render method which allows us to render something to the screen
    The HTML that we passed into render is the element we want to place int the div in index.html which is the container for the actual element we displaying in the screen.
    The second parameter is document.getElementById("root") which is a DOM node which defines where do we place it in index.html

    Under the hood: ReactDOM.render() is taking the DOM element that we are grabbing with by ID and it is running a .append(). And what is it appending is the HTML define in
    the render()
 */
// ReactDOM.render( <h1> hello, react!</h1>, document.getElementById("root"));

// ReactDOM.render(<ul><li>Thing2</li><li>Thing3</li></ul>, document.getElementById("root"));
/****************************************************************************************************** */
// Composability: creating component of HTML like blocks which can be placed into render to be displayed. 
// function MainContent(){
//   return (
//     <h1> I AM LEARNING REACT!!! WHOOHHOO</h1>
//   )
// }
// ReactDOM.render(
// <div>
//   {/* Rather than putting directly the HTML, we have defined a function which serves as a component which we can then place it into render() like an HTML tag */}
//   <MainContent />
// </div>, document.getElementById("root")
// )
/****************************************************************************************************** */
/*  Imperative way to program. (create element => add textContext => add className => append) . telling it step by step => very tedious. 
      => other than this, we can actually code it directly as html in index.html and provide in the div <div id="root"></div>   
      => this will make the programming very verbose and length, not efficient. Imagine this is just one liner. If more complex HTML
      the entire code will become even more complex.
      => with react, we can transform this essentially into one liner using ReactDOM.render(). The code will compound with more complex UI
*/
// const h1 = document.createElement("h1")
// h1.textContent = "this is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)
/****************************************************************************************************** */

// How with jsx, it made react more declarative:
// imperative
// const h1 = document.createElement("h1")
// h1.textContent = "this is an imperative way to program"
// h1.className = "header"
// console.log(h1)
// <h1 class="header">this is an imperative way to program</h1>

// declarative
// const element = <h1 className="header"> this is JSX</h1>
// console.log(element)
// ReactDOM.render(element,document.getElementById("root"))
/*  React creates with jsx => POJO. The output below is the console log using jsx. And what react is creating with jsx is a POJO 
    And those object describe the dom element we want react to put on the page for us
    It has similar properties with the imperative way above above.
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "header",
        "children": " this is JSX"
    },
    "_owner": null,
    "_store": {}
}*/

//JSX
/* NOTE:  With JSX, make sure only return a single parent element in the render(), ie : <h1 className="header"><p>this is a paragraph</p>
          Unless we bucket them into one parent element ie like putting it in a div container <div> <h1 className="header"> this is JSX</h1><p>this is a paragraph</p> </div>
*/
// const page = (
// <div> 
//   <h1 className="header">this is jsx </h1>
//   <p>this is a paragraph</p> 
// </div>
// )
// ReactDOM.render(page,document.getElementById("root"))
// // We can also see it in console as a POJO
// console.log(page)
/*
{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "children": [
            {
                "type": "h1",
                "key": null,
                "ref": null,
                "props": {
                    "className": "header",
                    "children": "this is jsx "
                },
                "_owner": null,
                "_store": {}
            },
            {
                "type": "p",
                "key": null,
                "ref": null,
                "props": {
                    "children": "this is a paragraph"
                },
                "_owner": null,
                "_store": {}
            }
        ]
    },
    "_owner": null,
    "_store": {}
}
*/

/****************************************************************************************************** */
/*
Challenge: find out what happens if we try to append jsx to our div#root using .append() instead of ReactDOM
*/
// JSX
// const newpage = (
//   <div> 
//     <h1> My awesome website in REACT</h1>
//     <h3> Reasons I love react</h3>
//     <ol>
//       <li> its composable</li>
//       <li> its declarative</li>
//       <li> its a hireable skill</li>
//     </ol>
//   </div>
// )
// document.getElementById("root").append(newpage)
// With the above code, by just purely append(newpage) => the output in the webpage = [object Object] => string representation of a regular javascript object
// document.getElementById("root").append(JSON.stringify(newpage))
// with stringify, we can print out the content in the object
/*
    With the above, we are trying to showcase that newpage which is a JSX, is pure POJO. At this point of time, it has nothing to do with the DOM and is
    not recognized by the browser as anything important dealing with the DOM. Only when we try to render it using ReactDOM.render(), that react can take
    this POJO and turn them into real DOM element that the browser can interpret as things like first level header and order list etc.
*/
// ReactDOM.render(newpage, document.getElementById("root"))
/****************************************************************************************************** */
/*
    A function in javascript can be considered as a react component. 
    - Need to have pascal case = capitalize first letter
    - wrap it in HTML tag in render() function
*/

/*
    We can also apply nested composibility concept.
    This means that in a function which serves as a body page component, we can have another header component within it. For example below:
*/


// All eleement are children of the <div> and this div appears in the main function Page() as a component
  // Parent child component - Parent = Page, child - Header, MainContent, Footer



ReactDOM.render(<Page />, document.getElementById("root"))
/*
      Quiz
      1. What is a React Component?
          A function that returns React elements
          Elements => objects that gets created when we return jsx. jsx => a special syntax of react
          and under the hood, it is returning a regular java script object.These object are then
          turn into real DOM element that people can see on the screen. People also call it UI
          user interface. Like any javascript function, a component can be reused over and over.
          For instance, i can run my page function/ or create an instance of my page component
          by just rendering page in ReactDOM.render(<Page />, document.getElementById("root"))

      2. All function needs to be a pascal camel format
          function MyComponent(){
            return (<small> I'm tiny text!>/small>)
          }
      
      3. When calling a component, with the functional components, need to include an angle bracket
         in order to call a component or create an instance of the component.   

          ReactDOM.render(<Header />, document.getElementById("root"))

*/







/****************************************************************************************************** */
// Original index.js code

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
