const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //Sets up basic card structure

  const container = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorCredit = document.createElement('span');

  container.appendChild(headline);
  container.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorCredit);

  container.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorCredit.textContent = `By ${article.authorName}`;

  container.addEventListener('click', () => {
    console.log(headline.textContent);
  })

  return container;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const element = document.querySelector(selector);
  const data = axios.get('http://localhost:5000/api/articles');
  data
  .then(res => {
    // set articlesObj equal to the object at this data point
    const articlesObj = res.data.articles;
    //loop through the articlesObj
    for (let key in  articlesObj) {
      // for each Obj in articlesObj sets secondObj to the object
      let secondObj =  articlesObj[key];
      // loops through secondObj
      for (let key2 in secondObj) {
        //sets article equal to secondObj[key2] which is the object containing the data we need
        let article = secondObj[key2];
        //pass article into our Card function and append that to our element
        element.appendChild(Card(article));
      }
    }
  })
  .catch(err => {
    console.error(err);
  });
}

export { Card, cardAppender }
