# Star Wars - ReactJS Interview

We welcome you and thank you for taking the time to do this coding assessment. Please read the guidelines before getting started.

## Assessment Guidelines:

* The purpose of this assessment is to help us evaluate your application development coding skills.
* You will not be graded on your UX/UI or visual design skills
* You are allowed to use any non-human resource. Ex:
  * **Allowed:** StackOverflow, Google, reference code on Github, etc.
  * **Not Allowed:** Chatting or calling your old boss, using the code of your friend who already took this assessment
 * You must use the skeleton project and existing UI as the start for your code
 * You may use external projects and frameworks or copy and paste examples under two conditions:
   * Make sure to commit any changes you make immediately before and after including the external code and make note of it in the commit message when you add it.
   * Make sure you still provide us with enough of your own code to get a feel for how you think
* Check out the API index at http://localhost:3008. Note that the api uses json-server: https://github.com/typicode/json-server
* Don't be overwhelmed, supposed to be more steps than you are likely to complete in your given time frame. Try to do them in order, but you might be able to skip steps if you get stuck.
* Put the time that you start and end on the first line of notes.md. Also, add any grading advice, disclaimers, brags, feedback, or anomalies you encounter along your way.
* This is a git repo. Plesse try to commit often and add messages to your commits so we can more easily review your work.
* We added more steps than we expect you to finish. Don't be overwhelmed and get as far as you can in the time you have. We will take into account the time amount of time you took, the amount of experience you have in ReactJS, etc.
* **The webpack server and API server for the project can be run via `npm start`**.

## Assessment Steps:https://mail.google.com/mail/u/0/#inbox

### PART I - Basic Data Retrieval

 1. Modify the *Card* component to take props for the person's name, image, bithday, and home planet.
 2. GET the list of Star Wards people from `http://localhost:3008/people` and render a *Card* component for each of the people, using people data from the API as props.
 3. Use `http://localhost:3008/planets` to get the name of each person's home world. (Note that the embed functionality of json-server has been disabled so that this is necessary ).

### PART II - Controlled Data Fetching

 4. Add pagination at the server level, loading no more than 10 results at a time (ref: https://github.com/typicode/json-server#paginate).
 5. Make the provided `SearchBar` component work as a filter on the people cards, acting on any of their attributes, filtering at the server level and still paginating the results(ref: https://github.com/typicode/json-server#full-text-search).

### PART III - Saving to the server

 6. Add an edit button on the card that displays a form to edit all of the person's attributes except for home world, that will be in a later step. (you can route to another page, display a modal, edit in-line, or do this any way you like).
 7. Add a *Save* button to the form that updates the person's attributes by making a PATCH request to `http://localhost:3008/people/[the person's id goes here]`. Note from the json-server documentation:
 > A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body.
8. Create a component that renders a `<select></select>` element For the person's home world. Pass in the list of planets from the API a prop to create options for the select element. Use each planet's id as the value like so `<option value=1>Tatooine</option>`. Make sure that this saves correctly to the server

### PART IV - Favoriting Cards

9. Add a *favorite* button to each card and a favorite count to the upper right hand corner of the screen. Clicking the button toggles favorited button state and increments/decrements the favorite count appropriately.
10. Make the favorite state save each favorite to the json-server by POSTing to the `http://localhost:3008/peoplefavorites` endpoint. Note that the json-server is schema-less so we expect you to invent your own schema for the favorite records. Load favorited documents on the initial page render in order to appropriately render the favorite counter and button states on page load.

### PART V - Drag and Drop

11. When a user clicks on the favorite count, route to a page that displays all the favorite cards, miniaturized using css. Add a back button to go back to the main list.
12. Add drag-and-drop functionality in order to sort the favorites in order. Display the order on above the card. Save the order to the `http://localhost:3008/peoplefavorites` endpoint in order to persist it and load the saved favorite order from the server.
13. Update your code so that when a new card is favorited or unfavorited, that change is persisted to the server. New, unsorted favorites should be added to the end of the favorite list in order of when they were favorited (unless changed by sorting).

# May the force be with you.
