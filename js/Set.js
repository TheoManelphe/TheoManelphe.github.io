
let T = new Taquin("nombres");
let mlg = document.getElementById("melanger");
let j = document.getElementById("jeu");
let themes = document.getElementById("themes");
let mod = document.getElementById("modele");
let sol = document.getElementById("solution");

for(let i = 0; i < 16; i++) {
	T.plateau[i].image.id.addEventListener("click",function f1() {
		T.bouger(i);
	});
}

themes.addEventListener("change",function() {
	T.setBackground(themes.value);
});

mlg.addEventListener("click",function() {
	T.mlg(200);
});

sol.addEventListener("click",function() {
	if (j.style.display == "none") {
		j.style.display = "flex";
		mod.style.display = "none";
		sol.value = "solution";
		mlg.disabled = false;
	} else {
		j.style.display = "none";
		mod.style.display = "flex";
		sol.value = "puzzle";
		mlg.disabled = true;
	}
});
T.mlg(200);