Assignment 06 - Conceptual Questions Answer-

1) What is the difference between var, let, and const?
ans-
* var: It is function-scoped and can be re-declared and updated anywhere within its scope.
* let: It is block-scoped (accessible only inside {}), can be updated but not re-declared in the same block.
* const: It is also block-scoped but fixed; it cannot be updated or re-declared after the initial assignment. 

2) What is the difference between map(), forEach(), and filter()?
ans-
* map(): Iterates through an array and returns a new array containing the results of the transformation.
* forEach(): Executes a function for each array element but does not return a new array (returns undefined).
* filter(): Iterates and returns a new array containing only the elements that pass a specific condition.

3) What are arrow functions in ES6?
ans-
* Arrow functions are a more concise way to write function expressions using the => syntax.
* They do not have their own this context, which makes them very useful for maintaining scope in callbacks.

4) How does destructuring assignment work in ES6?
ans-
* It is a special syntax that allows you to "unpack" or extract values from arrays or properties from objects into distinct variables.
* For example, const {name, price} = plant; allows you to access those properties directly without repeating the object name.

5) Explain template literals in ES6. How are they different from string concatenation?
ans-
* Template Literals: These are strings wrapped in backticks (`) that allow for easy variable embedding using ${variable} and multi-line strings.
* Difference: String concatenation uses the + operator (e.g., 'Price: ' + price), which can become messy and hard to read, whereas template literals are cleaner and more readable.