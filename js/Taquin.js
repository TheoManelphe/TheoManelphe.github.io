class Taquin {
	
    constructor(background) {
        this.background = background;
        this.nb_coups = 0;
        this.plateau = new Array();
        for(let ligne = 0; ligne < 4; ligne++) {
            for(let colonne = 0; colonne < 4; colonne++) {
                this.plateau.push(new Tuile(ligne,colonne,background));
            }
        }
        this.message = document.getElementById('message');
        this.setMessage("0 coup, " + this.nb_bien_places() + " bien placés");
        this.sol = new Tuile(4,0,background);
    }

    emplacement_vide() {
        let i = 0;
        while(this.plateau[i].image.i != 15)
            i++;
		
        return i;
    }

    

    
	
	setBackground(background) {
        for(let i = 0; i < 16; i++) 
            this.plateau[i].setBackground(background);
        this.background = background;
        this.sol.setBackground(background);
        if (this.resolu()) {
            this.plateau[15].setI("");
        }
    }

    

    reset_nb_coups() {
        this.nb_coups = 0;
    }

    voisinDeVide(){
    	let b = false;

		if (this.ligne == 0 ){
			if (this.colonne == 0 ){
				if (Tuile(ligne,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
			}
			if (this.colonne == 3 ){
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
			}
			if (this.colonne == 2 || this.colonne == 2){
				if (Tuile(ligne,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
			}
		}

		if (this.ligne == 3 ){
			if (this.colonne == 0 ){
				if (Tuile(ligne,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne -1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
			}
			if (this.colonne == 3 ){
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne -1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
			}
			if (this.colonne == 2 || this.colonne == 2){
				if (Tuile(ligne,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne -1,colonne,background ) == document.getElementById('photo15')){
					 b = true
				}
			}
		}
		if ((this.ligne == 1 && this.colonne == 0) || (this.ligne == 2 && this.colonne == 0) ){
			
				if (Tuile(ligne -1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne,background ) == document.getElementById('photo15')){
					 b = true
				}
		}
		if ((this.ligne == 1 && this.colonne == 3) || (this.ligne == 2 && this.colonne == 3) ){
			
				if (Tuile(ligne -1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne ,background) == document.getElementById('photo15')){
					 b = true
				}
		}
		if ((this.ligne == 1 && this.colonne == 1) || (this.ligne == 1 && this.colonne == 2) ||
		 (this.ligne == 2 && this.colonne == 1) || (this.ligne == 2 && this.colonne == 2)){
			
				if (Tuile(ligne -1,colonne,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne,colonne -1,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne +1,colonne ,background) == document.getElementById('photo15')){
					 b = true
				}
				if (Tuile(ligne ,colonne +1,background) == document.getElementById('photo15')){
					 b = true
				}
		}
		return b;
	}

    mvt_aleat(bool) {
        let t = this.plateau[this.emplacement_vide()].voisins;
        let l = t.length;
        let i = Math.floor(Math.random() * l);
        this.bouger(t[i]);
    }

    mlg(n) {
        if (this.resolu()) {
            this.plateau[15].setI(15);
        }
        for(let i = 0; i < n; i++) this.mvt_aleat(true);
        this.reset_nb_coups();
        this.setMessage("0 coup, " + this.nb_bien_places() + " bien placés");
    }

    nb_bien_places() {
        let n = 0; 
        for(let i = 0; i < 15; i++) {
            if (this.plateau[i].image.imageCorrecte())
                n++;
        }
        return n;
    }
	
	setMessage(m) {
        this.message.innerHTML = "<p>" + m + "</p>";
    }

    resolu() {
        return this.nb_bien_places() == 15;
		document.getElementById("jeu");
		
    }

    bouger(i1) {
    	

        if (!this.voisinDeVide()) {
            let i2 = this.emplacement_vide();
            if (this.plateau[i1].voisins.indexOf(i2) != -1) {
            	
                this.plateau[i1].image.permuterSrc(this.plateau[i2].image);
                this.nb_coups++;
                this.setMessage(this.nb_coups + " coups, " + this.nb_bien_places() + " bien placés");
               
                if (this.resolu()) {
                    this.setMessage("puzzle résolu en " + this.nb_coups + " coups");
                    this.plateau[15].image.id.src = "img/" + this.background + "/" + this.background + "_.jpg";
                   
                }
            }
        }
        
    }


}

