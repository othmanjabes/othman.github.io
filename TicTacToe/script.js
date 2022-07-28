let turn = 'X';
let squres = [];

function winner() {
    for(let i=1;i<10;i++){
        squres[i] = document.getElementById('item'+i).innerHTML;
    }
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo(1)}
    if(squres[4]==squres[5]&&squres[5]==squres[6]&&squres[1]!= ''){foo(4)}
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo(7)}
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo()}
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo()}
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo()}
    if(squres[1]==squres[2]&&squres[2]==squres[3]&&squres[1]!= ''){foo()}

    function foo(){
        document.getElementById('win').innerHTML = ` ${squres[1]} is winner :)`;
    }
}





function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O'
    }
    else if(turn === 'O' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'X'
    }
    else{return}
    winner();
}

