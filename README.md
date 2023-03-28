# Basic CRUD Operations

This project uses `HTML` and `JS` to create, read, update, and delete data obtained from a form.

## Users Required Data

- Name
- Phone Number
- Village
  
The information is obtained from users and stored in the client-side browser's local storage using the local storage API. The data is saved as key-value pairs and can be accessed using the JavaScript file  
A **local storage** basically refers to a mechanism provided by modern web browsers that allows web applications to store data on a user's computer. This data can be accessed and manipulated by the web application even after the user has closed the browser window or restarted their computer

## Files and Functions

> [index.html](https://github.com/onimsi/javascript-array-object/blob/main/index.html): This file contains all the `html` codes that is used to structure the form and render form. It basically has three input fields (name, phone, and village) and a submit button.

> [indesx2.js](https://github.com/onimsi/javascript-array-object/blob/main/index2.js): The code prompts the user to enter their name, phone number, and address in a specific format separated by commas. It then `splits` the input string into an array of individual values using the `split()` function and assigns them to variables `name`, `phone`, and `villa` respectively. The purpose of this code is to capture and extract user input from a prompt and store it in variables for further processing or use.

> [index.js](https://github.com/onimsi/javascript-array-object/blob/main/index.js): This JavaScript file contains functions tha implement the basic CRUD (Create, Read, Update, Delete) operations and localStorage to store users data.

### Functions

   1. `submitForm()`: This function takes the input values of name, phone, and villageand creates an object with these values. If the `editMode` variable is true, it updates the `student` object at the `indexToEdit` position; otherwise, it adds the object to the `students` array. After that, it stores the students array in localStorage and calls the `displayData()` function to render the updated student data.
  
  2. `editStudent()`: This function takes an index as a parameter, sets the `editMode` to true, sets the `indexToEdit` variable to the passed index, and fills the form fields with the data of the student object at the given index.

  3. `deleteStudent()`: This function removes the `student` object at the passed index from the students array, updates the localStorage with the new array, and calls the `displayData()`function to render the updated student data.

  4. `displayData()` This function takes the students array as a parameter and iterates over each object in the array. It generates an HTML string by concatenating the name, phone, and village of each student object along with an Edit and Delete button that calls the corresponding functions. Finally, it sets the generated HTML string as the innerHTML of an HTML element with the id "data" to display the student data on the webpage.
