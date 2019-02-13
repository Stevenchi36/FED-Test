let articleBTN = document.getElementById('article-button');
let eventBTN = document.getElementById('event-button');
let articles = document.getElementById('articles');
let events = document.getElementById('events');

eventBTN.addEventListener('click', function(){
  articleBTN.classList.remove('active-button');
  eventBTN.classList.add('active-button');
  articles.style.display = 'none';
  events.style.display = 'flex';
});

articleBTN.addEventListener('click', function(){
  eventBTN.classList.remove('active-button');
  articleBTN.classList.add('active-button');
  events.style.display = 'none';
  articles.style.display = 'flex';
});