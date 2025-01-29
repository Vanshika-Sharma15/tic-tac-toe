let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".winner");

let TurnO=true;//player X player O
let count=0;//to tack draw
const winPattern=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    if(TurnO){
        box.innerText="O";
        TurnO=false;
    }
    else{
        box.innerText="X";
        TurnO=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count==9 && !isWinner){
         gameDraw();
    }
   }) ;
   
});
const gameDraw=()=>{
    
    msg.innerText="Game was a draw";
    msgContainer.classList.remove("hide");
    disableBox();
    };
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
};
const showWinner=(winner)=>{
    setTimeout(()=>{
    msg.innerText=`Congratulations , Winnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();},500);
};
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val!=" " && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            showWinner(pos1val)
            return true;
        }
    }
}
};
const resetGame=()=>{
    TurnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame);
