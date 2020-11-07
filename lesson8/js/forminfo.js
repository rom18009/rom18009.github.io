function adjustRating(rating) {
	document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#regions');
	s.style.display = "block";
	s.textContent = sel.value;

}