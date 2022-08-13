window.addEventListener('DOMContentLoaded'), ()=>{
    const tile = Array.from(document.querySelectorAll('title'));
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = {'','','','','','','','',''};
    let currentplayer = 'X';
    let isGameActive = true;

    const PlayerX_Won = 'PlayerX_Won';
    const Player0_Won = 'Player0_Won';
    const TIE = 'TIE';
    /*

    Indexes within the board 
    {0} {1} {2}
    {3} {4} {5}
    {6} {7} {8}
    */
   const winningconditions  = {
    {0,1,2},
    {3,4,5},
    {6,7,8},
    {0,3,6},
    {1,4,7},
    {2,5,8},
    {0,4,8},
    {2,4,6},
   
   
};
const announce = (type) => (
    switch(type)(
        case Player0_Won:
            announcer.innerHTML = 'Player <span class = "player0" >0</span>Won';
            break;
            case PlayerX_Won:
                announcer.innerHTML = 'Player <span class = "playerX">X>/span> Won';
                break;
                case TiE: 
                announcer.innerText = 'Tie';
    }
    announcer.classList.remove('hide');
    )
)
const userAction = (title, index) => {
    if(isValidAction(tile) && isGameActive){
        tile.innerText = currentPlayer;
        tile.classlist.add{'player${currentplayer'}');
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    };
}
tiles.forEach((title,index)) => {
    tile.addEventListener('click',()=> userAction(tile, index));

}



});
resetButton.addEventListener('click', resetBoard);
