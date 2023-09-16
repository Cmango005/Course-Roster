web features:
. This website lets you to select online course from 9 different courses->
     One of the core features of this project is the ability for users to select courses from a list. The Home component allows users to view a list of available courses and select them. When a user selects a course, the application calculates and displays the remaining credit hours, total credit hours, and total cost in real-time.The project effectively manages the state of selected courses, ensuring that users can't select the same course multiple times.
. you can select a course only once->
      The project provides user feedback and validation to enhance the user experience. When a user attempts to select a course that has already been selected, an alert is triggered to inform them that the course is already taken. If a user attempts to select a course that would exceed the maximum credit hours (20), another alert notifies them that it's not possible. These feedback mechanisms help users make informed choices and prevent them from taking actions that are not allowed

. I have two main components->
     Home and Card. Home component is responsible for rendering the list of courses and handling the logic for selecting courses. Card component displays the selected courses, remaining credit hours, total credit hours, and total cost. 

State Management:

I've used the useState hook to manage state within both components. This allows I track and update data dynamically. 
Fetching Data:

In the Home component, I use the fetch API to retrieve data from an api.json file. This data likely contains information about available courses. 
Selecting Courses:

In the Home component, when a user clicks the "Select" button, the handleSelectCourse function is called. This function checks if the course is already selected, and if not, it calculates the new total credit hours, remaining credit hours, and total cost. 
Rendering Courses:

In the Home component, I use a .map function to iterate through the data array and render each course as a card. 
Passing Props:

I pass down props (card, handleSelectCourse) from the Home component to the Card component so that it can display the selected courses and relevant information. 
Rendering Selected Courses:

In the Cart component, I use a .map function to iterate through the selectCourse array and render the names of selected courses. 
Styling:

I've applied tailwind CSS classes to style the components. 