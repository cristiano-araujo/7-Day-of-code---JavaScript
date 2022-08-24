/* Chegou a hora, João! Você vai começar a sua jornada no #7DaysOfCode ;)
Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.
Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!
Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.
Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.
A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….
Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
O que não faz necessariamente muito sentido.
(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção “Inspecionar” e a aba “Console”. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).
Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros: */

// Você também pode utilizar o próprio navegador para executar esse seu programa, caso ainda não tenha familiaridade com editores de código, como o Visual Studio Code.

// Para isso, como eu falei acima, basta você clicar com o botão direito do mouse em qualquer página, selecionar a opção “Inspecionar”, ir na aba “Console” e digitar o seu código. Bem simples, né?

// Se você quiser mudar os nomes das variáveis e valores, fique à vontade. Mas jamais imprima algo que não seja verdadeiro, hein!




let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

if (numeroUm == stringUm) {
    alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
  
  if (numeroTrinta === stringTrinta) {
    alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }
  
  if (numeroDez == stringDez) {
    alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }

 /*  estudando document.write */
  /*
  if (numeroUm == stringUm) {
    document.write('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    document.write('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
  
  if (numeroTrinta === stringTrinta) {
    document.write('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo<br>')
  } else {
    document.write('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo<br>')
  }
  
  if (numeroDez == stringDez) {
    document.write('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    document.write('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }
  */