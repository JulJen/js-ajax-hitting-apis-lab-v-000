// your code here

function showRepositories() {

  // tell JavaScript that it's working with JSON
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  // parsing the text into an array of objects

  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  //data attribute to hold the repo name
  document.getElementById('repositories').innerHTML = repoList;
}


function displayRepositories() {
  // creating a new instance of an XMLHttpRequest
  // initiate XHR request
  const req = new XMLHttpRequest();

  // add event listener to our req object, this will be our req object inside our callback function.
  req.addEventListener('load', showRepositories);

  // call open with the HTTP verb GET and the URI for request.
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
