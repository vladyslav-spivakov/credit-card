document.querySelector('#card-input').addEventListener('input', cardInput);

function cardInput(){
    const val = document.querySelector('#card-input').value;
    if ()
    if (val.length>19){
    document.querySelector('#card-input').value = val.slice(0,19);
    }
    
}