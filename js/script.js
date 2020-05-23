// Fetch é a forma "pura" de acessar apis com o JS. A bib Axios faz a mesma coisa, porém de forma mais clara

window.addEventListener('load', function(){
    fetch('https://api.github.com/users/erikamvn').then(res => {
        res.json().then(data => {
            showData(data)
        });
    });
});

function showData(data){
    const user = document.querySelector('.user');
    user.textContent = data.login + ' ' + data.name

}

