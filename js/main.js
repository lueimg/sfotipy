Sfotipy = {}
//EXTENDIENDO Y CREANDO LAS CLASES  , LAS 
//LAS CLASES SOLO SE CREAN CON IGUAL
Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName:"li",
	className:"item border-bottom",
	render:function(){
		var song = this.model; // cuando se instancia una vista recibe una instancia de el modelo Song
		var name = song.get("name");
		var author = song.get("author");
		//hay dos elementos el y $el
		//$el es un helper que devuelve el el pero como resultado elemento de jquery para poder usar
		//sus metodos
		this.$el.html("<span>"+author+"</span>"+ "<span>"+name+"</span>" );

	}
});
//LO PONEMOS EN WINDOW PARA PODER REVISARLO EN CONSOLA 
window.Sfotipy = Sfotipy;