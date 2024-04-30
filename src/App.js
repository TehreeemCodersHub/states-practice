import Test from "./Test";
import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // !defines a variable which tells us on which step we are currently in
  // !we want this piece of state should be dynamics
  // !take a vlaue which is default value of the variable
  // !the 2nd value is the function that we can use to update the value of the state
  // !now this we will need to destructure it first the value will be the  state variable and the 2nd value will be the function
  // !react has no magic to understand that this is the state variable and this operation is basicaly is updating it
  // !update the state value without mutating it(without changing it)
  let [step, setStep] = useState(1);
  const [test, setTest] = useState({ namess: "tehreem" });
  const [isOpen, setOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // step += 1;

    // !directly mutating this state varibale  can not change it
    // !react is all about immutability --->  an immutable object is an object that, once created, cannot be changed. In the context of JavaScript and React, this means we create new versions of our state or props whenever we want to make changes, rather than modifying existing objects.
    // !there 1for we us ethe hooks states to update the states
    // alert("i am " + parseInt(step + 1));
  }

  function handleNext() {
    if (step < 3) {
      // !we should not update the state on the current sttae like this if we want to update the state value twice baseed on the current value
      //  we shoud pass it in th callback function
      // !so for that reason we need to paas a function instetd of value which will received the value of the argument of the current values
      // setStep(step + 1);
      setStep((step) => step + 1);
      setStep((step) => step + 1);
    }
    // step -= 1;
    //! its bad practice to mutating the object here
    test.namess = "ayesha";
    // !something that we can naot change directly always try to change it through immutablity
    setTest({ namess: "hassan" });
  }

  return (
    <>
      <button className="close" onClick={() => setOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* !we are not creating a new string we wew just updating teh new string */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
            {test.namess}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              // onClick={() => alert("i am previous")}
              //! it is not a function call basically it is the function
              // !do not call a function here but really specify here function value
              // !we do not directly define the event handler function here instead we create a seprate function and then passed it here
              // ?onMouseEnter={() => alert(" am previous")}
              // !passing the value not calling it if we then react immediately run this

              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <br />
      <Test />
    </>
  );
}

// !We are not going to use addeventlitner here because that is the imparitive way of building uis in react we are going to use declarative approach
// !we do not select manually DOM elements thats why we do not use  addeventlitner instead we can use similar html inline event litner
// !we directly listen for the event on the element where they will happen----> no event litner but instead we specify the eventylistner function directly on the element
// !asa soon as react intialize this component it first call this function and see that code here we are calling alert and that what exactly it does
// !bacically we need o defince a callback function that will be called later time (and later time is when the mouse enter this element  )

//! ===> what state is and why we need to use it
// !--> changiing uis as a reult of actions(eg active tab cointing)
// !--> state is a data that a component hold over time and we use it for information that componnet need to remember throughout its lifecycle(component memory)
// !--> state variable and piece of state(single variable in componnet that can define in our code  )
// !--> term state is about the entire state jis k ander componnet pra hta h(entire condition at a certain point in time) --> all the pieces of stste together
// !--> updating state(piece of state) trigger react to rerender the component in userinterface(create a new updated view for the component)
// !--> single component means view
// !--> sync with view by using react does that
// !==> major task 1) update the component view by rerendering the compoinent
// !==> major task 2) allow developers to persist local variables between multiple renders and rerenders
// !==> its very commom we will update the state variable based on the current value of the state
// ?How states changes the componnet view without touching the dom
// !so the answer is that by rerebder the component that has been change react calls the function component again so each time componnet is rerender(remove previous one and replace it the new component ) preserve the component state throughout rerender the state will not be reset untiul the component is disappear from ui entirley which we call is unmounting
// !--> react react to the state changes by rerendering the component again
// !--> if we want to update the state based on its current value twice time then we need to use the sttae through the diffrent method
// !every component has its own and mange its own state
// !-->even we render the same component multiple times on one page each of these component will update independently from all otheronce
// !--> think entire userinterface as a function of state ui = f(state) representation of current sttae
// !--> instead of using ux and ui as explictly dom(k btana pary k kha sa kya krna h )
// !--> with state we now view a UI AS a reflection of data over time

// !--> we need to make those variables as staes thta need to change over time
// !--> when we need somthing in the react dynamic create a piece of related to that thing
// !--> idf you want to chane thw way components look lioke or the data is displayed update this state which usually happen insilde inner handler function
// !--> when we build the component imagine its view asa reflection of stste chnging over time
// !steps
// -> add a new state variable
// -> then use it in the code ususally jsx
// ->update the piece of state in some event handler
// !===> how to use state in practice -->useState -->useReducer --> ContextApi
// !===> Thinking about State -->when to use state --> where to place state --> types of state
