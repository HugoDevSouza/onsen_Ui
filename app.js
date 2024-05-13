const login = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    if (username === 'admin' && password === 'admin123') {
      // Redirecionar para outra página
      window.location.href = 'home.html';
    } else {
      ons.notification.alert('Combinação incorreta de nome de usuário/senha');
    }
}
