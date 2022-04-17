const button = document.querySelector('.countitnow')
button.addEventListener('click', convert)
const enterheight = document.querySelector('.enterheight')
const enterwidth = document.querySelector('.enterwidth')
const entertop = document.querySelector('.entertop')
const enterrulonheight = document.querySelector('.enterrulonheight')
const enterrulonwidth = document.querySelector('.enterrulonwidth')
const perimetr = document.querySelector('.perimetr')
const ploshad = document.querySelector('.ploshad')
const ploshadrulona = document.querySelector('.ploshadrulona')
const youneedrulons = document.querySelector('.youneedrulons')

function convert(event){
    const enterheight2 = enterheight.value
    const enterwidth2 = enterwidth.value
    const entertop2 = entertop.value
    const enterrulonheight2 = enterrulonheight.value
    const enterrulonwidth2 = enterrulonwidth.value
    const numberheight = parseFloat(enterwidth2)
    const numberwidth = parseFloat(enterheight2)
    const numbertop = parseFloat(entertop2)
    const numberrulonheight =parseFloat(enterrulonheight2)
    const numberrulonwidth =parseFloat(enterrulonwidth2)
    const perimetr2 = (numberwidth + numberheight)
    const perimetrfinal = (perimetr2 * 2)
    const ploshadfinal = (numbertop*perimetrfinal)
    const ploshadrulonafinal = (numberrulonheight * numberrulonwidth)
    const rulonsfinal = (ploshadfinal/ploshadrulonafinal)
    perimetr.innerHTML = `Периметр вашего помещения: ${ perimetrfinal.toFixed(2)}м`
    ploshad.innerHTML = `Площадь вашего помещения: ${ploshadfinal.toFixed(2)}м²`
    ploshadrulona.innerHTML = `Площадь вашего рулона: ${ploshadrulonafinal.toFixed(2)} м²`
    youneedrulons.innerHTML =  `Необходимое количество рулонов ${rulonsfinal.toFixed(1)}шт.`
}