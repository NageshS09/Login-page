function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Please enter username and password');
    } else if (username === 'PI' && password === 'PI@123') {
      alert('Login successful');
      window.location.href = 'https://google.com'; // Replace this with the URL of your new webpage
    } else {
      alert('Invalid username or password');
    }
    
  }
  
