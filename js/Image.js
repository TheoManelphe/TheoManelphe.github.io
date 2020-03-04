class Image {
	
constructor(indice,background) {
		this.indice = indice;
		this.id = document.getElementById('photo' + this.indice);
		this.i = this.indice;
		this.background = background;
		this.setSource();
	}


	setSource() {
		this.id.src = "img/" + this.background + "/" + this.background + "_" + this.i + ".jpg";
	}

	

	setBackground(bg) {
		this.background = bg;
		this.setSource();
	}

	setI(i) {
		this.i = i;
		this.setSource();
	}

	permuterSrc(sec) {
		
		let seconde = sec.i;
		let premiere = this.i;
		this.setI(seconde);
		sec.setI(premiere);
		this.setSource();
		sec.setSource();
	
	}
	
	imageCorrecte() {
		return this.indice == this.i;
	}
	
}
