// Ude Import export (MANDATORY)

{
	/* <script type="module">
	import {navbar}from src="/index.html" let div=document.getElementById(navbar)
	navbar.innerHTML=navbar()
</script>; */
}

let detailed_news = document.querySelector("#detailed_news");
let news = JSON.parse(localStorage.getItem("news"));

console.log(news);
appendData(news);

function appendData(elem) {
	let div = document.createElement("div");

	let img = document.createElement("img");
	img.src = elem.urlToImage;
	img.style.height = "350px";
	img.style.width = "450px";

	let headline = document.createElement("h3");
	headline.innerText = elem.title;

	let para = document.createElement("p");
	para.innerText = elem.description;

	div.append(img, headline, para);
	detailed_news.append(div);
}
function searchNews(event) {
	let query = document.getElementById("query").value;

	if (event.key === "Enter") {
		localStorage.setItem("search", JSON.stringify(query));
		window.location.href = "search.html";
	}
}
