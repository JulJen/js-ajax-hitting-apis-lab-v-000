// your code here

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
