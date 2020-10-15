function Movies(title, year, director, composer, why) {
	this.title = title
	this.year = year
	this.director = director
	this.composer = composer
	this.why = why
}
var movies = [
	new Movies("Godzilla: King of the Monsters", "2019", "Michael Dougherty", "Bear McCreary", "It is literally the most beautiful and awe inspiring movie I've ever seen. CGI done VERY VERY right."),
	new Movies("Knives Out", "2019", "Rian Johnson", "Nathan Johnson", "Clever and refreshing as both a mystery movie and an original property in a sea of franchises.")
]

console.log(movies)