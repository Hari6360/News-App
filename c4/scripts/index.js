// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// function navbar() {
// 	return `<nav id="navbar">
// 			<input
// 				type="text"
// 				id="search_input"
// 				placeholder="Search News"
// 			/>
// 		</nav>`;
// }

// export { navbar };

//  import { navbar}from src="/index.html"

let news = document.querySelector(".news");
function ind() {
	const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

	fetch(url)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			console.log(res);
			let data = res.articles;
			news.innerHTML = null;
			appendData(data);
		});
}

function ch() {
	const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`;

	fetch(url)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			console.log(res);
			let data = res.articles;
			news.innerHTML = null;
			appendData(data);
		});
}
function us() {
	const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`;

	fetch(url)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			console.log(res);
			let data = res.articles;
			news.innerHTML = null;
			appendData(data);
		});
}
function uk() {
	const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`;

	fetch(url)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			console.log(res);
			let data = res.articles;
			news.innerHTML = null;
			appendData(data);
		});
}
function nz() {
	const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`;

	fetch(url)
		.then(function (res) {
			return res.json();
		})
		.then(function (res) {
			console.log(res);
			let data = res.articles;
			news.innerHTML = null;
			appendData(data);
		});
}

function appendData(data) {
	data.map((el) => {
		let div = document.createElement("div");

		let img = document.createElement("img");
		img.src = el.urlToImage;
		img.style.height = "150px";
		img.style.height = "150px";
		let headlines = document.createElement("h1");
		headlines.innerText = el.title;
		let disc = document.createElement("p");
		disc.innerText = el.description;

		div.append(img, headlines, disc);
		news.append(div);
	});
}
function SearchNews(event) {
	let query = document.getElementById("search_input").value;
	if (event.key === "Enter") {
		localStorage.setItem("search", JSON.stringify(query));
		window.location.href = "search.html";
	}
}

// <script type="module">
// 	import {navbar} from "./scripts/index.js"; let
// 	div=document.getElementById("navbar"); div.innerHTML = navbar();
// </script>;
