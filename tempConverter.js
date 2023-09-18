
let cel = document.getElementById('cel');
let fah = document.getElementById('fah');

cel.addEventListener('input',function(){
    let c =  cel.value
    let f = (c*(9/5)+32).toFixed(2)
    fah.value = f;
})

fah.addEventListener('input',function(){
    let f = fah.value ;
    let c = ((f-32)*5/9).toFixed(2)
    cel.value = c
})