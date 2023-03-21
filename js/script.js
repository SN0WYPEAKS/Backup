//if search bar is in focus, show the search button
//navbar-bar-toggle ID
//search-button ID
const bar = document.getElementById('navbar-bar-toggle');
const search = document.getElementById('search-button');
const productFilter = document.getElementById('product-filter');
const filter = document.getElementById('filter-button');
const closeFilter = document.getElementById('close-filter');
const body = document.getElementById('body');
const action = document.getElementById('action-button');

search.style.display = 'none';

function searchFunc () {
  search.style.display = 'block';
}

function hideButton () {
  search.style.display = 'none';
}

//inventory search function
function invSearch () {}

//filter moves page when open
function filterMove () {
  body.style.marginLeft = '300px';
  filter.style.display = 'none';
  productFilter.style.marginLeft = '-260px';
}

//moves page back when filter is closed
function moveBack () {
  body.style.marginLeft = '40px';
  filter.style.display = 'block';
  productFilter.style.marginLeft = '0px';
}