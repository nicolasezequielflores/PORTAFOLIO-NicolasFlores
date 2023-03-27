const mas = document.getElementById('mas');
const contenido = document.getElementById('mas-sec');

mas.addEventListener('click', function(){
    if(contenido.style.display === 'none'){
        contenido.style.display = 'block';
    }else{
        contenido.style.display = 'none';
    }
})