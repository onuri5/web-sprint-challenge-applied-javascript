const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const container = document.createElement('div');
  container.classList.add('topics');
 
  topics.forEach(item => {
    //creates a new div element
    const arrItem = document.createElement('div');
    //fills the div with string in the array
    arrItem.textContent = item;
    //adds the correct class to the div
    arrItem.classList.add('tab');
    //appends the div to the container div
    container.appendChild(arrItem);
  });

  return container;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const element = document.querySelector(selector);
  const temp = axios.get('http://localhost:5000/api/topics');
  temp
  .then (res => {
    //Sets topics equal to the array of topics inside the data
    const topics = res.data.topics;
    //Call Tabs function pass in topics, then append that to our element
    element.appendChild(Tabs(topics));
  })
  .catch (err => {
    console.error(err);
  });
}

export { Tabs, tabsAppender }
