let currentMovie = null;
let totalAttempts = 10;
let movieAttempts = 3;

function startGame() {
  currentMovie = movies[Math.floor(Math.random() * movies.length)];
  totalAttempts = 10;
  movieAttempts = 3;
  document.getElementById("totalCounter").textContent = totalAttempts;
  document.getElementById("movieCounter").textContent = movieAttempts;
  document.getElementById("guessHistory").innerHTML = "<strong>Guess History:</strong><br>";
  document.getElementById("infoStage").style.display = "block";
  document.getElementById("movieStage").style.display = "none";
  document.getElementById("result").innerHTML = "";
  document.getElementById("restartBtn").style.display = "none";
}

function decreaseCounter() {
  totalAttempts--;
  document.getElementById("totalCounter").textContent = totalAttempts;
  if (totalAttempts <= 0) {
    document.getElementById("result").innerHTML = `<p class="wrong">❌ Game Over! The movie was: ${currentMovie.title}</p>`;
    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("infoStage").style.display = "none";
    document.getElementById("movieStage").style.display = "none";
  }
}
function showActorSuggestions(value) {
  const suggestions = document.getElementById("actorSuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const actors = [...new Set(movies.flatMap(m => m.actors))];
  const filtered = actors.filter(a => a.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(a => {
    const div = document.createElement("div");
    div.textContent = a;
    div.onclick = () => {
      document.getElementById("actorInput").value = a;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkActor() {
  const input = document.getElementById("actorInput").value.trim().toLowerCase();
  const history = document.getElementById("guessHistory");
  if (currentMovie.actors.map(a => a.toLowerCase()).includes(input)) {
    history.innerHTML += `<p class="correct">✔ Actor is correct: ${input}</p>`;
  } else {
    history.innerHTML += `<p class="wrong">✘ Wrong actor: ${input}</p>`;
    decreaseCounter();
  }
}
function showGenreSuggestions(value) {
  const suggestions = document.getElementById("genreSuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const genres = [...new Set(movies.flatMap(m => m.genre))];
  const filtered = genres.filter(g => g.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(g => {
    const div = document.createElement("div");
    div.textContent = g;
    div.onclick = () => {
      document.getElementById("genreInput").value = g;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkGenre() {
  const input = document.getElementById("genreInput").value.trim().toLowerCase();
  const genres = Array.isArray(currentMovie.genre) ? currentMovie.genre.map(g => g.toLowerCase()) : [currentMovie.genre.toLowerCase()];
  const history = document.getElementById("guessHistory");
  if (genres.includes(input)) {
    history.innerHTML += `<p class="correct">✔ Genre is correct: ${input}</p>`;
  } else {
    history.innerHTML += `<p class="wrong">✘ Wrong genre: ${input}</p>`;
    decreaseCounter();
  }
}
function showCountrySuggestions(value) {
  const suggestions = document.getElementById("countrySuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const countries = [...new Set(movies.map(m => m.country))];
  const filtered = countries.filter(c => c.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(c => {
    const div = document.createElement("div");
    div.textContent = c;
    div.onclick = () => {
      document.getElementById("countryInput").value = c;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkCountry() {
  const input = document.getElementById("countryInput").value.trim().toLowerCase();
  const correct = currentMovie.country.toLowerCase();
  const history = document.getElementById("guessHistory");
  if (input === correct) {
    history.innerHTML += `<p class="correct">✔ Country is correct: ${currentMovie.country}</p>`;
  } else {
    history.innerHTML += `<p class="wrong">✘ Wrong country: ${input}</p>`;
    decreaseCounter();
  }
}
function showDirectorSuggestions(value) {
  const suggestions = document.getElementById("directorSuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const directors = [...new Set(movies.map(m => m.director))];
  const filtered = directors.filter(d => d.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(d => {
    const div = document.createElement("div");
    div.textContent = d;
    div.onclick = () => {
      document.getElementById("directorInput").value = d;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkDirector() {
  const input = document.getElementById("directorInput").value.trim().toLowerCase();
  const correct = currentMovie.director.toLowerCase();
  const history = document.getElementById("guessHistory");
  if (input === correct) {
    history.innerHTML += `<p class="correct">✔ Director is correct: ${currentMovie.director}</p>`;
  } else {
    history.innerHTML += `<p class="wrong">✘ Wrong director: ${input}</p>`;
    decreaseCounter();
  }
}
function showDecadeSuggestions(value) {
  const suggestions = document.getElementById("decadeSuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const decades = ["1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];
  const filtered = decades.filter(d => d.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(d => {
    const div = document.createElement("div");
    div.textContent = d;
    div.onclick = () => {
      document.getElementById("decadeInput").value = d;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkDecade() {
  const input = document.getElementById("decadeInput").value.trim().toLowerCase();
  const correct = currentMovie.decade.toLowerCase();
  const history = document.getElementById("guessHistory");
  if (input === correct) {
    history.innerHTML += `<p class="correct">✔ Decade is correct: ${currentMovie.decade}</p>`;
  } else {
    history.innerHTML += `<p class="wrong">✘ Wrong decade: ${input}</p>`;
    decreaseCounter();
  }
}
function skipToMovieStage() {
  document.getElementById("infoStage").style.display = "none";
  document.getElementById("movieStage").style.display = "block";
}

function showMovieSuggestions(value) {
  const suggestions = document.getElementById("movieSuggestions");
  suggestions.innerHTML = "";
  if (!value) return;
  const titles = movies.map(m => m.title);
  const filtered = titles.filter(t => t.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(t => {
    const div = document.createElement("div");
    div.textContent = t;
    div.onclick = () => {
      document.getElementById("movieInput").value = t;
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(div);
  });
}

function checkMovie() {
  const input = document.getElementById("movieInput").value.trim().toLowerCase();
  const correct = currentMovie.title.toLowerCase();
  const history = document.getElementById("guessHistory");

  if (input === correct) {
    history.innerHTML += `<p class="correct">🎉 Correct! The movie is: ${currentMovie.title}</p>`;
    document.getElementById("result").innerHTML = "";
    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("movieStage").style.display = "none";
  } else {
    movieAttempts--;
    document.getElementById("movieCounter").textContent = movieAttempts;
    history.innerHTML += `<p class="wrong">✘ Wrong movie guess: ${input}</p>`;
    if (movieAttempts <= 0) {
      document.getElementById("result").innerHTML = `<p class="wrong">❌ Game Over! The movie was: ${currentMovie.title}</p>`;
      document.getElementById("restartBtn").style.display = "block";
      document.getElementById("movieStage").style.display = "none";
    } else {
      document.getElementById("result").innerHTML = `<p class="wrong">✘ Wrong movie guess</p>`;
    }
  }
}
function restartGame() {
  startGame();
}
