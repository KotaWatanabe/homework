const readline = require("readline");

const menuBar = "(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit";
let listArr = [];
let checkBox = "[ ]";
let checkBoxCompleted = "[✓]";
let xComplete= Number();
let xDelete= Number();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const add = answer =>{
    listArr.push(answer);
    console.log(`\n${menuBar}`);
    rl.question(`>`,menu);
}

const menu = answer => {
    switch(true){
        // view----------------------
        case /v/.test(answer):
            if(!listArr.length){
                console.log("List is empty...\n");}
                    for(let i = 0; i<listArr.length; i ++){
                        if(listArr[i].includes(checkBoxCompleted)){
                        console.log(`${i} ${listArr[i]}`)
                        }else
                        console.log(`${i} ${checkBox} ${listArr[i]}`);  
            }
            console.log(`\n${menuBar}`);
            rl.question(`>`,menu);
        break;
        // new-------------------------
        case /n/.test(answer):
            rl.question(`\nWhat?\n>`,add);
        break;
        // complete--------------------
        case /c/.test(answer):
            xComplete = parseInt(answer[1]);
            console.log(`\nCompleted "${listArr[xComplete]}"`)
            listArr[xComplete]= checkBoxCompleted +" "+listArr[xComplete];
            console.log(`\n${menuBar}`);
            rl.question(`>`,menu);
        break;
        // delete------------------------
        case /d/.test(answer):
            xDelete = parseInt(answer[1]);
            console.log(`\nDeleted ${listArr[xDelete]}`)
            listArr.splice(xDelete,1);
            console.log(`\n${menuBar}`);
            rl.question(`>`,menu);
        break;
        // quit--------------------------
        case /q/.test(answer):
            console.log(`\nSee you soon!`);
            rl.close();
        break;
    }  
};

rl.question(
    `\nWelcome to Todo CLI\n--------------------\n${menuBar}\n>`,
     menu
  );
