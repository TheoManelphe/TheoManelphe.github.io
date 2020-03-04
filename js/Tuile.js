class Tuile {
	

	constructor(ligne,colonne,background) {
		this.image = new Image(4*ligne+colonne,background);
		this.voisins = new Array();
		if (ligne > 0) this.voisins.push(this.image.indice - 4);
		if (ligne < 3) this.voisins.push(this.image.indice + 4);
		if (colonne > 0) this.voisins.push(this.image.indice - 1);
		if (colonne < 3) this.voisins.push(this.image.indice + 1);
	}

	setBackground(background) {
		this.image.setBackground(background);
	}

	setI(img) {
		this.image.setI(img);
	}




}