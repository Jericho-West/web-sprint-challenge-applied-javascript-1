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
  let mainDiv = document.createElement("div")
  let spanDate = document.createElement("span")
  let hydrogen = document.createElement("h1")
  let spanTemp = document.createElement("span")

  mainDiv.className = "header"
  spanDate.className = "date"
  spanDate.textContent = date
  hydrogen.textContent = title
  spanTemp.className = "temp"
  spanTemp.textContent = temp

  mainDiv.appendChild(spanDate)
  mainDiv.appendChild(hydrogen)
  mainDiv.appendChild(spanTemp)
  
  return mainDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let attach = document.querySelector(selector)
  attach.appendChild(Header("You Won't Believe", "That statement is false ->", "<- That statement is true"))
}

export { Header, headerAppender }
