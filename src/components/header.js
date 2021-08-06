const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const docDate = document.createElement('span');
  const docTitle = document.createElement('h1');
  const span = document.createElement('span');

  header.appendChild(docDate);
  header.appendChild(docTitle);
  header.appendChild(span);

  header.classList.add('header');
  docDate.classList.add('date');
  span.classList.add('temp');

  docDate.textContent = date;
  docTitle.textContent = title;
  span.textContent = temp;

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  const test = document.querySelector(selector);
  test.appendChild(Header('Duck Huntin', 'August 6th', '95\u00B0'));
}

export { Header, headerAppender }
