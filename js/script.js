var rolldice = function(D){
    var strmod = $('#mod').val()
    var qnt = $("#qntdados").val()
    var loop = 0
    var maior = 0
    if(strmod==''){strmod=0}
    intmod = parseInt(strmod)
    if(qnt==''){qnt=1}
    qnt = parseInt(qnt)
    while (loop<qnt){
        r = Math.round((Math.random()*D)+1)
        if(r>maior){
            maior=r
        }
        loop++;
    };
    if(intmod==0){$('#resultado').html(maior)}
    else{$('#resultado').html(maior+'+'+intmod+'='+(maior+intmod))}
};
var rolldiceatk = function(D,qntdice, mod){
    var strmod = mod
    var qnt = qntdice
    var loop = 0
    var maior = 0
    if(strmod==''){strmod=0}
    intmod = parseInt(strmod)
    if(qnt==''){qnt=1}
    qnt = parseInt(qnt)
    while (loop<qnt){
        r = Math.round((Math.random()*D)+1)
        if(r>maior){
            maior=r
        }
        loop++;
    };
    if(intmod==0){$('#resultatk').html(maior)}
    else{$('#resultatk').html(maior+'+'+intmod+'='+(maior+intmod))}
};
var rolldicedano = function(dano){
    var qntdado = parseInt(dano.slice(0,1))
    var mod = dano.slice(5)
    var dado = dano.slice(2,4)
    if(dado.slice(1,2)=='+'){
        dado = dano.slice(2,3)
        mod = dano.slice(4)
    }
    loop = 0
    soma = 0
    while (loop<qntdado){
        r = Math.round((Math.random()*(parseInt(dado)-1))+1)
        soma = soma + r
        loop++;
    }
    if(mod==0){$('#resultatk').html(soma)}
    else{$('#resultatk').html(soma+'+'+mod+'='+(soma+parseInt(mod)))}
};
$('#d4').click(function(){
    rolldice(3)
})
$('#d6').click(function(){
    rolldice(5)
})
$('#d8').click(function(){
    rolldice(7)
})
$('#d10').click(function(){
    rolldice(9)
})
$('#d12').click(function(){
    rolldice(11)
})
$('#d20').click(function(){
    rolldice(19)
})
$('#d100').click(function(){
    rolldice(99)
})
$('#clear').click(function(){
    $('#resultado').html('');
    $('#mod').val('');
    $('#qntdados').val('');
    $('.resrollperi').val('');
    $('#resultatk').html('')
});
origem = function(org, poder, despoder, per1, per2){
    $('#btnpoder1').val(poder)
    $('#poder1').val(despoder)
    if(org!='' && org!='amnesico'){
        if($('#'+per1).val()==''){
            $('#'+per1).val('treinado')
        }
        if($('#'+per2).val()==''){
            $('#'+per2).val('treinado')
        }
    }
};
checkPer = function(){
    totalPeri = -2
    if($('#origem').val()=='amnesico'){
        totalPeri = 0
    }
    if($('#origem').val()=='vitima' && $('#classe').val()=='ocultista'){
        totalPeri = -1
    }
    if($('#acro').val()!=''){totalPeri+=1}
    if($('#ades').val()!=''){totalPeri+=1}
    if($('#arte').val()!=''){totalPeri+=1}
    if($('#atle').val()!=''){totalPeri+=1}
    if($('#atua').val()!=''){totalPeri+=1}
    if($('#cien').val()!=''){totalPeri+=1}
    if($('#crim').val()!=''){totalPeri+=1}
    if($('#dipl').val()!=''){totalPeri+=1}
    if($('#enga').val()!=''){totalPeri+=1}
    if($('#fort').val()!=''){totalPeri+=1}
    if($('#furt').val()!=''){totalPeri+=1}
    if($('#inic').val()!=''){totalPeri+=1}
    if($('#inti').val()!=''){totalPeri+=1}
    if($('#intu').val()!=''){totalPeri+=1}
    if($('#inve').val()!=''){totalPeri+=1}
    if($('#luta').val()!=''){totalPeri+=1}
    if($('#medi').val()!=''){totalPeri+=1}
    if($('#ocul').val()!=''){totalPeri+=1}
    if($('#perc').val()!=''){totalPeri+=1}
    if($('#pilo').val()!=''){totalPeri+=1}
    if($('#pont').val()!=''){totalPeri+=1}
    if($('#prof').val()!=''){totalPeri+=1}
    if($('#refl').val()!=''){totalPeri+=1}
    if($('#reli').val()!=''){totalPeri+=1}
    if($('#sobr').val()!=''){totalPeri+=1}
    if($('#tati').val()!=''){totalPeri+=1}
    if($('#tecn').val()!=''){totalPeri+=1}
    if($('#vont').val()!=''){totalPeri+=1}
}
calcstats = function(){
    var classe = $('#classe').val()
    var vig = parseInt($('#vigor').val())
    var pre = parseInt($('#presenca').val())
    var nex = parseInt($('#nex').val())
    var peR = 1
    if(classe=='mundano'){
        pvmax = 8+vig
        pemax = 1+pre
        sanmax = 8
    }else if(classe=='combatente'){
        var pvmax = 20 + vig
        var pemax = 2 + pre
        var sanmax = 12
        if($('#origem').val()=='vitima'){
            sanmax = 13
        }
        
        for (var index = 1; index < nex; index++) {
            pvmax = pvmax + 4 + vig
            pemax = pemax + 2 + pre
            sanmax = sanmax + 3 
        }
    }else if(classe=='especialista'){
        var pvmax = 16 + vig
        var pemax = 3 + pre
        var sanmax = 16
        
        for (var index = 1; index < nex; index++) {
            pvmax = pvmax + 3 + vig
            pemax = pemax + 3 + pre
            sanmax = sanmax + 4
        }
    }else if(classe=='ocultista'){
        var pvmax = 12 + vig
        var pemax = 4 + pre
        var sanmax = 20
        if($('#origem').val()=='vitima'){
            sanmax = 21
        }
        
        for (var index = 1; index < nex; index++) {
            pvmax = pvmax + 2 + vig
            pemax = pemax + 4 + pre
            sanmax = sanmax + 6
        }
    }
    if(classe==''){$('#peR').val('')}
    else if(classe!=''){
        for (var index = 1; index < nex; index++) {
        peR = peR + 1
        }
        $('#peR').val(peR)
    }
    $('#pvmax').val(pvmax)
    $('#pemax').val(pemax)
    $('#sanmax').val(sanmax)
    
}
$('#edit').click(function(){
    if($('.editar').attr('readOnly')=='readonly'){
        $('.editar').attr('readOnly', false)
    }
    else if($('.editar').attr('readOnly')!='readonly'){
        $('.editar').attr('readOnly', true)
    };
    if($('#edit').html()=='Editar'){
        $('#edit').html('Salvar')
    }
    else if($('#edit').html()=='Salvar'){
        $('#edit').html('Editar')
    }
    
    
    if(($('.seletor').css('pointer-events')=='none')){
        $('.seletor').css('pointer-events', 'initial');
    }else{
        $('.seletor').css('pointer-events', 'none');
        calcdef()
        bloqesq()
        var orig = $('#origem option:selected').val();
        if(orig==''){origem('', 'Poder', '', '', '')}
        if(orig=='academico'){origem('academico', 'Saber é Poder', 'Quando faz um teste usando Intelecto, você pode gastar 2 PE para receber +5 nesse teste.', 'cien', 'inve')}
        if(orig=='agentesaude'){origem('agentesaude', 'Técnica Medicinal', 'Sempre que cura um personagem, você adiciona seu Intelecto no total de PV curados.', 'intu', 'medi')}
        if(orig=='amnesico'){origem('amnesico', 'Vislumbres do Passado', 'Uma vez por missão, você pode fazer um teste de Intelecto (DT 10) para reconhecer pessoas ou lugares familiares, que tenha encontrado antes de perder a memória. Se passar, recebe 1d4 PE temporários e, a critério do mestre, uma informação útil.', '', '')}
        if(orig=='artista'){origem('artista', 'Magnum Opus', 'Você é famoso por uma de suas obras. Uma vez por missão, pode determinar que um personagem envolvido em uma cena de interação o reconheça. Você recebe +5 em testes de Presença e de perícias baseadas em Presença contra aquele personagem. A critério do mestre, pode receber esses bônus em outras situações nas quais seria reconhecido.', 'arte', 'enga')}
        if(orig=='atleta'){origem('atleta', '110%', 'Quando faz um teste de perícia usando Força ou Agilidade (exceto Luta e Pontaria) você pode gastar 2 PE para receber +5 nesse teste.', 'acro', 'atle')}
        if(orig=='chef'){origem('chef', 'Ingrediente Secreto', 'Em cenas de interlúdio, você pode gastar uma ação para cozinhar um prato gostoso. Cada membro do grupo (incluindo você) que gastar uma ação para se alimentar recebe o benefício de dois pratos (caso o mesmo benefício seja escolhido duas vezes, seus efeitos se acumulam).', 'fort', 'prof')}
        if(orig=='criminoso'){origem('criminoso', 'O Crime Compensa', 'No final de uma missão, escolha um item encontrado na missão. Em sua próxima missão, você pode incluir esse item em seu inventário sem que ele conte em seu limite de itens por patente.', 'crim', 'furt')}
        if(orig=='cultiarrep'){origem('cultiarrep', 'Traços do Outro Lado', 'Você possui um poder paranormal à sua escolha. Porém, começa o jogo com metade da Sanidade normal para sua classe.', 'ocul', 'reli')}
        if(orig=='desgarrado'){origem('desgarrado', 'Calejado', 'Você recebe +1 PV para cada 5% de NEX.', 'fort', 'sobr')}
        if(orig=='engenheiro'){origem('engenheiro', 'Ferramentas Favoritas', 'Um item a sua escolha (exceto armas) conta como uma categoria abaixo (por exemplo, um item de categoria II conta como categoria I para você).', 'prof', 'tecn')}
        if(orig=='executivo'){origem('executivo', 'Processo Otimizado', 'Sempre que faz um teste de perícia durante um teste estendido, pode pagar 2 PE para receber +5 nesse teste', 'dipl', 'prof')}
        if(orig=='investigador'){origem('investigador', 'Faro para Pistas', 'Uma vez por cena, quando fizer um teste para procurar pistas, você pode gastar 1 PE para receber +5 nesse teste.', 'inve', 'perc')}
        if(orig=='lutador'){origem('lutador', 'Mão pesada', 'Você recebe +2 em rolagens de dano com ataques corpo a corpo.', 'luta', 'refl')}
        if(orig=='magnata'){origem('magnata', 'Patrocinador da Ordem', 'Seu limite de crédito é sempre considerado um acima do atual.', 'dipl', 'pilo')}
        if(orig=='mercenario'){origem('mercenario', 'Posição de Combate', 'No primeiro turno de cada cena de ação, você pode gastar 2 PE para receber uma ação de movimento adicional.', 'inic', 'inti')}
        if(orig=='militar'){origem('militar', '+1 de dano à distância', 'Você recebe +2 em rolagens de dano com armas de fogo.', 'pont', 'tati')}
        if(orig=='operario'){origem('operario', 'Ferramentas de profissão', 'Escolha uma arma simples ou tática que, a critério do mestre, poderia ser usada como ferramenta em sua profissão (como uma marreta para um pedreiro). Você sabe usar a arma escolhida e recebe +1 em testes de ataque, rolagens de dano e margem de ameaça com ela', 'fort', 'prof')}
        if(orig=='policial'){origem('policial', 'Patrulha', 'Você recebe +2 em Defesa', 'perc', 'pont')}
        if(orig=='religioso'){origem('religioso', 'Exorcismo', 'Você recebe +5 em testes de Religião para acalmar. Além disso, quando acalma uma pessoa, ela recebe um número de pontos de Sanidade igual a 1d6 + a sua Presença', 'reli', 'vont')}
        if(orig=='servpubli'){origem('servpubli', 'Espírito Cívico', 'Sempre que faz um teste para ajudar, você pode gastar 1 PE para aumentar o bônus concedido em +2.', 'intu', 'vont')}
        if(orig=='teoconsp'){origem('teoconsp', 'Eu já Sabia', 'Você não se abala com entidades ou anomalias. Afinal, sempre soube que isso tudo existia. Você recebe resistência a dano mental igual ao seu Intelecto.', 'inve', 'ocul')}
        if(orig=='ti'){origem('ti', 'Computação Avançada', 'A critério do Mestre, sempre que tiver acesso a internet, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Tecnologia.', 'inve', 'tecn')}
        if(orig=='trabrural'){origem('trabrural', 'Trilhas e Rumos', 'Quando faz um teste de Adestramento ou Sobrevivência, você pode gastar 2 PE para receber +5 nesse teste. Além disso, você não sofre penalidade em deslocamento por terreno dif ícil.', 'ades', 'sobr')}
        if(orig=='trambiqueiro'){origem('trambiqueiro', 'Impostor', 'Uma vez por cena, você pode gastar 2 PE para substituir um teste de perícia qualquer por um teste de Enganação.', 'crim', 'enga')}
        if(orig=='universitario'){origem('universitario', 'Empenho', 'Você recebe +1 PE, e mais 1 PE adicional a cada NEX ímpar (15%, 25%...). Além disso, seu limite de PE por turno aumenta em 1 (em NEX 5% seu limite é 2, em NEX 10% é 3 e assim por diante)', 'atua', 'inve')}
        if(orig=='vitima'){origem('vitima', 'Cicatrizes Psicológicas', 'Você recebe +1 de Sanidade para cada 5% de NEX.', 'refl', 'vont')}
        
        checkPer()
        if($('#classe option:selected').val()==''){
            $('#peresc').html('Pericias a escolher: 0') 
            $('#btnhabilidade1').val('Habilidade')
            $('#habilidade1').val('')
            if($('#btnhabilidade2').val()=='Perito'){
                $('#btnhabilidade2').val('Habilidade')
                $('#habilidade2').val('')
            }
            if($('#nex option:selected').val()!=''){$('#nex').val('')}
            $('#pv').val('')
            $('#pvmax').val('')
            $('#pe').val('')
            $('#pemax').val('')
            $('#san').val('')
            $('#sanmax').val('')
        }
        else if($('#classe option:selected').val()=='mundano'){
            var totalesc = 1+(parseInt($('#intelecto').val())) - totalPeri
            $('#peresc').html('Pericias a escolher: '+ totalesc)
            $('#btnhabilidade1').val('Empenho')
            $('#habilidade1').val('Você pode não ter treinamento especial, mas compensa com dedicação e esforço. Quando faz um teste de perícia, você pode gastar 1 PE para receber +2 nesse teste.')
            $('#nex').val('0')
            if($('#btnhabilidade2').val()=='Perito'){
                $('#btnhabilidade2').val('Habilidade')
                $('#habilidade2').val('')
            }
        }
        else if($('#classe option:selected').val()=='combatente'){
            if($('#luta').val()=='' && $('#pont').val()==''){
                var comb1 = prompt('Escolha luta ou pontaria')
                if(comb1=='luta'){
                    $('#luta').val('treinado')
                }else if(comb1=='pontaria'){
                    $('#pont').val('treinado')
                }
            }
            if($('#fort').val()=='' && $('#refl').val()==''){
                var comb1 = prompt('Escolha fortitude ou reflexo')
                if(comb1=='fort'){
                    $('#fort').val('treinado')
                }else if(comb1=='reflexo'){
                    $('#refl').val('treinado')
                }
            }
            checkPer()
            var totalesc = 1+(parseInt($('#intelecto').val())) - totalPeri +2
            $('#peresc').html('Pericias a escolher: '+ totalesc)
            $('#btnhabilidade1').val('Ataque Especial')
            $('#habilidade1').val('Quando faz um ataque, você pode gastar 2 PE para receber +5 no teste de ataque ou na rolagem de dano. Conforme avança de NEX, você pode gastar +1 PE para receber mais bônus de +5 (veja a Tabela 1.3). Você pode aplicar cada bônus de +5 em ataque ou dano. Por exemplo, em NEX 55%, você pode gastar 4 PE para receber +5 no teste de ataque e +10 na rolagem de dano.')
            if(($('#nex option:selected').val()=='') || $('nex selected:option').val()=='0'){$('#nex').val('1')}
            if($('#btnhabilidade2').val()=='Perito'){
                $('#btnhabilidade2').val('Habilidade')
                $('#habilidade2').val('')
            }
        }
        else if($('#classe option:selected').val()=='especialista'){
            var totalesc = 7+(parseInt($('#intelecto').val())) - totalPeri
            $('#peresc').html('Pericias a escolher: '+ totalesc)
            $('#btnhabilidade1').val('Eclético')
            $('#habilidade1').val('Quando faz um teste de uma perícia, você pode gastar 2 PE para receber os benefícios de ser treinado nesta perícia.')
            $('#btnhabilidade2').val('Perito')
            $('#habilidade2').val('Escolha duas perícias nas quais você é treinado (exceto Luta e Pontaria). Quando faz um teste de uma dessas perícias, você pode gastar 2 PE para somar +1d6 no resultado do teste. Conforme avança de NEX, você pode gastar +1 PE para aumentar o dado de bônus (veja a Tabela 1.4). Por exemplo, em NEX 55%, pode gastar 4 PE para receber +1d12 no teste.')
            if($('#nex option:selected').val()==''|| $('nex selected:option').val()=='0'){$('#nex').val('1')}
            }
        else if($('#classe option:selected').val()=='ocultista'){
            $('#vont').val('treinado')
            $('#ocul').val('treinado')
            checkPer()
            var totalesc = 3+(parseInt($('#intelecto').val())) - totalPeri +2
            $('#peresc').html('Pericias a escolher: '+ totalesc)
            $('#btnhabilidade1').val('Escolhido pelo Outro Lado')
            $('#habilidade1').val('Você teve uma experiência paranormal e foi marcado pelo Outro Lado, absorvendo o conhecimento e poder necessários para realizar rituais. Você pode lançar rituais de 1º círculo. À medida que aumenta seu NEX, pode lançar rituais de círculos maiores (2º círculo em NEX 25%, 3º círculo em NEX 55% e 4º círculo em NEX 85%). Você começa com três rituais de 1º círculo. Sempre que avança de NEX, aprende um ritual de qualquer círculo que possa lançar. Esses rituais não contam no seu limite de rituais conhecidos. Veja o Capítulo 5 para as regras de rituais.')
            if($('#nex option:selected').val()=='' || $('nex selected:option').val()=='0'){$('#nex').val('1')}
            if($('#btnhabilidade2').val()=='Perito'){
                $('#btnhabilidade2').val('Habilidade')
                $('#habilidade2').val('')
            }
        }
        attDicePeri()
        calcstats()
    }
});

var calcdef = function(){
    var equip = $('#equip').val()
    var outros = $('#outros').val()
    if(outros==''){equip=0}
    if(equip==''){outros=0}
    equip = parseInt(equip)
    outros = parseInt(outros)
    $('#defagi').val(parseInt($('#agilidade').val()))
    $('#deftotal').val(10+parseInt($('#agilidade').val())+equip+outros)
};
var bloqesq = function(){
    var refl = $('#refl option:selected').val();
    var fort = $('#fort option:selected').val();

    if(refl==''){refl=0}
    else if(refl=='treinado'){refl=5}
    else if(refl=='veterano'){refl=10}
    else if(refl=='expert'){refl=15}
    tot = parseInt($('#deftotal').val())+refl
    $('#esq').val(tot)
    
    if(fort==''){fort=0}
    else if(fort=='treinado'){fort=5}
    else if(fort=='veterano'){fort=10}
    else if(fort=='expert'){fort=15}
    $('#bloq').val(fort)
};

calcdef();
$('#calcdef').click(function(){
    calcdef()
});

bloqesq();
$('#bloqesq').click(function(){
    bloqesq()
});

luta = 'FOR'
$('#diceluta').dblclick(function(){
    if(luta=='FOR'){
        luta='AGI'
        dicePeri('luta', 'agilidade')
    }else if(luta=='AGI'){
        luta='FOR'
        dicePeri('luta', 'forca')
    }
})

var dicePeri = function(per, atr){
    var atrib = atr
    var peri = per
    var per = $('#'+per+' option:selected').val();
    var atri = parseInt($('#'+atrib).val());

    if(per==''){per=0}
    if(per=='treinado'){per=5}
    else if(per=='veterano'){per=10}
    else if(per=='expert'){per=15}
    if(per==0){$('#dice'+peri).val(atri+'d20')}
    else{$('#dice'+peri).val(atri+'d20'+'+'+per)}
}
var attDicePeri = function(){
    dicePeri('acro', 'agilidade')
    dicePeri('ades', 'presenca')
    dicePeri('arte', 'presenca')
    dicePeri('atle', 'forca')
    dicePeri('atua', 'intelecto')
    dicePeri('cien', 'intelecto')
    dicePeri('crim', 'agilidade')
    dicePeri('dipl', 'presenca')
    dicePeri('enga', 'presenca')
    dicePeri('fort', 'vigor')
    dicePeri('furt', 'agilidade')
    dicePeri('inic', 'agilidade')
    dicePeri('inti', 'presenca')
    dicePeri('intu', 'presenca')
    dicePeri('inve', 'intelecto')
    if(luta=='FOR'){
        dicePeri('luta', 'forca')
    }else if(luta=='AGI'){
        dicePeri('luta', 'agilidade')
    }
    dicePeri('medi', 'intelecto')
    dicePeri('ocul', 'intelecto')
    dicePeri('perc', 'presenca')
    dicePeri('pilo', 'agilidade')
    dicePeri('pont', 'agilidade')
    dicePeri('prof', 'intelecto')
    dicePeri('refl', 'agilidade')
    dicePeri('reli', 'presenca')
    dicePeri('sobr', 'intelecto')
    dicePeri('tati', 'intelecto')
    dicePeri('tecn', 'intelecto')
    dicePeri('vont', 'presenca')
}
attDicePeri()
rollPericia = function(per, atr){
    var atrib = atr
    var peri = per
    var per = $('#'+per+' option:selected').val();
    var atri = parseInt($('#'+atrib).val());
    var loop = 0
    var maior = 0

    if(per==''){per=0}
    else if(per=='treinado'){per=5}
    else if(per=='veterano'){per=10}
    else if(per=='expert'){per=15}
    if(per==0){$('#dice'+peri).val(atri+'d20')}
    else{$('#dice'+peri).val(atri+'d20'+'+'+per)}

    while (loop<atri){
        r = Math.round((Math.random()*19)+1)
        if(r>maior){
            maior=r
        }
        loop++;
    };
    if(per==0){$('#res'+peri).val(maior)}
    else{$('#res'+peri).val(maior+'+'+per+'='+(maior+per))}
};


$('#rollacro').click(function(){
    rollPericia('acro', 'agilidade')
})
$('#rollades').click(function(){
    rollPericia('ades', 'presenca')
})
$('#rollarte').click(function(){
    rollPericia('arte', 'presenca')
})
$('#rollatle').click(function(){
    rollPericia('atle', 'forca')
})
$('#rollatua').click(function(){
    rollPericia('atua', 'intelecto')
})
$('#rollcien').click(function(){
    rollPericia('cien', 'intelecto')
})
$('#rollcrim').click(function(){
    rollPericia('crim', 'agilidade')
})
$('#rolldipl').click(function(){
    rollPericia('dipl', 'presenca')
})
$('#rollenga').click(function(){
    rollPericia('enga', 'presenca')
})
$('#rollfort').click(function(){
    rollPericia('fort', 'vigor')
})
$('#rollfurt').click(function(){
    rollPericia('furt', 'agilidade')
})
$('#rollinic').click(function(){
    rollPericia('inic', 'agilidade')
})
$('#rollinti').click(function(){
    rollPericia('inti', 'presenca')
})
$('#rollintu').click(function(){
    rollPericia('intu', 'presenca')
})
$('#rollinve').click(function(){
    rollPericia('inve', 'intelecto')
})
$('#rollluta').click(function(){
    if(luta=='FOR'){
        rollPericia('luta', 'forca')
    }else if(luta=='AGI'){
        rollPericia('luta', 'agilidade')
    }
})
$('#rollmedi').click(function(){
    rollPericia('medi', 'intelecto')
})
$('#rollocul').click(function(){
    rollPericia('ocul', 'intelecto')
})
$('#rollperc').click(function(){
    rollPericia('perc', 'presenca')
})
$('#rollpilo').click(function(){
    rollPericia('pilo', 'agilidade')
})
$('#rollpont').click(function(){
    rollPericia('pont', 'agilidade')
})
$('#rollprof').click(function(){
    rollPericia('prof', 'intelecto')
})
$('#rollrefl').click(function(){
    rollPericia('refl', 'agilidade')
})
$('#rollreli').click(function(){
    rollPericia('reli', 'presenca')
})
$('#rollsobr').click(function(){
    rollPericia('sobr', 'intelecto')
})
$('#rolltati').click(function(){
    rollPericia('tati', 'intelecto')
})
$('#rolltecn').click(function(){
    rollPericia('tecn', 'intelecto')
})
$('#rollvont').click(function(){
    rollPericia('vont', 'presenca')
})

botoesinterativosfilho = function(idobj){
    var hideobj = function(obj){
        if(($('#'+idobj+obj).css('display')!='none')){
            $('#'+idobj+obj).css('display', 'none');
        }else{
            $('#'+idobj+obj).css('display', 'inline-block');
        }
    }
    $('#btn'+idobj+'1').click(function(){
        hideobj(1)
    })
    $('#btn'+idobj+'2').click(function(){
        hideobj(2)
    })
     $('#btn'+idobj+'3').click(function(){
        hideobj(3)
    })
}
botoesinterativospai = function(idobj){
    if(($('#'+idobj).css('display')!='none')){
        $('#'+idobj).css('display', 'none');
    }else{
        $('#'+idobj).css('display', 'block');
    }
}
$('#btninventario').click(function(){
    botoesinterativospai('inventario')
    botoesinterativosfilho('item')
})
$('#btnrituais').click(function(){
    botoesinterativospai('rituais')
    botoesinterativosfilho('ritual')
})
$('#btnpoderes').click(function(){
    botoesinterativospai('poderes')
    botoesinterativosfilho('poder')
})
$('#btnhabilidades').click(function(){
    botoesinterativospai('habilidades')
    botoesinterativosfilho('habilidade')
})
$('#btnataques').click(function(){
    botoesinterativospai('ataques')
    botoesinterativosfilho('ataque')
})
ataque = 1
fteste = 1
$('#adcataque').click(function(){
    $('#ataques').append('<div class="ataque" id="ataque'+ataque+'"><input type="text" id="atk'+ataque+'" class="arma editar" placeholder="Arma" readOnly><input type="text" id="teste'+ataque+'" class="teste editar teste'+ataque+'" placeholder="Teste: Ex. 2D20 ou 1d20+5" readOnly><input type="text" id="dano'+ataque+'" class="dano editar" placeholder="Dano: Ex. 1d10 ou 1d4+2" readOnly><input type="text" id="crit'+ataque+'" class="crit editar" placeholder="Crítico: Ex. 19/3x ou 20/2x" readOnly><input type="text" id="alcance'+ataque+'" class="alcance editar" placeholder="Alcance: Ex. Curto/Médio" readOnly><input type="text" id="espec'+ataque+'" class="espec editar" placeholder="Especial" readOnly></input></div>')
    ataque += 1
    abc(fteste)
    fteste+=1
})
$('#rmvataque').click(function(){
    if($('#atk'+(ataque-1)).val()!=''){
        var conf = confirm('Tem certeza que deseja excluir '+($('#atk'+(ataque-1)).val())+'?')
        if(conf==true){
            $('#ataque'+(ataque-1)).remove()
            ataque -= 1
            fteste -= 1
        }
    }else if($('#atk'+(ataque-1)).val()==''){
        $('#ataque'+(ataque-1)).remove()
            ataque -= 1
            fteste -= 1
        }
})

testeatk = function(nTeste){
    if($('.teste').attr('readOnly')=='readonly'){
        teste = $('#teste'+nTeste).val()
        qntdado = parseInt(teste.slice(0,1))
        mod = teste.slice(5)
        rolldiceatk(19, qntdado, mod)
    }
}
danoatk = function(nDano){
    if($('.teste').attr('readOnly')=='readonly'){
        var dano = $('#dano'+nDano).val()
        rolldicedano(dano)
    }
}
abc = function(fteste){
if(fteste==1){
    $('#teste'+fteste).click(function(){
        testeatk(1)
    })
    $('#dano1').click(function(){
        danoatk(1)
    })
}
if(fteste==2){
    $('#teste'+fteste).click(function(){
        testeatk(2)
    })
    $('#dano'+fteste).click(function(){
        danoatk(2)
    })
}
if(fteste==3){
    $('#teste'+fteste).click(function(){
        testeatk(3)
    })
    $('#dano'+fteste).click(function(){
        danoatk(3)
    })
}
if(fteste==4){
    $('#teste'+fteste).click(function(){
        testeatk(4)
    })
    $('#dano'+fteste).click(function(){
        danoatk(4)
    })
}
if(fteste==5){
    $('#teste'+fteste).click(function(){
        testeatk(5)
    })
    $('#dano'+fteste).click(function(){
        danoatk(5)
    })
}
}
$('#teste1').click(function(){
    testeatk(1)
})
$('#dano1').click(function(){
    danoatk(1)
})
$('#teste2').click(function(){
    testeatk(2)
})
$('#dano2').click(function(){
    danoatk(2)
})
$('#teste3').click(function(){
    testeatk(3)
})
$('#dano3').click(function(){
    danoatk(3)
})
$('#teste4').click(function(){
    testeatk(4)
})
$('#dano4').click(function(){
    danoatk(4)
})
$('#teste5').click(function(){
    testeatk(5)
})
$('#dano5').click(function(){
    danoatk(5)
})