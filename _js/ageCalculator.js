function ageCalculator(){
    const date = new Date()
    const systemYear = date.getFullYear()
    const inputYear = window.document.getElementById('ano').value
    var sex = window.document.getElementsByName('radSex')
    var responseAgeSex = window.document.querySelector('div#response')

    if(inputYear < systemYear && inputYear > 1900){
        let age = systemYear - inputYear
        sex = manOrWoman(sex, age)
        responseAgeSex.innerHTML = `Você tem ${age} anos e é ${sex}`
    }else{
        window.alert('Ano inválido. Por favor, reveja sua entrada.')
    }

    function manOrWoman(sex, age){
        if(sex[0].checked){
            if(age > 18){
                return 'Homem'
            }else{
                return 'Menino'
            }
        }else{
            if(age > 18){
                return 'Mulher'
            }else{
                return 'Menina'
            } 
        }
    }
}