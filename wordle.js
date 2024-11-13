console.log('Hello World');


async function pullWord(){
    const promise = await fetch('https://words.dev-apis.com/word-of-the-day');
    const data = await promise.json();
    return data.word;
}

pullWord().then( word => {
    const rows = document.querySelectorAll('.row');
let box_grid = [];

for (let i=0; i<6; i++){
    const row = rows[i];
    let boxes = row.querySelectorAll('.letter-box');
    box_grid.push(boxes);
}

    let row = 0;
    let box_index = 0;

    function click(event){
        if(event.code[0]=='K' && box_index < 5){
            box_grid[row][box_index].innerHTML = event.key.toUpperCase();
            box_index++;
        } else if(event.code == 'Enter'){
            enter();
        } else if(event.code == 'Backspace'){
            backspace();
        }
    }

    window.addEventListener('keyup', click);
    
    
    function backspace(){
        if (box_index > 0){
            box_index-=1;
            box_grid[row][box_index].innerHTML = '';
        }
    }
    
    function enter(){
        let correct = 0;
        const curRow = box_grid[row];
        if(box_index > 4){
            row++;
            box_index = 0;
            for (let i=0; i<5; i++){
                let letter = curRow[i].innerHTML;
                for (let j=0; j<5; j++){
                    let correctLetter = word[j].toUpperCase();
                    if (letter == correctLetter){
                        if (i==j) {
                            curRow[i].classList.add('letter-correct');
                            correct += 1;
                            console.log(correct);
                        }
                        else curRow[i].classList.add('letter-yellow');
                    }
                }
                if (curRow[i].classList.length == 1) curRow[i].classList.add('letter-wrong');
            }
            if (!checkGame(correct) && row > 5){
                alert('You Lost')
                endGame();
            };
        } 
    }
    
    function checkGame(correct){
       if(correct==5){
        alert('You Won');
        endGame();
        return 1;
       }
       else return 0;
    }

    function endGame(){
        window.removeEventListener('keyup', click);
    }
})





