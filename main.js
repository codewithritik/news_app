async function apiCall(url) {
 try{
    let response = await fetch(url)
    let data = await response.json()
    return data
 }
 catch(error){
     console.log("error")
 }
    //add api call logic here


}


function appendArticles(articles, main) {
    articles.forEach((data)=>{
        let div = document.createElement("div")
        let title = document.createElement("h2")
        title.innerText = data.title
        let img = document.createElement("img")
        img.src = data.urlToImage
        let description = document.createElement("p")
        description.innerText = data.description
        div.append(title,img,description)
        div.onclick = ()=>{
            
        localStorage.setItem("article",JSON.stringify(data))
        window.location.href = "./news.html"


        }

        main.append(div)
    })

    //add append logic here

}

export { apiCall, appendArticles }

// author: null
// content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
// description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
// publishedAt: "2022-02-11T01:27:00Z"
// source: {id: null, name: 'Moneycontrol'}
// title: "LIC Public Issue | Filing with SEBI likely today, IRDAI clears draft papers - Moneycontrol.com"
// url: "https://www.moneycontrol.com/news/business/ipo/lic-ipo-filing-with-sebi-likely-on-february-11-irdai-clears-draft-papers-8070891.html"
// urlToImage: "https://i