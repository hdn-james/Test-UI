function my_account() {
	var t = document.getElementById("my_accounts").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".btn-account")) {
		var dropdowns = document.getElementsByClassName(".dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};
