document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reset-button').addEventListener('click', () => {
        document.getElementById('password').style.display = 'block';
        document.getElementById('submit-password').style.display = 'block';
    });

    document.getElementById('submit-password').addEventListener('click', () => {
        const password = document.getElementById('password').value;
        if (password === 'senha_secreta') { // Substitua 'senha_secreta' pela sua senha real
            localStorage.removeItem('scores');
            localStorage.removeItem('userScore');
            window.location.reload();
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });
});
