
import { apiCall, appendArticles } from "./main.js"


async function storeSearchterm(term) {

    let url =  `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`
    let articles = await apiCall(url)
    
    let main = document.getElementById("main")
  
    appendArticles(articles,main)
}


export default storeSearchterm