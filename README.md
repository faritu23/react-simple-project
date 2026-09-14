## Name of your project: Dev Stack


## Description:Dev Stack is a React-based technology management website where users can explore different technologies and add their favorite technologies to their personal stack.


## Technologies Used
React,JavaScript,Tailwind CSS,DaisyUI,React Icons,React-Toastify,JSON


## Features
1. Browse Technologies:Users can explore different technologies and view their details.
2. Add Technologies to Stack:Users can add their favorite technologies to their personal stack.
3. Manage Your Stack:Users can remove technologies from their stack and see the total number of selected technologies.


## Also answer these React questions at the end of your Readme (write the answers in your own words, short and simple):
1. What is JSX, and why is it used in React?
ans: Jsx is a method or syntax where we write html-like data in js. 

2. What is the difference between props and state?
ans: Props use for pass data parent to child component
     where state use for store or manage data.

3. What does the useState hook do, and where did you use it in this project?
ans: UseState use for store ,manage ,update data .In this project I use useState in "Technologies.tsx" 
    const [stack ,setStack]=useState<ITecnology[]>([]); where stack is use for store and setStack use for update.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
ans: useEffect used to perform side effects in a React component,it also use for when we need data out of the component .
    Fetching data, loading data, working with APIs, or interacting with external systems.

5. Why does every item in a .map() list need a unique key prop?
ans: For update,added,removed react use unique key foe understand .So react requires a unique key prop for each item in a list so that it can identify each item efficiently .

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
ans: Conditional rendering means displaying different UI elements based on a condition.
    I use:{stack.length?(`${stack.length} Technology Selected`):`No technologies selected yet.`};

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans: Using props data pass from parent component to child component ,but react can not pass direct data from child to parent ,So parent give child a function props and child call that function
