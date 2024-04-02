$('#enter').click(function(){
    if(($('#loginuser').val())=='admin' && ($('#acesspass').val())=='admin'){
        window.location.href = './ficha.php'
    }
    else if(($('#loginuser').val())=='monstro' && ($('#acesspass').val())=='monstro'){
        window.location.href = './fichamonstro.php'
    }
    else{
        window.location.href = './index.php'
        alert('Usuário ou senha incorretos')
    }
})