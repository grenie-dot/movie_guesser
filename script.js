let attempts = 10;
let currentMovie;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function initGame() {
  currentMovie = movies[Math.floor(Math.random() * movies.length)];
  console.log("Загаданий фільм:", currentMovie.title);
}

function flipRectangle(id, text) {
  const rect = document.getElementById(id);
  rect.classList.add('flipped');
  const back = rect.querySelector('.back');
  back.textContent = text;
  back.classList.add('success');
}

// Автопідказка (один елемент, ширина як у вводу)
const input = document.getElementById('guessInput');
const suggestionsBox = document.createElement('div');
suggestionsBox.className = 'suggestions';
document.getElementById('guessForm').after(suggestionsBox); // під формою

input.addEventListener('input', () => {
  const val = input.value.trim().toLowerCase();
  if (val.length < 3) {
    suggestionsBox.style.display = 'none';
    return;
  }

  let match = null;
  for (const m of movies) {
    if (m.title.toLowerCase().startsWith(val)) { match = m.title; break; }
    if (m.country.toLowerCase().startsWith(val)) { match = m.country; break; }
    if (m.year.startsWith(val)) { match = m.year; break; }
    if (m.director.toLowerCase().startsWith(val)) { match = m.director; break; }
    const actor = m.actors.find(a => a.toLowerCase().startsWith(val));
    if (actor) { match = actor; break; }
    const genre = m.genre.find(g => g.toLowerCase().startsWith(val));
    if (genre) { match = genre; break; }
  }

  if (match) {
    suggestionsBox.innerHTML = `<div>${match}</div>`;
    suggestionsBox.style.display = 'block';
  } else {
    suggestionsBox.style.display = 'none';
  }
});

suggestionsBox.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    input.value = e.target.textContent;
    suggestionsBox.style.display = 'none';
  }
});
document.getElementById('guessForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (attempts <= 0) return;

  const guess = input.value.trim().toLowerCase();
  attempts--;
  document.getElementById('attempts').textContent = attempts;

  let found = false;
  const result = document.getElementById('result');

  if (guess === currentMovie.title.toLowerCase()) {
    flipRectangle('rect-country', currentMovie.country);
    flipRectangle('rect-year', currentMovie.year);
    flipRectangle('rect-director', currentMovie.director);
    flipRectangle('rect-actors', 'Актори');	
    flipRectangle('rect-genre', currentMovie.genre.join(', '));
    attempts = 0;
    return;
  }

  if (guess === currentMovie.country.toLowerCase()) {
    flipRectangle('rect-country', currentMovie.country);
   
    found = true;
  }

  if (guess === currentMovie.year) {
    flipRectangle('rect-year', currentMovie.year);
  
    found = true;
  }


  if (guess === currentMovie.director.toLowerCase()) {
    flipRectangle('rect-director', currentMovie.director);
    
    found = true;
  }

 // Актори
else if (currentMovie.actors.some(a => a.toLowerCase() === guess)) {
  const rect = document.getElementById('rect-actors');
  const back = rect.querySelector('.back');
  rect.classList.add('flipped');

  const matchedActor = currentMovie.actors.find(a => a.toLowerCase() === guess);
  back.textContent = matchedActor;

  back.classList.remove('wrong');
  back.classList.add('success'); // фарбуємо картку зеленим


  found = true;
} 



  if (currentMovie.genre.some(g => g.toLowerCase() === guess)) {
    flipRectangle('rect-genre', currentMovie.genre.join(', '));
   
    found = true;
  }


  if (!found && attempts === 0) {
    result.textContent = "😢 Спроби закінчились. Фільм був: " + currentMovie.title;
  }

  input.value = "";
});

initGame();
