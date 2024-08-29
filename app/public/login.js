document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        response.text().then(text => {
          document.getElementById('message').textContent = text;
        });
      }
    })
    .catch(error => {
      document.getElementById('message').textContent = 'Erreur de connexion';
    });
  });
  