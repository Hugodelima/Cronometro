# Cronometro


Este código em JavaScript simples para mostrar um cronômetro

    let segundo_geral = 0; - Começamos com uma variável chamada segundo_geral que começa em zero. Essa variável vai guardar o tempo total que passou, contado em centésimos de segundo.

    let intervalo = null; - Aqui temos outra variável chamada intervalo, que começa como "nula" (vazia). Esta variável será usada para controlar o tempo no cronômetro.

    let cronometro = document.getElementById("cronometro"); - Essa linha pega uma parte da página da web que tem um identificador chamado "cronometro" e guarda essa parte em uma variável chamada cronometro. Isso é onde o tempo do cronômetro será mostrado na página.

Agora, vamos entender como as funções funcionam:

    function Tempo(){...} - Esta é uma função chamada "Tempo". É como uma tarefa que o cronômetro faz a cada centésimo de segundo. Dentro desta função:
        segundo_geral++; - Aumenta o valor de segundo_geral em 1 para representar a passagem de 1 centésimo de segundo.
        Em seguida, calcula quantos centésimos, segundos e minutos passaram desde o início, formatando-os para que sempre tenham dois dígitos (por exemplo, "01" em vez de "1").
        Por fim, atualiza o que é mostrado na parte da página chamada cronometro com o tempo atualizado.

    function Iniciar(){...} - Esta função é como apertar o botão "Iniciar" no cronômetro. Ela faz o seguinte:
        Verifica se o cronômetro já está contando (se intervalo já tiver algum valor). Se estiver contando, não faz nada (para não começar novamente).
        Se o cronômetro não estiver contando, começa a contar, atualizando o tempo a cada centésimo de segundo.

    function Pausar(){...} - Essa função serve para parar o cronômetro, como apertar o botão "Pausar". Ela faz o seguinte:
        Para o cronômetro, ou seja, para de contar o tempo atualizando.
        Diz que o cronômetro está "nulo" (parado).

    function Resetar(){...} - Esta função é para zerar o cronômetro, como apertar o botão "Zerar". Ela faz o seguinte:
        Primeiro, para o cronômetro, se estiver contando.
        Em seguida, coloca o tempo de volta para zero.
        Mostra "00:00:00" na parte da página chamada cronometro para reiniciar o cronômetro do zero.

Basicamente, este código JavaScript ajuda a criar um cronômetro que conta o tempo em centésimos de segundo e permite iniciar, parar e reiniciar o contador. Isso pode ser usado em uma página da web para medir o tempo decorrido.
