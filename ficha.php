<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <link rel="icon" href="img/icon.png">
        <title>Ficha</title> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <body>
        <?php
            $pers = 'Mauro';
            $nome = 'Teste';
            $agi = 3;
        ?>
        <div id="ficha">
            <div id="player">
                <input type="text" id="pers" placeholder="Personagem" class="editar" readonly value="<?php echo $pers ?>">
                <input type="text" id="jog" placeholder="Jogador" class="editar" readonly value="<?php echo $nome ?>">
                <button id="edit">Editar</button>
            </div><br>
            <div id="atributes">
                <label for="agilidade">AGI:</label>
                <input type="number" id="agilidade" value="<?php echo $agi?>" class="editar" readonly>
                <label for="forca">FOR:</label>
                <input type="number" id="forca" value="1" class="editar" readonly>
                <label for="intelecto">INT:</label>
                <input type="number" id="intelecto" value="1" class="editar" readonly>
                <label for="presenca">PRE:</label>
                <input type="number" id="presenca" value="1" class="editar" readonly>
                <label for="vigor">VIG:</label>
                <input type="number" id="vigor" value="1" class="editar" readonly>
            </div><br>
            <div>
                <select id="origem" class="seletor">
                    <option value=""></option>
                    <option value="academico">Acadêmico</option>
                    <option value="agentesaude">Agente de Saúde</option>
                    <option value="amnesico">Amnésico</option>
                    <option value="artista">Artista</option>
                    <option value="atleta">Atleta</option>
                    <option value="chef">Chef</option>
                    <option value="criminoso">Criminoso</option>
                    <option value="cultiarrep">Cultista Arrependido</option>
                    <option value="desgarrado">Desgarrado</option>
                    <option value="engenheiro">Engenheiro</option>
                    <option value="executivo">Executivo</option>
                    <option value="investigador">Investigador</option>
                    <option value="lutador">Lutador</option>
                    <option value="magnata">Magnata</option>
                    <option value="mercenario">Mercenário</option>
                    <option value="militar">Militar</option>
                    <option value="operario">Operário</option>
                    <option value="policial">Policial</option>
                    <option value="religioso">Religioso</option>
                    <option value="servpubli">Servidor Público</option>
                    <option value="ti">T.I.</option>
                    <option value="teoconsp">Teórico da Conspiração</option>
                    <option value="trabrural">Trabalhador Rural</option>
                    <option value="trambiqueiro">Trambiqueiro</option>
                    <option value="universitario">Universitário</option>
                    <option value="vitima">Vítima</option>
                </select>
                <select id="classe" class="seletor">
                    <option value=""></option>
                    <option value="combatente">Combatente</option>
                    <option value="especialista">Especialista</option>
                    <option value="ocultista">Ocultista</option>
                    <option value="mundano">Mundano</option>
                </select>
                <select id="nex" class="seletor">
                    <option value=""></option>
                    <option value="0">0%</option>
                    <option value="1">5%</option>
                    <option value="2">10%</option>
                    <option value="3">15%</option>
                    <option value="4">20%</option>
                    <option value="5">25%</option>
                    <option value="6">30%</option>
                    <option value="7">35%</option>
                    <option value="8">40%</option>
                    <option value="9">45%</option>
                    <option value="10">50%</option>
                    <option value="11">55%</option>
                    <option value="12">60%</option>
                    <option value="13">65%</option>
                    <option value="14">75%</option>
                    <option value="15">75%</option>
                    <option value="16">80%</option>
                    <option value="17">85%</option>
                    <option value="18">90%</option>
                    <option value="19">95%</option>
                    <option value="20">99%</option>
                </select>
                <input type="number" id="peR" placeholder="PE/r" class="editar" readonly>
                <input type="text" id="desl" placeholder="Deslocamento" class="editar" readonly>
            </div><br>
            <div id="statsdiv">
                <div id="pvdiv">
                    <label class="labelstat">PV:</label><br>
                    <input type="text" id="pv" class="stats" placeholder="PV">
                    <label for="pvmax" class="labelstats">/</label>
                    <input type="number" id="pvmax" class="statsmax editar" placeholder="PV" readonly>
                </div>
                <div id="pediv">
                    <label class="labelstat">PE:</label><br>
                    <input type="text" id="pe" class="stats" placeholder="PE">
                    <label for="pemax" class="labelstats">/</label>
                    <input type="number" id="pemax" class="statsmax editar" placeholder="PE" readonly>
                </div><br><br>
                <div id="sandiv">
                    <label class="labelstat">SAN:</label><br>
                    <input type="text" id="san"  class="stats" placeholder="SAN">
                    <label for="sanmax" class="labelstats">/</label>
                    <input type="number" id="sanmax" class="statsmax editar" placeholder="SAN" readonly>
                </div>
            </div><br>
            <div id="defesa">
                <label for="deftotal">Defesa:</label>
                <input type="text" id="deftotal" class="editar" readonly>
                = 10 + 
                <input type="text" id="defagi" readonly>
                +
                <label for="equip">Equip:</label>
                <input type="text" id="equip" value="0" class="editar" readonly>
                +
                <label for="outros">Outros:</label>
                <input type="text" id="outros" value="0" class="editar" readonly>
                <button id="calcdef">Calcular</button>
            </div><br>
            <div id="esqbloq">
                <label for="esq">Esquiva:</label>
                <input type="text" id="esq" class="editar" readonly>
                <label for="bloq">Bloqueio:</label>
                <input type="text" id="bloq" class="editar" readonly>
                <button id="bloqesq">Calcular</button>
            </div>
        </div><br>
        <div id="pericias">
            <h3 id="peresc">Pericias a escolher: 0</h3>
            <button id="rollacro" class="btnPeri">Acrobacia+</button>
            <select class="expertise seletor" id="acro">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceacro" class="editar rollperi" readonly>
            <input type="text" id="resacro" class="editar resrollperi" readonly><br>
            <button id="rollades" class="btnPeri">Adestramento*</button>
            <select class="expertise seletor" id=ades>
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceades" class="editar rollperi" readonly>
            <input type="text" id="resades" class="editar resrollperi" readonly><br>
            <button id="rollarte" class="btnPeri">Artes*</button>
            <select class="expertise seletor" id="arte">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicearte" class="editar rollperi" readonly>
            <input type="text" id="resarte" class="editar resrollperi" readonly><br>
            <button id="rollatle" class="btnPeri">Atletismo</button>
            <select class="expertise seletor" id="atle">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceatle" class="editar rollperi" readonly>
            <input type="text" id="resatle" class="editar resrollperi" readonly><br>
            <button id="rollatua" class="btnPeri">Atualidades</button>
            <select class="expertise seletor" id="atua">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceatua" class="editar rollperi" readonly>
            <input type="text" id="resatua" class="editar resrollperi" readonly><br>
            <button id="rollcien" class="btnPeri">Ciências*</button>
            <select class="expertise seletor" id="cien">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicecien" class="editar rollperi" readonly>
            <input type="text" id="rescien" class="editar resrollperi" readonly><br>
            <button id="rollcrim" class="btnPeri">Crime*+</button>
            <select class="expertise seletor" id="crim">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicecrim" class="editar rollperi" readonly>
            <input type="text" id="rescrim" class="editar resrollperi" readonly><br>
            <button id="rolldipl" class="btnPeri">Diplomacia</button>
            <select class="expertise seletor" id="dipl">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicedipl" class="editar rollperi" readonly>
            <input type="text" id="resdipl" class="editar resrollperi" readonly><br>
            <button id="rollenga" class="btnPeri">Enganação</button>
            <select class="expertise seletor" id="enga">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceenga" class="editar rollperi" readonly>
            <input type="text" id="resenga" class="editar resrollperi" readonly><br>
            <button id="rollfort" class="btnPeri">Fortitude</button>
            <select class="expertise seletor" id="fort">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicefort" class="editar rollperi" readonly>
            <input type="text" id="resfort" class="editar resrollperi" readonly><br>
            <button id="rollfurt" class="btnPeri">Furtividade+</button>
            <select class="expertise seletor" id="furt">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicefurt" class="editar rollperi" readonly>
            <input type="text" id="resfurt" class="editar resrollperi" readonly><br>
            <button id="rollinic" class="btnPeri">Iniciativa</button>
            <select class="expertise seletor" id="inic">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceinic" class="editar rollperi" readonly>
            <input type="text" id="resinic" class="editar resrollperi" readonly><br>
            <button id="rollinti" class="btnPeri">Intimidação</button>
            <select class="expertise seletor" id="inti">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceinti" class="editar rollperi" readonly>
            <input type="text" id="resinti" class="editar resrollperi" readonly><br>
            <button id="rollintu" class="btnPeri">Intuição</button>
            <select class="expertise seletor" id="intu">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceintu" class="editar rollperi" readonly>
            <input type="text" id="resintu" class="editar resrollperi" readonly><br>
            <button id="rollinve" class="btnPeri">Investigação</button>
            <select class="expertise seletor" id="inve">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceinve" class="editar rollperi" readonly>
            <input type="text" id="resinve" class="editar resrollperi" readonly><br>
            <button id="rollluta" class="btnPeri">Luta</button>
            <select class="expertise seletor" id="luta">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceluta" class="editar rollperi" readonly>
            <input type="text" id="resluta" class="editar resrollperi" readonly><br>
            <button id="rollmedi" class="btnPeri">Medicina</button>
            <select class="expertise seletor" id="medi">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicemedi" class="editar rollperi" readonly>
            <input type="text" id="resmedi" class="editar resrollperi" readonly><br>
            <button id="rollocul" class="btnPeri">Ocultismo*</button>
            <select class="expertise seletor" id="ocul">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceocul" class="editar rollperi" readonly>
            <input type="text" id="resocul" class="editar resrollperi" readonly><br>
            <button id="rollperc" class="btnPeri">Percepção</button>
            <select class="expertise seletor" id="perc">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceperc" class="editar rollperi" readonly>
            <input type="text" id="resperc" class="editar resrollperi" readonly><br>
            <button id="rollpilo" class="btnPeri">Pilotagem*</button>
            <select class="expertise seletor" id="pilo">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicepilo" class="editar rollperi" readonly>
            <input type="text" id="respilo" class="editar resrollperi" readonly><br>
            <button id="rollpont" class="btnPeri">Pontaria*</button>
            <select class="expertise seletor" id="pont">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicepont" class="editar rollperi" readonly>
            <input type="text" id="respont" class="editar resrollperi" readonly><br>
            <button id="rollprof" class="btnPeri">Profissão*</button>
            <select class="expertise seletor" id="prof">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="diceprof" class="editar rollperi" readonly>
            <input type="text" id="resprof" class="editar resrollperi" readonly><br>
            <button id="rollrefl" class="btnPeri">Reflexos</button>
            <select class="expertise seletor" id="refl">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicerefl" class="editar rollperi" readonly>
            <input type="text" id="resrefl" class="editar resrollperi" readonly><br>
            <button id="rollreli" class="btnPeri">Religião*</button>
            <select class="expertise seletor" id="reli">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicereli" class="editar rollperi" readonly>
            <input type="text" id="resreli" class="editar resrollperi" readonly><br>
            <button id="rollsobr" class="btnPeri">Sobrevivência</button>
            <select class="expertise seletor" id="sobr">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicesobr" class="editar rollperi" readonly>
            <input type="text" id="ressobr" class="editar resrollperi" readonly><br>
            <button id="rolltati" class="btnPeri">Tática*</button>
            <select class="expertise seletor" id="tati">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicetati" class="editar rollperi" readonly>
            <input type="text" id="restati" class="editar resrollperi" readonly><br>
            <button id="rolltecn" class="btnPeri">Tecnologia*</button>
            <select class="expertise seletor" id="tecn">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicetecn" class="editar rollperi" readonly>
            <input type="text" id="restecn" class="editar resrollperi" readonly><br>
            <button id="rollvont" class="btnPeri">Vontade</button>
            <select class="expertise seletor" id="vont">
                <option value=""></option>
                <option value="treinado">Treinado</option>
                <option value="veterano">Veterano</option>
                <option value="expert">Expert</option>
            </select>
            <input type="text" id="dicevont" class="editar rollperi" readonly>
            <input type="text" id="resvont" class="editar resrollperi" readonly><br>
            + Penalidade de carga     * Somente treinada
        </div><br>
        <button id="btnataques">Ataques</button>
        <div id="ataques">
            <!-- <button class="btnar" id="adcataque">Adicionar Ataque</button>
            <button class="btnar" id="rmvataque">Remover Ataque</button><br><br> -->
            <div class="ataque" id="ataque">
                <label class="lblataques">Ataque</label>
                <label class="lblataques">Teste</label>
                <label class="lblataques">Dano</label>
                <label class="lblataques">Critico</label>
                <label class="lblataques">Alcance</label>
                <label class="lblataques">Especial</label><br>
                <div class="ataque" id="ataque1">
                    <input type="text" id="atk1" class="arma editar" placeholder="Arma" readOnly>
                    <input type="text" id="teste1" class="teste editar" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly>
                    <input type="text" id="dano1" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly>
                    <input type="text" id="crit1" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly>
                    <input type="text" id="alcance1" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly>
                    <input type="text" id="espec1" class="espec editar" placeholder="Especial" readOnly>
                </div>
                <div class="ataque" id="ataque2">
                    <input type="text" id="atk2" class="arma editar" placeholder="Arma" readOnly>
                    <input type="text" id="teste2" class="teste editar" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly>
                    <input type="text" id="dano2" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly>
                    <input type="text" id="crit2" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly>
                    <input type="text" id="alcance2" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly>
                    <input type="text" id="espec2" class="espec editar" placeholder="Especial" readOnly>
                </div>
                <div class="ataque" id="ataque3">
                    <input type="text" id="atk3" class="arma editar" placeholder="Arma" readOnly>
                    <input type="text" id="teste3" class="teste editar" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly>
                    <input type="text" id="dano3" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly>
                    <input type="text" id="crit3" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly>
                    <input type="text" id="alcance3" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly>
                    <input type="text" id="espec3" class="espec editar" placeholder="Especial" readOnly>
                </div>
                <div class="ataque" id="ataque4">
                    <input type="text" id="atk4" class="arma editar" placeholder="Arma" readOnly>
                    <input type="text" id="teste4" class="teste editar" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly>
                    <input type="text" id="dano4" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly>
                    <input type="text" id="crit4" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly>
                    <input type="text" id="alcance4" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly>
                    <input type="text" id="espec4" class="espec editar" placeholder="Especial" readOnly>
                </div>
                <div class="ataque" id="ataque5">
                    <input type="text" id="atk5" class="arma editar" placeholder="Arma" readOnly>
                    <input type="text" id="teste5" class="teste editar" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly>
                    <input type="text" id="dano5" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly>
                    <input type="text" id="crit5" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly>
                    <input type="text" id="alcance5" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly>
                    <input type="text" id="espec5" class="espec editar" placeholder="Especial" readOnly>
                </div>
                <h2 id="resultatk"></h2>
            </div>
        </div><br><br>
        <button id="btnrituais">Rituais</button>
        <div id="rituais"><br>
            <input type="text" id="btnritual1" class="btnrit editar" readonly value="Ritual"><br><br>
            <div id="ritual1">
            <input type="text" id="gastope1" class="inprit editar" readonly placeholder="PE">
                <input type="text" id="elemento1" class="inprit editar" readonly placeholder="Elemento">
                <input type="text" id="exec1" class="inprit editar" readonly placeholder="Execução">
                <input type="text" id="alcancerit1" class="inprit editar" readonly placeholder="Alcance">
                <input type="text" id="alvo1" class="inprit editar" readonly placeholder="Alvo">
                <input type="text" id="duracao1" class="inprit editar" readonly placeholder="Duração">
                <input type="text" id="resist1" class="inprit editar" readonly placeholder="Resistência"><br>
                <textarea id="desc1" class="descrit editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea><br>
                <textarea id="disc1" class="descrit editar" placeholder="Discente" cols="95" rows="3" readonly></textarea><br>
                <textarea id="verd1" class="descrit editar" placeholder="Verdadeiro" cols="95" rows="3" readonly></textarea><br><br><br><br><br>
            </div>
            <input type="text" id="btnritual2" class="btnrit editar" readonly value="Ritual"><br><br>
            <div id="ritual2">
                <input type="text" id="gastope2" class="inprit editar" readonly placeholder="PE">
                <input type="text" id="elemento2" class="inprit editar" readonly placeholder="Elemento">
                <input type="text" id="exec2" class="inprit editar" readonly placeholder="Execução">
                <input type="text" id="alcancerit2" class="inprit editar" readonly placeholder="Alcance">
                <input type="text" id="alvo2" class="inprit editar" readonly placeholder="Alvo">
                <input type="text" id="duracao2" class="inprit editar" readonly placeholder="Duração">
                <input type="text" id="resist2" class="inprit editar" readonly placeholder="Resistência"><br>
                <textarea id="desc1" class="descrit editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea><br>
                <textarea id="disc1" class="descrit editar" placeholder="Discente" cols="95" rows="3" readonly></textarea><br>
                <textarea id="verd1" class="descrit editar" placeholder="Verdadeiro" cols="95" rows="3" readonly></textarea><br><br><br><br><br>
            </div>
            <input type="text" id="btnritual3" class="btnrit editar" readonly value="Ritual"><br><br>
            <div id="ritual3">
                <input type="text" id="gastope3" class="inprit editar" readonly placeholder="PE">
                <input type="text" id="elemento3" class="inprit editar" readonly placeholder="Elemento">
                <input type="text" id="exec3" class="inprit editar" readonly placeholder="Execução">
                <input type="text" id="alcancerit3" class="inprit editar" readonly placeholder="Alcance">
                <input type="text" id="alvo3" class="inprit editar" readonly placeholder="Alvo">
                <input type="text" id="duracao3" class="inprit editar" readonly placeholder="Duração">
                <input type="text" id="resist3" class="inprit editar" readonly placeholder="Resistência"><br>
                <textarea id="desc1" class="descrit editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea><br>
                <textarea id="disc1" class="descrit editar" placeholder="Discente" cols="95" rows="3" readonly></textarea><br>
                <textarea id="verd1" class="descrit editar" placeholder="Verdadeiro" cols="95" rows="3" readonly></textarea>
            </div>
        </div><br><br>
        <button id="btninventario">Inventário</button>
        <div id="inventario"><br>
            <label for="ptsprest">Pontos de prestigio:</label>
            <input type="text" id="ptsprest" class="editar" readonly>
            <label for="patentes">Patente:</label>
            <select id="patentes" class="seletor">
                <option value=""></option>
                <option value="recruta">Recruta</option>
                <option value="operador">Operador</option>
                <option value="agntespec">Agente Especial</option>
                <option value="oficop">Oficial de Operações</option>
                <option value="agntelit">Agente de Elite</option>
            </select><br><br>
            <label for="categ1">Limite de Itens:</label>
            <input type="text" id="categ1" class="editar categ" placeholder="I" readonly>
            <input type="text" id="categ2" class="editar categ" placeholder="II" readonly>
            <input type="text" id="categ3" class="editar categ" placeholder="III" readonly>
            <input type="text" id="categ4" class="editar categ" placeholder="IV" readonly>
            <label for="creditos">Limite de Crédito:</label>
            <select id="creditos" class="seletor">
                <option value=""></option>
                <option value="baixo">Baixo</option>
                <option value="medio">Médio</option>
                <option value="alto">Alto</option>
                <option value="ilimitado">Ilimitado</option>
            </select>
            <label for="carga">Carga Máxima</label>
            <input type="text" id="carga" readonly><br><br>
            <div id="itens">
                <div id="itensesq">
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                </div>
                <div id="itensdir">
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                    <div>
                        <input readOnly type="text" class="editar item">
                        <input readOnly type="text" class="editar categoria">
                        <input readOnly type="text" class="editar espaco">
                    </div>
                </div>
            </div>
            <!-- <div class="item">
                <input type="text" id="btnitem1" class="btnitem editar" readonly value="Item">
                <textarea id="item1" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div> -->
        </div><br><br>
        <button id="btnpoderes">Poderes</button>
        <div id="poderes"><br>
            <div class="poder">
                <input type="text" id="btnpoder1" class="btnpoder editar" readonly value="Poder">
                <textarea id="poder1" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
            <div class="poder">
                <input type="text" id="btnpoder2" class="btnpoder editar" readonly value="Poder">
                <textarea id="poder2" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
            <div class="poder">
                <input type="text" id="btnpoder3" class="btnpoder editar" readonly value="Poder">
                <textarea id="poder3" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
        </div><br><br>
        <button id="btnhabilidades">Habilidades</button>
        <div id="habilidades"><br>
            <div class="habilidade">
                <input type="text" id="btnhabilidade1" class="btnhabilidade editar" readonly value="Habilidade">
                <textarea id="habilidade1" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
            <div class="habilidade">
                <input type="text" id="btnhabilidade2" class="btnhabilidade editar" readonly value="Habilidade">
                <textarea id="habilidade2" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
            <div class="habilidade">
                <input type="text" id="btnhabilidade3" class="btnhabilidade editar" readonly value="Habilidade">
                <textarea id="habilidade3" class="desc editar" placeholder="Descrição" cols="95" rows="3" readonly></textarea>
            </div><br>
        </div>
        <div id="dices">
            <button class="dice" id="d4">D4</button>
            <button class="dice" id="d6">D6</button>
            <button class="dice" id="d8">D8</button>
            <button class="dice" id="d10">D10</button>
            <button class="dice" id="d12">D12</button>
            <button class="dice" id="d20">D20</button>
            <button class="dice" id="d100">D100</button>
            <input type="number" id="qntdados" placeholder="Qnt">
            <input type="number" id="mod" placeholder="Mod">
            <button class="dice" id="clear">Limpar resultado</button>
            <h1 id="resultado"></h1>
        </div>
    </body>
    <script src="js/script.js"></script>
</html>