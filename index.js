function lamp(){
    let saklar = document.getElementById('saklar');
    let lamp = document.getElementById('lamp')

    if(saklar.checked){
        lamp.src = 'assets/on.gif';
    }
    else{
        lamp.src = 'assets/off.gif';
    }
}