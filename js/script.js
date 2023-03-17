//if search bar is in focus, show the search button
//navbar-bar-toggle ID
//search-button ID
var bar = document.getElementById('navbar-bar-toggle');
var search = document.getElementById('search-button');

search.style.display = 'none';

function searchFunc () {
  search.style.display = 'block';
}

function hideButton () {
  search.style.display = 'none';
}