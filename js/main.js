Sfotipy = {}
//EXTENDIENDO Y CREANDO LAS CLASES  , LAS 
//LAS CLASES SOLO SE CREAN CON IGUAL
Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.Songs = Backbone.Collection.extend({
	model:Sfotipy.Song   // tendra un lista de instancias de tipo Song
});

Sfotipy.SongView = Backbone.View.extend({
	events:{
		"click .action.icon-add" : "add"
	},

	tagName:'li',
	className:"item border-bottom",
	template:Handlebars.compile($("#song-template").html()),

	initialize:function(){
		this.listenTo(this.model , "change", this.render, this);
		//con esto cuando se instancie song , luego se agrege a un songview
		//y luego el song cambie (el modelo) , el songview (la vista) tambien cambie
		//como por arte de magia :D
	},

	render:function(){
		var song = this.model; // cuando se instancia una vista recibe una instancia de el modelo Song
		var name = song.get("name");
		var author = song.get("author");
		//hay dos elementos el y $el
		//$el es un helper que devuelve el el pero como resultado elemento de jquery para poder usar
		//sus metodos
		var html = this.template(song.toJSON());
		this.$el.html( html );
	}
	,add:function(e){
		alert(this.model.get("name")); 
	}


});

Sfotipy.Router = Backbone.Router.extend({
	routes:{
		"":"index",
		"album/:name":"album",
		"profile/:username":"profile"
	},
	index:function(){
		console.log("estoy en home")
	},
	album:function(name){
		console.log("album"+name)
	},
	profile:function(username){
		console.log("profile "+username)
	
	}
});
Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();



//LO PONEMOS EN WINDOW PARA PODER REVISARLO EN CONSOLA 
window.Sfotipy = Sfotipy;