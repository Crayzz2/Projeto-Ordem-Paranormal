id=1
$('#add').click(function(){
    if($('#monstros option:selected').val()==''){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
        <div class="container1">
            <div class="subcontainer1">
                <img class="foto" src="img/"><br>
                Ameaça `+id+`
            </div>
            <div class="subcontainer2">
                <div class="stats">
                    <label for="">Nome:</label>
                    <input type="text" class="nome" value="">
                    <label for="">VD:</label>
                    <input type="text" class="vd" value="">
                    <label for="">Tamanho:</label>
                    <input type="text" class="tam" value=""><br>
                    <label for="">Elemento:</label>
                    <input type="text" class="elemento" value="">
                    <label for="">Elementos complementares:</label>
                    <input type="text" class="elemento2" value=""><br>
                    <label for="">PV:</label>
                    <input type="text" class="def" value="">
                    <label for="">Machucado:</label>
                    <input type="text" class="def" value="">
                    <label for="">Deslocamento:</label>
                    <input type="text" class="def" value=""><br>
                    <label for="" class="res_vul">Resistências:</label>
                    <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea>
                    <label for="" class="res_vul">Vulnerabilidades:</label>
                    <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea><br>
                    <label for="">PRESENÇA PERTURBADORA</label><br>
                    <label for="">NEX:</label>
                    <input type="text" class="pres_pert" value="">
                    <label for="">DT:</label>
                    <input type="text" class="pres_pert" value="">
                    <label for="">Dano:</label>
                    <input type="text" class="pres_pertu" value=""><br>
                    <label for="">SENTIDOS:</label><br>
                    <label for="">Percepção às cegas:</label>
                    <input type="checkbox" class="percep_cega">
                    <label for="">Percepção:</label>
                    <input type="text" class="sent" value="">
                    <label for="">Iniciativa:</label>
                    <input type="text" class="sent" value=""><br>
                    <label for="">DEFESA:</label>
                    <input type="text" class="def" value=""><br>
                    <label for="">Fortitude:</label>
                    <input type="text" class="def" value="">
                    <label for="">Reflexos:</label>
                    <input type="text" class="def" value="">
                    <label for="">Vontade:</label>
                    <input type="text" class="def" value=""><br>
                    <label for="">AGI:</label>
                    <input type="number" class="atrib" value="">
                    <label for="">FOR:</label>
                    <input type="number" class="atrib" value="">
                    <label for="">INT:</label>
                    <input type="number" class="atrib" value="">
                    <label for="">PRE:</label>
                    <input type="number" class="atrib" value="">
                    <label for="">VIG:</label>
                    <input type="number" class="atrib" value=""><br>
                    <label>Perícias:</label><br>
                    <input type="text" class="peri">
                    <input type="text" class="diceperi">
                    <input type="text" class="peri">
                    <input type="text" class="diceperi">
                    <input type="text" class="peri">
                    <input type="text" class="diceperi">
                </div>
            </div>
        </div>
        <div class="container2">
            <div class="subcontainer3">
                <div class="caract">Descrição:
                <textarea class="ataquetext" cols="78" rows="16">

                </textarea>
                </div><br>
                <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16"></textarea></div>
            </div>
            <div class="subcontainer4">
                <div class="ataque">
                Ações:
                <textarea class="ataquetext" cols="78" rows="33">

                </textarea>
                </div>
            </div>
        </div>
    </div>`)
    }
    else if($('#monstros option:selected').val()=='_'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
                        <div class="container1">
                            <div class="subcontainer1">
                                <img class="foto" src="img/"><br>
                                Ameaça `+id+`
                            </div>
                            <div class="subcontainer2">
                                <div class="stats">
                                    <label for="">Nome:</label>
                                    <input type="text" class="nome" value="">
                                    <label for="">VD:</label>
                                    <input type="text" class="vd" value="">
                                    <label for="">Tamanho:</label>
                                    <input type="text" class="tam" value=""><br>
                                    <label for="">PV:</label>
                                    <input type="text" class="def" value="">
                                    <label for="">Machucado:</label>
                                    <input type="text" class="def" value="">
                                    <label for="">Deslocamento:</label>
                                    <input type="text" class="def" value=""><br>
                                    <label for="" class="res_vul">Resistências:</label>
                                    <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea><br>
                                    <label for="">SENTIDOS:</label><br>
                                    <label for="">Percepção:</label>
                                    <input type="text" class="sent" value="">
                                    <label for="">Iniciativa:</label>
                                    <input type="text" class="sent" value=""><br>
                                    <label for="">DEFESA:</label>
                                    <input type="text" class="def" value=""><br>
                                    <label for="">Fortitude:</label>
                                    <input type="text" class="def" value="">
                                    <label for="">Reflexos:</label>
                                    <input type="text" class="def" value="">
                                    <label for="">Vontade:</label>
                                    <input type="text" class="def" value=""><br>
                                    <label for="">AGI:</label>
                                    <input type="number" class="atrib" value="">
                                    <label for="">FOR:</label>
                                    <input type="number" class="atrib" value="">
                                    <label for="">INT:</label>
                                    <input type="number" class="atrib" value="">
                                    <label for="">PRE:</label>
                                    <input type="number" class="atrib" value="">
                                    <label for="">VIG:</label>
                                    <input type="number" class="atrib" value=""><br>
                                    <label>Perícias:</label><br>
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                    <input type="text" class="peri">
                                    <input type="text" class="diceperi">
                                </div>
                            </div>
                        </div>
                        <div class="container2">
                            <div class="subcontainer3">
                                <div class="caract">Descrição:
                                <textarea class="ataquetext" cols="78" rows="16">
                
                                </textarea>
                                </div><br>
                                <div class="loot">Habilidades / Rituais:<textarea class="ataquetext" cols="78" rows="16"></textarea></div>
                            </div>
                            <div class="subcontainer4">
                                <div class="ataque">
                                Ações:
                                <textarea class="ataquetext" cols="78" rows="33">
                
                                </textarea>
                                </div>
                            </div>
                        </div>
                    </div>`)
        }
    else if($('#monstros option:selected').val()=='aberracao_sangue'){
        $('#divmonstros').append(`
        <div id="monstro`+id+`" class="monstro">
                <div class="container1">
                    <div class="subcontainer1">
                        <img class="foto" src="img/aberracao_sangue.png"><br>
                        Ameaça `+id+`
                    </div>
                    <div class="subcontainer2">
                        <div class="stats">
                            <label for="">Nome:</label>
                            <input type="text" class="nome" value="Aberração de Sangue">
                            <label for="">VD:</label>
                            <input type="text" class="vd" value="40">
                            <label for="">Tamanho:</label>
                            <input type="text" class="tam" value="Grande"><br>
                            <label for="">Elemento:</label>
                            <input type="text" class="elemento" value="Sangue">
                            <label for="">Elementos complementares:</label>
                            <input type="text" class="elemento2" value=""><br>
                            <label for="">PV:</label>
                            <input type="text" class="def" value="70">
                            <label for="">Machucado:</label>
                            <input type="text" class="def" value="35">
                            <label for="">Deslocamento:</label>
                            <input type="text" class="def" value="9m"><br>
                            <label for="" class="res_vul">Resistências:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Balístico, impacto, perfuração 5. Sangue 10</textarea>
                            <label for="" class="res_vul">Vulnerabilidades:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Morte</textarea><br>
                            <label for="">PRESENÇA PERTURBADORA</label><br>
                            <label for="">NEX:</label>
                            <input type="text" class="pres_pert" value="30%">
                            <label for="">DT:</label>
                            <input type="text" class="pres_pert" value="15">
                            <label for="">Dano:</label>
                            <input type="text" class="pres_pertu" value="3d6 Mental"><br>
                            <label for="">SENTIDOS:</label><br>
                            <label for="">Percepção às cegas:</label>
                            <input type="checkbox" class="percep_cega" checked>
                            <label for="">Percepção:</label>
                            <input type="text" class="sent" value="1d20+5">
                            <label for="">Iniciativa:</label>
                            <input type="text" class="sent" value="1d20"><br>
                            <label for="">DEFESA:</label>
                            <input type="text" class="def" value="19"><br>
                            <label for="">Fortitude:</label>
                            <input type="text" class="def" value="3d20+10">
                            <label for="">Reflexos:</label>
                            <input type="text" class="def" value="1d20">
                            <label for="">Vontade:</label>
                            <input type="text" class="def" value="1d20"><br>
                            <label for="">AGI:</label>
                            <input type="number" class="atrib" value="1">
                            <label for="">FOR:</label>
                            <input type="number" class="atrib" value="3">
                            <label for="">INT:</label>
                            <input type="number" class="atrib" value="0">
                            <label for="">PRE:</label>
                            <input type="number" class="atrib" value="1">
                            <label for="">VIG:</label>
                            <input type="number" class="atrib" value="3"><br>
                            <label>Perícias:</label><br>
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="subcontainer3">
                        <div class="caract">Descrição:<textarea class="ataquetext" cols="78" rows="16">Os corpos tomaram uma aparência deformada, inchada e irreconhecível, com a pele completamente vermelha, seus olhos comidos, suas quatro pernas e quatro braços se movimentando agressivamente buscando agarrar tudo ao seu redor e uma enorme abertura se assemelhando a uma boca circular com incontáveis dentes se abrindo no ponto onde seus estômagos estavam costurados. A aberração de carne pode chegar a até dois metros e vinte de altura e é extremamente pesada. Dificilmente um alvo que for agarrado por seus braços enormes e abocanhado pela ruptura sairá inteiro para contar a história.
                        </textarea>
                        </div><br>
                        <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16"></textarea></div>
                    </div>
                    <div class="subcontainer4">
                        <div class="ataque">
                        Ações:
                        <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR
        PANCADA Corpo a corpo x2
        TESTE 3D20+10 | DANO 2d6+6 Impacto
    
REAÇÃO | AGARRÃO
    Se a aberração de carne acertar um ataque de pancada, ela pode tentar agarrar o alvo (teste 3D20+15). Ela pode manter até dois personagens agarrados por vez.
    
MOVIMENTO | ABOCANHAR
    A aberração de sangue leva até dois personagens agarrados para dentro de sua boca central, que são abocanhados e continuam agarrados. Quando é abocanhado, e no início de cada turno da aberração em que continuar agarrado desta forma, o personagem sofre 3d6 pontos de dano de Perfuração (Fortitude DT 15 reduz à metade). Qualquer personagem adjacente a aberração de sangue pode gastar uma ação padrão para fazer um teste de Atletismo (DT 15) para tentar tirar outro personagem de dentro da boca
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>`)
    }
    else if($('#monstros option:selected').val()=='aniquilacao'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
        <div class="container1">
            <div class="subcontainer1">
                <img class="foto" src="img/aniquilacao.png"><br>
                Ameaça `+id+`
            </div>
            <div class="subcontainer2">
                <div class="stats">
                    <label for="">Nome:</label>
                    <input type="text" class="nome" value="Aniquilação">
                    <label for="">VD:</label>
                    <input type="text" class="vd" value="380">
                    <label for="">Tamanho:</label>
                    <input type="text" class="tam" value="Colossal"><br>
                    <label for="">Elemento:</label>
                    <input type="text" class="elemento" value="Sangue">
                    <label for="">Elementos complementares:</label>
                    <input type="text" class="elemento2" value="MEDO"><br>
                    <label for="">PV:</label>
                    <input type="text" class="def" value="1200">
                    <label for="">Machucado:</label>
                    <input type="text" class="def" value="600">
                    <label for="">Deslocamento:</label>
                    <input type="text" class="def" value="15m"><br>
                    <label for="" class="res_vul">Resistências:</label>
                    <textarea class="descrit" placeholder="" cols="25" rows="2">Dano 50</textarea>
                    <label for="" class="res_vul">Vulnerabilidades:</label>
                    <textarea class="descrit" placeholder="" cols="25" rows="2">Morte</textarea><br>
                    <label for="">PRESENÇA PERTURBADORA</label><br>
                    <label for="">NEX:</label>
                    <input type="text" class="pres_pert" value="">
                    <label for="">DT:</label>
                    <input type="text" class="pres_pert" value="45">
                    <label for="">Dano:</label>
                    <input type="text" class="pres_pertu" value="9d8 Mental"><br>
                    <label for="">SENTIDOS:</label><br>
                    <label for="">Percepção às cegas:</label>
                    <input type="checkbox" class="percep_cega" checked>
                    <label for="">Percepção:</label>
                    <input type="text" class="sent" value="4d20+20">
                    <label for="">Iniciativa:</label>
                    <input type="text" class="sent" value="4d20+20"><br>
                    <label for="">DEFESA:</label>
                    <input type="text" class="def" value="58"><br>
                    <label for="">Fortitude:</label>
                    <input type="text" class="def" value="5d20+30">
                    <label for="">Reflexos:</label>
                    <input type="text" class="def" value="4d20+25">
                    <label for="">Vontade:</label>
                    <input type="text" class="def" value="4d20+20"><br>
                    <label for="">AGI:</label>
                    <input type="number" class="atrib" value="4">
                    <label for="">FOR:</label>
                    <input type="number" class="atrib" value="5">
                    <label for="">INT:</label>
                    <input type="number" class="atrib" value="3">
                    <label for="">PRE:</label>
                    <input type="number" class="atrib" value="4">
                    <label for="">VIG:</label>
                    <input type="number" class="atrib" value="5"><br>
                    <label>Perícias:</label><br>
                    <input type="text" class="peri" value="Atletismo">
                    <input type="text" class="diceperi" value="5d20+20">
                    <input type="text" class="peri">
                    <input type="text" class="diceperi">
                    <input type="text" class="peri">
                    <input type="text" class="diceperi">
                </div>
            </div>
        </div>
        <div class="container2">
            <div class="subcontainer3">
                <div class="caract">Descrição:
                <textarea class="ataquetext" cols="78" rows="16">A maior criatura já registrada na história da Realidade. Apenas relatos de civilizações distantes foram encontrados como evidência desse ser que só pode ser descrito como um apocalipse paranormal. Uma aberração incomparável, uma monstruosidade de tamanho descomunal, com mais de dez metros de altura, esse ser é conhecido por diversos nomes, como “A Besta do Apocalipse”, “O Dragão do Inferno” e “A Aniquilação”. Não se tem informação de qual seria o acontecimento ou ritual aterrorizador capaz de invocar esse ser medonho, apenas registros históricos longínquos das ruínas devoradas que restaram da passagem dessa criatura. Seus enormes braços contém braços menores que se desviam dele, e esses mesmos braços contém mais inúmeros braços que brotam de todo o seu comprimento, se movendo de forma irregular, tentando agarrar qualquer coisa que passe perto da criatura. Ao redor de toda sua forma surgem espinhos alongados, especialmente dos enormes tentáculos que se entrelaçam na parte inferior do corpo, e no centro de seu corpo é possível enxergar uma enorme bocarra com dentes longos e afiados do tamanho de pessoas adultas. As enormes asas são incapazes de erguer o seu colossal corpo, mas ao se agitarem causam um som ensurdecedor que pode ser escutado a quilômetros de distância, anunciando a sua chegada. Não existem registros de alguém que tenha sido capaz de matar ou dissipar a Aniquilação, e lendas perdidas no tempo regurgitam a possibilidade de que ela nunca tenha sido de fato derrotada, e está apenas dormente escondida em algum lugar da Realidade, aguardando pelo seu despertar.
                </textarea>
                </div><br>
                <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16">ENIGMA DE MEDO
O Enigma de Medo da Aniquilação é desconhecido. Quando ele for resolvido, a Aniquilação perde sua resistência a dano e sua habilidade Tempestade de Espinhos.
                </textarea></div>
            </div>
            <div class="subcontainer4">
                <div class="ataque">
                Ações:
                <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR
    GARRAS Corpo a corpo x2
        TESTE 5d20+40 | DANO 4d10+30 Sangue
    TENTÁCULOS ESPINHENTOS Corpo a corpo x2
        TESTE 5d20+40 | DANO 2d12+30 Sangue

PADRÃO | AGREDIR
    DISPARO DE ESPINHOS Distância x3 | MÉDIO
        TESTE 4O+40 | DANO 2d10+20 Sangue

REAÇÃO | AGARRÃO
    Se a aniquilação acertar um ataque de tentáculos espinhentos, ela pode tentar agarrar o alvo (teste 5d20+50). Ela pode manter até quatro personagens agarrados por vez.

REAÇÃO | INSTINTO ANIQUILADOR
    Sempre que um personagem em alcance curto da aniquilação se movimenta mais do que 3m, a aniquilação realiza um ataque de tentáculos espinhentos contra o personagem.

LIVRE | APERTAR E DESTRUIR 
    No início do seu turno, a aniquilação aperta os personagens agarrados com seus tentáculos, causando 40 pontos de dano de Sangue.

MOVIMENTO | BATER AS ASAS
    A aniquilação bate suas asas, criando um som ensurdecedor. Cada personagem em alcance longo sofre 8d6 pontos de dano Mental, é empurrado 6m para longe da aniquilação e fica atordoado por uma rodada (Fortitude DT 40 reduz o dano à metade e evita os efeitos).

MOVIMENTO | ESTRANGULAMENTO FINAL
    A aniquilação se desloca 15m enquanto seus inúmeros braços agarram e estrangulam personagens no caminho. Cada personagem que ficar adjacente a aniquilação durante esse deslocamento fica agarrado e asfixiado (Reflexos DT 30 evita). Um personagem agarrado pode escapar gastando uma ação padrão e passando em um teste de Reflexos (DT 30).

COMPLETA | TEMPESTADE DE ESPINHOS
    A aniquilação lança todos os seus espinhos. Todos os personagens em alcance médio sofrem 20d6+20 pontos de dano de Sangue (Reflexos DT 40 reduz à metade). A aniquilação só pode usar esta habilidade uma vez por cena e, quando a usa, perde seu disparo de espinhos até o fim da cena
                </textarea>
                </div>
            </div>
        </div>
    </div>`)
    }
    else if($('#monstros option:selected').val()=='carente'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
                <div class="container1">
                    <div class="subcontainer1">
                        <img class="foto" src="img/carente.png"><br>
                        Ameaça `+id+`
                    </div>
                    <div class="subcontainer2">
                        <div class="stats">
                            <label for="">Nome:</label>
                            <input type="text" class="nome" value="Carente">
                            <label for="">VD:</label>
                            <input type="text" class="vd" value="300">
                            <label for="">Tamanho:</label>
                            <input type="text" class="tam" value="Grande"><br>
                            <label for="">Elemento:</label>
                            <input type="text" class="elemento" value="Sangue">
                            <label for="">Elementos complementares:</label>
                            <input type="text" class="elemento2" value="Morte"><br>
                            <label for="">PV:</label>
                            <input type="text" class="def" value="700">
                            <label for="">Machucado:</label>
                            <input type="text" class="def" value="350">
                            <label for="">Deslocamento:</label>
                            <input type="text" class="def" value="12m"><br>
                            <label for="" class="res_vul">Resistências:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Balístico, impacto, perfuração e Sangue 20</textarea>
                            <label for="" class="res_vul">Vulnerabilidades:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Morte</textarea><br>
                            <label for="">PRESENÇA PERTURBADORA</label><br>
                            <label for="">NEX:</label>
                            <input type="text" class="pres_pert" value="90%">
                            <label for="">DT:</label>
                            <input type="text" class="pres_pert" value="35">
                            <label for="">Dano:</label>
                            <input type="text" class="pres_pertu" value="7d8 Mental"><br>
                            <label for="">SENTIDOS:</label><br>
                            <label for="">Percepção às cegas:</label>
                            <input type="checkbox" class="percep_cega" checked>
                            <label for="">Percepção:</label>
                            <input type="text" class="sent" value="3d20+10">
                            <label for="">Iniciativa:</label>
                            <input type="text" class="sent" value="4d20+15"><br>
                            <label for="">DEFESA:</label>
                            <input type="text" class="def" value="40"><br>
                            <label for="">Fortitude:</label>
                            <input type="text" class="def" value="4d20+25">
                            <label for="">Reflexos:</label>
                            <input type="text" class="def" value="4d20+25">
                            <label for="">Vontade:</label>
                            <input type="text" class="def" value="3d20+15"><br>
                            <label for="">AGI:</label>
                            <input type="number" class="atrib" value="4">
                            <label for="">FOR:</label>
                            <input type="number" class="atrib" value="4">
                            <label for="">INT:</label>
                            <input type="number" class="atrib" value="2">
                            <label for="">PRE:</label>
                            <input type="number" class="atrib" value="3">
                            <label for="">VIG:</label>
                            <input type="number" class="atrib" value="4"><br>
                            <label>Perícias:</label><br>
                            <input type="text" class="peri" value="Atletismo">
                            <input type="text" class="diceperi" value="4d20+20">
                            <input type="text" class="peri" value="Enganação">
                            <input type="text" class="diceperi" value="3d20+15">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="subcontainer3">
                        <div class="caract">Descrição:
                        <textarea class="ataquetext" cols="78" rows="16">A criatura mais famosa do escritor de terror Daniel Hartmann, o carente é uma manifestação paranormal originada de uma história de terror que se tornou popular no mundo todo. É uma criatura nascida da inveja de um ser que nunca sentiu amor e, por isso, busca devorar os órgãos de pessoas que já foram mães para consumir o amor que nunca recebeu. Apesar de brutal, um carente não tem a habilidade de abrir portas sozinho. Por causa disso, para enganar seus alvos, o carente originalmente toma a forma de uma pequena criança com lacerações em todo o seu rosto vazio, uma coluna entortada e uma camiseta azul com uma estampa infantil, mimicando o som de um menino ou menina doce e perdida batendo em portas buscando por sua mãe. Porém, quando alguém comete o grave erro de atender ao chamado e abrir a porta, de dentro do seu rosto rasteja uma criatura bizarra, grotesca e enorme, com mais de três metros de altura, uma pele gosmenta, garras pontudas e curvadas. É uma forma que se assemelha a um inseto monstruoso enorme, com um grande ferrão saindo de um rosto demoníaco. No topo, como uma espécie de isca, o corpo da criança fica pendurado, conectado a um tipo de tentáculo com garras. Lembre-se, se você ouvir uma criança batendo à porta chamando pela sua mãe, NÃO ABRA A PORTA. Pois depois que a entrada do carente for permitida em um ambiente pela primeira vez, nada mais poderá impedi-lo de devorar aquilo de que carece.

                        </textarea>
                        </div><br>
                        <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16">CARÊNCIA 
    Qualquer ser que já esteve envolvido em uma gestação recebe +D20 em ataques contra o carente, porém o carente também recebe +D20 em ataques contra esse ser.
    
REGENERAÇÃO DE SANGUE
    O carente possui Cura Acelerada 20. Se o carente ficar inconsciente ou sofrer dano de Energia, esta habilidade deixa de funcionar até o fim da cena</textarea></div>
                    </div>
                    <div class="subcontainer4">
                        <div class="ataque">
                        Ações:
                        <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR      
    GARRAS DE SANGUE Corpo a corpo x2
        TESTE 4d20+35 | DANO 2d8+20 Sangue

    FERRÃO DE SANGUE Corpo a corpo
        TESTE 4d20+35 | DANO 2d12+20 Sangue

    TENTÁCULO Corpo a corpo
        TESTE 4d20+35 | DANO 2d8+20 Sangue

MOVIMENTO | FORMA INFANTIL
    O carente se contorce de volta para o corpo da pequena criança para passar em espaços pequenos, se retraindo e expandindo quando achar necessário. Além disso, o carente não consegue abrir a primeira porta para entrar em um lugar. Uma vez que essa porta é aberta e ele deixa de estar na forma infantil, pode ignorar essa restrição.

REAÇÃO | RASTEIRA DE TENTÁCULO
    Uma vez por rodada, quando fica adjacente a dois ou mais seres, o carente faz um ataque de tentáculo contra um deles. Se o carente acertar o ataque, a vítima fica caída e é empurrada 6m para longe dele.

LIVRE | SUGADA MORTAL
    Usando seu ferrão, o carente consegue sugar fluídos e apodrecer os órgãos internos. Um ser atingido pelo ferrão de sangue fica debilitado e enjoado até o fim da cena (Fortitude DT 35 evita).

MOVIMENTO | VOCÊ É MINHA MAMÃE?
    O carente usa a parte que simula o corpo de uma criança para abraçar um ser adjacente, que fica paralisado até ser solto (Reflexos DT 25 evita). O carente pode manter o abraço indefinidamente, mas será forçado a soltar o alvo se sofrer dano de Energia
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>`)
        }
    else if($('#monstros option:selected').val()=='zumbi_sangue'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
                <div class="container1">
                    <div class="subcontainer1">
                        <img class="foto" src="img/zumbi_sangue.png"><br>
                        Ameaça `+id+`
                    </div>
                    <div class="subcontainer2">
                        <div class="stats">
                            <label for="">Nome:</label>
                            <input type="text" class="nome" value="Zumbi de Sangue">
                            <label for="">VD:</label>
                            <input type="text" class="vd" value="20">
                            <label for="">Tamanho:</label>
                            <input type="text" class="tam" value="Médio"><br>
                            <label for="">Elemento:</label>
                            <input type="text" class="elemento" value="Sangue">
                            <label for="">Elementos complementares:</label>
                            <input type="text" class="elemento2" value=""><br>
                            <label for="">PV:</label>
                            <input type="text" class="def" value="45">
                            <label for="">Machucado:</label>
                            <input type="text" class="def" value="22">
                            <label for="">Deslocamento:</label>
                            <input type="text" class="def" value="9m"><br>
                            <label for="" class="res_vul">Resistências:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Balístico, impacto e perfuração 5. Sangue 10</textarea>
                            <label for="" class="res_vul">Vulnerabilidades:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2">Morte</textarea><br>
                            <label for="">PRESENÇA PERTURBADORA</label><br>
                            <label for="">NEX:</label>
                            <input type="text" class="pres_pert" value="25%">
                            <label for="">DT:</label>
                            <input type="text" class="pres_pert" value="15">
                            <label for="">Dano:</label>
                            <input type="text" class="pres_pertu" value="1d6 Mental"><br>
                            <label for="">SENTIDOS:</label><br>
                            <label for="">Percepção às cegas:</label>
                            <input type="checkbox" class="percep_cega" checked>
                            <label for="">Percepção:</label>
                            <input type="text" class="sent" value="1D20+10">
                            <label for="">Iniciativa:</label>
                            <input type="text" class="sent" value="2D20+5"><br>
                            <label for="">DEFESA:</label>
                            <input type="text" class="def" value="17"><br>
                            <label for="">Fortitude:</label>
                            <input type="text" class="def" value="2D20+5">
                            <label for="">Reflexos:</label>
                            <input type="text" class="def" value="2D20+5">
                            <label for="">Vontade:</label>
                            <input type="text" class="def" value="1D20+5"><br>
                            <label for="">AGI:</label>
                            <input type="number" class="atrib" value="2">
                            <label for="">FOR:</label>
                            <input type="number" class="atrib" value="2">
                            <label for="">INT:</label>
                            <input type="number" class="atrib" value="0">
                            <label for="">PRE:</label>
                            <input type="number" class="atrib" value="1">
                            <label for="">VIG:</label>
                            <input type="number" class="atrib" value="2"><br>
                            <label>Perícias:</label><br>
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="subcontainer3">
                        <div class="caract">Descrição:
                        <textarea class="ataquetext" cols="78" rows="16">Quando cadáveres que morreram de forma muito brutal ou dolorosa são abandonados em uma área, servem como uma passagem para a entidade de Sangue devorá-los e tomar controle de sua forma física. Sua pele se transforma num material gosmento e vermelho, seus ossos de desfazem se transformando em pura carne, seus olhos são destruídos, os dentes crescem e se tornam pontudos e suas unhas se estendem em grandes e perigosas garras. O tempo de transformação de um corpo para um zumbi de Sangue é irregular, ele depende do corpo sendo devorado e do ambiente em que a metamorfose acontece. É possível enfrentar um cadáver no meio do processo da metamorfose, o que resulta em um zumbi de Sangue mais frágil do que um corpo tomado por completo pelo Sangue. Zumbis de Sangue são cegos e detectam presenças pela movimentação da corrente de ar, com sua pele exposta sendo tão sensível que até os mais sutis movimentos do vento o causam dor e revelam a posição dos seus alvos. Essas criaturas se comportam de maneira bestial e agressiva, como feras descontroladas que buscam apenas devorar toda a carne. Sem raciocinar ou pensar estrategicamente em nenhum momento, são movidos apenas por uma frenesi obsessiva e brutal.
                        </textarea>
                        </div><br>
                        <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16">MOVIMENTO | VISÃO MACABRA (Flor Laranja)
    O movimento hipnotizante da flor faz com que o personagem tenha delírios de imagens macabras e perturbadas. Todos os personagens em alcance curto sofrem 1d6 pontos de dano Mental (Vontade DT 15 reduz à metade). A flor laranja murcha se o zumbi de sangue sofrer 5 pontos de dano de corte de um único efeito.

MOVIMENTO | CHUVA DE ÁCIDO (Flor Vermelha)
    A dama espirra ácido que derrete carne e corrói metal. Todos os personagens em alcance curto sofrem 1d4+2 pontos de dano químico (Fortitude DT 15 reduz à metade). A flor vermelha murcha se o zumbi de sangue entrar em contato com agrotóxico.

MOVIMENTO | ARREMESSAR (Flor Rosa)
    A dama de sangue ergue um personagem em alcance curto e o arremessa a um ponto a sua escolha também em alcance curto. O personagem sofre 1d4 pontos de dano de impacto e fica caído (Reflexos DT 15 evita todo o efeito). A flor rosa murcha se o zumbi de sangue entrar em contato com fertilizante.
                        </textarea></div>
                    </div>
                    <div class="subcontainer4">
                        <div class="ataque">
                        Ações:
                        <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR
    GARRAS Corpo a corpo x2
        TESTE 2D20+5 | DANO 1d6 corte
            
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>`)
        }
    else if($('#monstros option:selected').val()=='rene'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
                <div class="container1">
                    <div class="subcontainer1">
                        <img class="fototoken" src="img/rene.png"><br>
                        Ameaça `+id+`
                    </div>
                    <div class="subcontainer2">
                        <div class="stats">
                            <label for="">Nome:</label>
                            <input type="text" class="nome" value="Rene Soffiate">
                            <label for="">VD:</label>
                            <input type="text" class="vd" value="-">
                            <label for="">Tamanho:</label>
                            <input type="text" class="tam" value="Médio"><br>
                            <label for="">PV:</label>
                            <input type="text" class="def" value="50">
                            <label for="">Machucado:</label>
                            <input type="text" class="def" value="25">
                            <label for="">Deslocamento:</label>
                            <input type="text" class="def" value="9m"><br>
                            <label for="" class="res_vul">Resistências:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea><br>
                            <label for="">SENTIDOS:</label><br>
                            <label for="">Percepção:</label>
                            <input type="text" class="sent" value="3D20+5">
                            <label for="">Iniciativa:</label>
                            <input type="text" class="sent" value="1D20+5"><br>
                            <label for="">DEFESA:</label>
                            <input type="text" class="def" value="17"><br>
                            <label for="">Fortitude:</label>
                            <input type="text" class="def" value="1D20">
                            <label for="">Reflexos:</label>
                            <input type="text" class="def" value="1D20">
                            <label for="">Vontade:</label>
                            <input type="text" class="def" value="3D20+5"><br>
                            <label for="">AGI:</label>
                            <input type="number" class="atrib" value="1">
                            <label for="">FOR:</label>
                            <input type="number" class="atrib" value="0">
                            <label for="">INT:</label>
                            <input type="number" class="atrib" value="3">
                            <label for="">PRE:</label>
                            <input type="number" class="atrib" value="3">
                            <label for="">VIG:</label>
                            <input type="number" class="atrib" value="1"><br>
                            <label>Perícias:</label><br>
                            <input type="text" class="peri" value="Enganação">
                            <input type="text" class="diceperi" value="3D20+10">
                            <input type="text" class="peri" value="Ocultismo">
                            <input type="text" class="diceperi" value="3D20+10">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="subcontainer3">
                        <div class="caract">Descrição:
                        <textarea class="ataquetext" cols="78" rows="16">
                    
                        </textarea>
                        </div><br>
                        <div class="loot">Habilidades / Rituais:<textarea class="ataquetext" cols="78" rows="16">CONJURADOR Escolha dois rituais de 1º círculo e dois rituais de 2º círculo de até dois elementos. O cultista pode conjurar esses rituais sem pagar seu custo de PE, até um limite de 5 PE por conjuração, usando a ação apropriada para cada ritual. A DT para resistir aos seus rituais é 17.</textarea></div>
                    </div>
                    <div class="subcontainer4">
                        <div class="ataque">
                        Ações:
                        <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR
    ADAGA Corpo a corpo
        Teste 1D20+5, crítico 19 | Dano 1d4+1 corte

PADRÃO | AGREDIR
    REVÓLVER À distância | CURTO
        Teste 1D20, crítico 19/x3 | Dano 2d6 balístico
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>`)
        }
    else if($('#monstros option:selected').val()=='quinn'){
        $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
                <div class="container1">
                     <div class="subcontainer1">
                        <img class="fototoken" src="img/quinn.png"><br>
                        Ameaça `+id+`
                    </div>
                    <div class="subcontainer2">
                        <div class="stats">
                            <label for="">Nome:</label>
                            <input type="text" class="nome" value="---- Quinn">
                            <label for="">VD:</label>
                            <input type="text" class="vd" value="-">
                            <label for="">Tamanho:</label>
                            <input type="text" class="tam" value="Médio"><br>
                            <label for="">PV:</label>
                            <input type="text" class="def" value="35">
                            <label for="">Machucado:</label>
                            <input type="text" class="def" value="17">
                            <label for="">Deslocamento:</label>
                            <input type="text" class="def" value="9m"><br>
                            <label for="" class="res_vul">Resistências:</label>
                            <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea><br>
                            <label for="">SENTIDOS:</label><br>
                            <label for="">Percepção:</label>
                            <input type="text" class="sent" value="2D20+5">
                            <label for="">Iniciativa:</label>
                            <input type="text" class="sent" value="2D20+5"><br>
                            <label for="">DEFESA:</label>
                            <input type="text" class="def" value="17"><br>
                            <label for="">Fortitude:</label>
                            <input type="text" class="def" value="1D20">
                            <label for="">Reflexos:</label>
                            <input type="text" class="def" value="2D20+5">
                            <label for="">Vontade:</label>
                            <input type="text" class="def" value="2D20+5"><br>
                            <label for="">AGI:</label>
                            <input type="number" class="atrib" value="2">
                            <label for="">FOR:</label>
                            <input type="number" class="atrib" value="0">
                            <label for="">INT:</label>
                            <input type="number" class="atrib" value="2">
                            <label for="">PRE:</label>
                            <input type="number" class="atrib" value="3">
                            <label for="">VIG:</label>
                            <input type="number" class="atrib" value="1"><br>
                            <label>Perícias:</label><br>
                            <input type="text" class="peri" value="Ocultismo">
                            <input type="text" class="diceperi" value="2D20+10">
                            <input type="text" class="peri" value="Pontaria">
                            <input type="text" class="diceperi" value="2D20+5">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                            <input type="text" class="peri">
                            <input type="text" class="diceperi">
                        </div>
                    </div>
                </div>
                <div class="container2">
                    <div class="subcontainer3">
                        <div class="caract">Descrição:
                        <textarea class="ataquetext" cols="78" rows="16">
                    
                        </textarea>
                        </div><br>
                        <div class="loot">Habilidades / Rituais:<textarea class="ataquetext" cols="78" rows="16"></textarea></div>
                    </div>
                    <div class="subcontainer4">
                        <div class="ataque">
                        Ações:
                        <textarea class="ataquetext" cols="78" rows="33">PADRÃO | AGREDIR
    ADAGA DE MORTE Corpo a corpo
        Teste 2D20+5, crítico 19 | Dano 1d4+1 corte

PADRÃO | AGREDIR
    REVÓLVER À distância | CURTO
        Teste 2D20+5, crítico 19/x3 | Dano 2d6 balístico
    ADAGA DE MORTE À distâcia x2 | CURTO
        Teste 2D20+5, crítico 20 | Dano 1d4+2 Morte
                    
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>`)
        }
    id+=1
})
$('#delete').click(function(){
    var del = prompt('Em qual posição está o monstro que deseja apagar?')
    $('#monstro'+del).remove()
})
$('#btninic').click(function(){
    if(($('#iniciativas').css('display')!='none')){
        $('#iniciativas').css('display', 'none');
    }else{
        $('#iniciativas').css('display', 'block');
    }
})

// else if($('#monstros option:selected').val()==''){
//     $('#divmonstros').append(`<div id="monstro`+id+`" class="monstro">
//             <div class="container1">
//                 <div class="subcontainer1">
//                     <img class="foto" src="img/"><br>
//                     Ameaça `+id+`
//                 </div>
//                 <div class="subcontainer2">
//                     <div class="stats">
//                         <label for="">Nome:</label>
//                         <input type="text" class="nome" value="">
//                         <label for="">VD:</label>
//                         <input type="text" class="vd" value="">
//                         <label for="">Tamanho:</label>
//                         <input type="text" class="tam" value=""><br>
//                         <label for="">Elemento:</label>
//                         <input type="text" class="elemento" value="">
//                         <label for="">Elementos complementares:</label>
//                         <input type="text" class="elemento2" value=""><br>
//                         <label for="">PV:</label>
//                         <input type="text" class="def" value="">
//                         <label for="">Machucado:</label>
//                         <input type="text" class="def" value="">
//                         <label for="">Deslocamento:</label>
//                         <input type="text" class="def" value=""><br>
//                         <label for="" class="res_vul">Resistências:</label>
//                         <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea>
//                         <label for="" class="res_vul">Vulnerabilidades:</label>
//                         <textarea class="descrit" placeholder="" cols="25" rows="2"></textarea><br>
//                         <label for="">PRESENÇA PERTURBADORA</label><br>
//                         <label for="">NEX:</label>
//                         <input type="text" class="pres_pert" value="">
//                         <label for="">DT:</label>
//                         <input type="text" class="pres_pert" value="">
//                         <label for="">Dano:</label>
//                         <input type="text" class="pres_pertu" value=""><br>
//                         <label for="">SENTIDOS:</label><br>
//                         <label for="">Percepção às cegas:</label>
//                         <input type="checkbox" class="percep_cega" checked>
//                         <label for="">Percepção:</label>
//                         <input type="text" class="sent" value="">
//                         <label for="">Iniciativa:</label>
//                         <input type="text" class="sent" value=""><br>
//                         <label for="">DEFESA:</label>
//                         <input type="text" class="def" value=""><br>
//                         <label for="">Fortitude:</label>
//                         <input type="text" class="def" value="">
//                         <label for="">Reflexos:</label>
//                         <input type="text" class="def" value="">
//                         <label for="">Vontade:</label>
//                         <input type="text" class="def" value=""><br>
//                         <label for="">AGI:</label>
//                         <input type="number" class="atrib" value="">
//                         <label for="">FOR:</label>
//                         <input type="number" class="atrib" value="">
//                         <label for="">INT:</label>
//                         <input type="number" class="atrib" value="">
//                         <label for="">PRE:</label>
//                         <input type="number" class="atrib" value="">
//                         <label for="">VIG:</label>
//                         <input type="number" class="atrib" value=""><br>
//                         <label>Perícias:</label><br>
//                         <input type="text" class="peri">
//                         <input type="text" class="diceperi">
//                         <input type="text" class="peri">
//                         <input type="text" class="diceperi">
//                         <input type="text" class="peri">
//                         <input type="text" class="diceperi">
//                     </div>
//                 </div>
//             </div>
//             <div class="container2">
//                 <div class="subcontainer3">
//                     <div class="caract">Descrição:
//                     <textarea class="ataquetext" cols="78" rows="16">
    
//                     </textarea>
//                     </div><br>
//                     <div class="loot">Habilidades / Enigma de medo:<textarea class="ataquetext" cols="78" rows="16"></textarea></div>
//                 </div>
//                 <div class="subcontainer4">
//                     <div class="ataque">
//                     Ações:
//                     <textarea class="ataquetext" cols="78" rows="33">
    
//                     </textarea>
//                     </div>
//                 </div>
//             </div>
//         </div>`)
//     }