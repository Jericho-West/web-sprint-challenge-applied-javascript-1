import axios from "axios"

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

  let mainDiv = document.createElement("div")
  let sideOR = document.createElement("div")
  let sideF = document.createElement("div")
  let imgContainer = document.createElement("div")
  let img0 = document.createElement("img")
  let span0 = document.createElement("span")

  mainDiv.className = "card"
  sideOR.className = "headline"
  sideF.className = "author"
  imgContainer.className = "img-container"

  span0.textContent = `By ${article.authorName}`
  sideOR.textContent = article.headline
  img0.src = article.authorPhoto

  mainDiv.appendChild(sideOR)
  mainDiv.appendChild(sideF)
  sideF.appendChild(imgContainer)
  sideF.appendChild(span0)
  imgContainer.appendChild(img0)

  return mainDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let attach = document.querySelector(selector)

  axios.get(`http://localhost:5000/api/articles`)
  .then(x => {


    for(let i = 0; i < x.data.articles.javascript.length; i++){
    attach.appendChild(Card(x.data.articles.javascript[i]))
  }
  for(let i = 0; i < x.data.articles.bootstrap.length; i++){
    attach.appendChild(Card(x.data.articles.bootstrap[i]))
  }
  for(let i = 0; i < x.data.articles.technology.length; i++){
    attach.appendChild(Card(x.data.articles.technology[i]))
  }
  for(let i = 0; i < x.data.articles.jquery.length; i++){
    attach.appendChild(Card(x.data.articles.jquery[i]))
  }
  for(let i = 0; i < x.data.articles.node.length; i++){
    attach.appendChild(Card(x.data.articles.node[i]))
  }

  })
  .catch(err => {
    console.log(err)
  })
  
}

export { Card, cardAppender }
