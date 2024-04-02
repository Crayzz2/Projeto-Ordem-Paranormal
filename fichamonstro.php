<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/monstros.css">
        <link rel="icon" href="img/icon.png">
        <title>Ficha Monstros</title> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <body>
        <div id="inic">
            <button id="btninic">INICIATIVAS</button>
            <div id="iniciativas">
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
                <input type="text" class="player">
                <input type="text" class="iniciativa"><br>
            </div>
        </div>
        <div id="divmonstros">
        </div>
        <div id="addmonst">
            <select id="monstros">
                <option value="" hidden></option>
                <option value="" disabled>Ameaças Paranormais</option>
                <option value="aberracao_sangue">Aberração de Sangue</option>
                <option value="aniquilacao">Aniquilação</option>
                <option value="carente">Carente</option>
                <option value="zumbi_sangue">Zumbi de Sangue</option>
                <option value=""></option>
                <option value="" disabled></option>
                <option value="" disabled>Ameaças da Realidade</option>
                <option value="rene">Rene Soffiate</option>
                <option value="quinn">Quinn</option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
                <option value="_"></option>
            </select>
            <button id="add">Adicionar</button>
            <button id="delete">Remover</button>
        </div>
    </body>
    <script src="js/monstros.js"></script>
</html>