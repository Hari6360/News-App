// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let result = document.getElementById("result");

function getNews() {
	let search = JSON.parse(localStorage.getItem("search"));

	let query = (document.getElementById("query").value = search);

	const url = ` https://masai-mock-api.herokuapp.com/news?q=${query}`;
	fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			console.log(res);
			let data = res.articles;
			result.innerText = null;
			appendData(data);
		});
}

getNews();

function appendData(data) {
	data.map((elem) => {
		let div = document.createElement("div");
		div.style.border = "1px solid";
		div.style.cursor = "pointer";
		div.addEventListener("click", () => {
			localStorage.setItem("news", JSON.stringify(elem));
			window.location.href = "news.html";
		});

		let img = document.createElement("img");
		img.src = elem.urlToImage;
		img.style.height = "150px";
		img.style.width = "150px";

		let headline = document.createElement("h3");
		headline.innerText = elem.title;

		let para = document.createElement("p");
		para.innerText = elem.description;

		div.append(img, headline, para);
		result.append(div);
	});
}

function searchNews(event) {
	let query = document.getElementById("query").value;

	if (event.key === "Enter") {
		localStorage.setItem("search", JSON.stringify(query));
		window.location.href = "search.html";
	}
}
