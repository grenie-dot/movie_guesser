const movies = [
  // 1970s
  {
    title: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall", "Diane Keaton"],
    genre: ["Crime", "Drama"],
    country: "USA",
    director: "Francis Ford Coppola",
    decade: "1970s"
  },
  {
    title: "Apocalypse Now",
    actors: ["Martin Sheen", "Marlon Brando", "Robert Duvall", "Laurence Fishburne"],
    genre: ["War", "Drama"],
    country: "USA",
    director: "Francis Ford Coppola",
    decade: "1970s"
  },
  {
    title: "Taxi Driver",
    actors: ["Robert De Niro", "Jodie Foster", "Harvey Keitel"],
    genre: ["Crime", "Drama"],
    country: "USA",
    director: "Martin Scorsese",
    decade: "1970s"
  },
  {
    title: "A Clockwork Orange",
    actors: ["Malcolm McDowell", "Patrick Magee", "Adrienne Corri"],
    genre: ["Sci-Fi", "Drama"],
    country: "UK",
    director: "Stanley Kubrick",
    decade: "1970s"
  },
  {
    title: "Rocky",
    actors: ["Sylvester Stallone", "Talia Shire", "Burt Young"],
    genre: ["Drama", "Sport"],
    country: "USA",
    director: "John G. Avildsen",
    decade: "1970s"
  },

  // 1980s
  {
    title: "Scarface",
    actors: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"],
    genre: ["Crime", "Drama"],
    country: "USA",
    director: "Brian De Palma",
    decade: "1980s"
  },
  {
    title: "Back to the Future",
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    genre: ["Sci-Fi", "Adventure", "Comedy"],
    country: "USA",
    director: "Robert Zemeckis",
    decade: "1980s"
  },
  {
    title: "The Shining",
    actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    genre: ["Horror", "Drama"],
    country: "USA",
    director: "Stanley Kubrick",
    decade: "1980s"
  },
  {
    title: "Blade Runner",
    actors: ["Harrison Ford", "Rutger Hauer", "Sean Young"],
    genre: ["Sci-Fi", "Thriller"],
    country: "USA",
    director: "Ridley Scott",
    decade: "1980s"
  },
  {
    title: "E.T. the Extra-Terrestrial",
    actors: ["Henry Thomas", "Drew Barrymore", "Dee Wallace"],
    genre: ["Sci-Fi", "Family"],
    country: "USA",
    director: "Steven Spielberg",
    decade: "1980s"
  },

  // 1990s
  {
    title: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    genre: ["Drama"],
    country: "USA",
    director: "Frank Darabont",
    decade: "1990s"
  },
  {
    title: "The Matrix",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    genre: ["Sci-Fi", "Action"],
    country: "USA",
    director: "The Wachowskis",
    decade: "1990s"
  },
  {
    title: "Fight Club",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    genre: ["Drama", "Thriller"],
    country: "USA",
    director: "David Fincher",
    decade: "1990s"
  },
  {
    title: "Goodfellas",
    actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    genre: ["Crime", "Drama"],
    country: "USA",
    director: "Martin Scorsese",
    decade: "1990s"
  },
  {
    title: "Saving Private Ryan",
    actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    genre: ["War", "Drama"],
    country: "USA",
    director: "Steven Spielberg",
    decade: "1990s"
  },

  // 2000s
  {
    title: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"],
    genre: ["Action", "Crime", "Drama"],
    country: "USA",
    director: "Christopher Nolan",
    decade: "2000s"
  },
  {
    title: "Gladiator",
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    genre: ["Action", "Drama", "Historical"],
    country: "USA",
    director: "Ridley Scott",
    decade: "2000s"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Orlando Bloom"],
    genre: ["Fantasy", "Adventure"],
    country: "New Zealand/USA",
    director: "Peter Jackson",
    decade: "2000s"
  },
  {
    title: "City of God",
    actors: ["Alexandre Rodrigues", "Leandro Firmino", "Seu Jorge"],
    genre: ["Crime", "Drama"],
    country: "Brazil",
    director: "Fernando Meirelles",
    decade: "2000s"
  },
  {
    title: "The Departed",
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    genre: ["Crime", "Thriller"],
    country: "USA",
    director: "Martin Scorsese",
    decade: "2000s"
  },

  // 2010s
  {
    title: "Interstellar",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon"],
    genre: ["Sci-Fi", "Drama", "Adventure"],
    country: "USA",
    director: "Christopher Nolan",
    decade: "2010s"
  },
  {
    title: "Whiplash",
    actors: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    genre: ["Drama", "Music"],
    country: "USA",
    director: "Damien Chazelle",
    decade: "2010s"
  },
  {
    title: "Parasite",
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    genre: ["Drama", "Thriller"],
    country: "South Korea",
    director: "Bong Joon-ho",
    decade: "2010s"
  },
  {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    genre: ["Sci-Fi", "Thriller"],
    country: "USA",
    director: "Christopher Nolan",
    decade: "2010s"
  },
  {
    title: "Mad Max: Fury Road",
    actors: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    genre: ["Action", "Adventure"],
    country: "Australia/USA",
    director: "George Miller",
    decade: "2010s"
  },

  // 2020s
  {
    title: "Dune",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Zendaya"],
    genre: ["Sci-Fi", "Adventure", "Drama"],
    country: "USA",
    director: "Denis Villeneuve",
    decade: "2020s"
  },
  {
    title: "Oppenheimer",
    actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    genre: ["Drama", "Historical", "Biography"],
    country: "USA",
    director: "Christopher Nolan",
    decade: "2020s"
  },
  {
    title: "Everything Everywhere All at Once",
    actors: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu", "Jamie Lee Curtis"],
    genre: ["Sci-Fi", "Comedy", "Drama"],
    country: "USA",
    director: "Daniel Kwan, Daniel Scheinert",
    decade: "2020s"
  }
  ]