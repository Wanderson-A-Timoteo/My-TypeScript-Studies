import $ from 'jquery'

$.fn.estend({
    novaFuncao() {
        console.log('Chamou a nova função')
    }
})

$('body').novaFuncao()
