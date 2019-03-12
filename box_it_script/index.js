const box_list_of_words = {
    // Create Line
    drawline:function drawLine(number){
        let horizontal_bar = '';
        for(let i = 1; i <= number;i++){
            horizontal_bar += "-"
            }
            return horizontal_bar;
    },  

    //Create TopBorder
    drawTopBorder: function drawTopBorder(number){
        let topLeftBar = "┌";
        let topRightBar = "┐";
        let topBar ='';
        for(let i = 0; i <= number; i++){
            topBar = topLeftBar + this.drawline(number) + topRightBar;
        }
         return topBar;
    },

    //Create MiddleBorder
    drawMiddleBorder: function drawMiddleBorder(number){
        let middleLeftBar = "├";
        let middleRigthBar = "┤";
        let middleBar ='';
        for(let i = 0; i <= number; i++){
            middleBar = middleLeftBar + this.drawline(number) + middleRigthBar;
        }
         return middleBar;
    },

    //Create BottomBorder
    drawBottomBorder: function drawBottomBorder(number){
        let bottomLeftBar = "└";
        let bottomRigthtBar = "┘";
        let bottomBar ='';
        for(let i = 0; i <= number; i++){
            bottomBar = bottomLeftBar + this.drawline(number) + bottomRigthtBar;
        }
         return bottomBar;
    },

    //Create bars around words
    drawBarsAround: function drawBarsAround(string){
        let bar = "|";
        let wordWithBar = bar + string + bar;
        return wordWithBar;
    },

    boxIt: function boxIt(arr){
        //Taking words from node
        let args = process.argv.slice(2);
        let wordFromTerminal = [];
        let length = args.length;
            for(let i = 0; i < length;i++){
                wordFromTerminal.push(args[i]);
                }
        // Count max words number 
        let maxWordLength = 0;
        for(let word of wordFromTerminal){
            if(maxWordLength < word.length){
                maxWordLength = word.length;
            }//end if
         }// end for

        //initialize basic box
        let boxTop = this.drawTopBorder(maxWordLength);    
        let boxMiddle = this.drawMiddleBorder(maxWordLength);
        let boxBottom = this.drawBottomBorder(maxWordLength);

        //  ajust word length to max length
        let arrayWord = []; 
        let spaceFromMaxLength = 0;
        let space =" ";
        
         for(let word of wordFromTerminal){
            spaceFromMaxLength =  maxWordLength - word.length;
            for(let i = 0;i < spaceFromMaxLength;i++){
                word += space;
            }//end child for
            arrayWord.push([word]);
        } //end parents for
        

        // 
        let wordInBox='';
        let barWord =[];
        for(let i = 0; i < arrayWord.length; i++){
            barWord.push(this.drawBarsAround(arrayWord[i])); 
            //In case only one name(ex:Jon snow)
            if(arrayWord.length === 1){ 
                wordInBox += `${boxTop}\n${barWord[i]}\n${boxBottom}\n`
            }//In case there is more than two names, fisrt name should be like below
            else if(arrayWord.length >1 && i === 0){ 
                wordInBox += `${boxTop}\n${barWord[i]}\n${boxMiddle}\n`;
            }//In case there is more than two names, middle word shold be leike below
            else if(arrayWord.length > 1 && i < arrayWord.length-1){
                wordInBox +=`${barWord[i]}\n${boxMiddle}\n`;
            }//In case there is more than two names, last name should be like below
            else if(i === arrayWord.length-1){
                wordInBox += `${barWord[i]}\n${boxBottom}`
            }            
            }//for

        //In case sring is empty    
        let noword =`${boxTop}\n${boxBottom}`
        if(arrayWord.length === 0){
            wordInBox = noword;
        }
            return wordInBox;
        },//boxIt

       
        
    
    }//box_list_of_word

// let a = 4;
// let b = 1;
// let c = 8;

// console.log(box_list_of_words.drawline(a));
// console.log(box_list_of_words.drawTopBorder(c));
// console.log(box_list_of_words.drawMiddleBorder(c));
// console.log(box_list_of_words.drawBottomBorder(c));
// console.log(box_list_of_words.drawBarsAround("my name is Dan"));
// console.log(box_list_of_words.drawBarsAround("   You are Bill"));
// console.log(box_list_of_words.drawBarsAround("   You are Bill"));
// console.log(box_list_of_words.boxIt(['Jon Snow', 'Cersei Lannister']));
// console.log(box_list_of_words.boxIt([]));
console.log(box_list_of_words.boxIt());


