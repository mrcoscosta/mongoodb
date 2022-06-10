algoritmo "ano bisexto"

var
   ano : inteiro

inicio
       escreva(" informe o ano ;")
       leia(ano)
       se (ano%4=0) ou (ano%100=0) entao
         escreva(" ANO BISSEXTO :ou seja esse ano vai ter um dia a mais tendo 366 dias sendo 29 no mes e fevereiro!")
        senao
        escreva("ANO NAO E BISSEXTO")
       fimse
fimalgoritmo
