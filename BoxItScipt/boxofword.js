const box_list_of_words ={

    drawline:function drawLine(number){
        let horizontal_bars = '';
        for(let i = 1; i <= number;i++){
            horizontal_bars += "-"
            }
            return horizontal_bars;
    },

    drawTopBorder: function drawTopBorder(number){
        let topLeftBar = "┌";
        let topRightBar = "┐";
        let topBar = topLeftBar + topRightBar;
        // console.log(topBar);
        for(let i = 0; i <= number; i++){
            topBar = topLeftBar + this.drawline(number) + topRightBar;
        }
         return topBar;
    },

    drawMiddleBorder: function drawMiddleBorder(number){
        let middleLeftBar = "├";
        let middleRigthBar = "┤";
        let middleBar = middleLeftBar + middleRigthBar;
        for(let i = 0; i <= number; i++){
            middleBar = middleLeftBar + this.drawline(number) + middleRigthBar;
        }
         return middleBar;
    },

    drawBottomBorder: function drawBottomBorder(number){
        let bottomLeftBar = "└";
        let bottomRigthtBar = "┘";
        let bottomBar = bottomLeftBar + bottomRigthtBar;
        for(let i = 0; i <= number; i++){
            bottomBar = bottomLeftBar + this.drawline(number) + bottomRigthtBar;
        }
         return bottomBar;
    },

    drawBarsAround: function drawBarsAround(string){
        let bar = "|";
        let wordWithBar = bar + string + bar;
        return wordWithBar;
    },

    boxIt: function boxIt(arr){
        // first, count max words number 
        let maxWordLength = arr[0].length;
        for(let word of arr){
            if(maxWordLength < word.length){
                maxWordLength = word.length;
            }//if
         }//for
        let boxTop = this.drawTopBorder(maxWordLength);    
        let boxMiddle = this.drawMiddleBorder(maxWordLength);
        let boxBottom = this.drawBottomBorder(maxWordLength);
        let noword =`${boxTop}\n${boxBottom}`
        let arrayWord = []; 
        let spaceFromMaxLength = 0;
        let space =" ";
        let wordInBox='';
        let barWord =[];
        for(let word of arr){
            spaceFromMaxLength =  maxWordLength - word.length;
            for(let i = 0;i < spaceFromMaxLength;i++){
                word = word + space;
            }
            arrayWord.push([word]);
        } //for
        
        for(let i = 0; i < arrayWord.length; i++){
            barWord.push(this.drawBarsAround(arrayWord[i])); 
            // wordInBox += `${barWord[i]}\n${boxMiddle}\n`;
            if(i === 0){
                wordInBox += `${boxTop}\n${barWord[i]}\n${boxMiddle}\n`
            }else if(i < arrayWord.length-1){
                wordInBox +=`${barWord[i]}\n${boxMiddle}\n`;
            }
            else if(i === arrayWord.length-1){
                wordInBox += `${barWord[i]}\n${boxBottom}`
            }
            
            // (i < arrayWord.length-1){
            //     wordInBox = `${barWord[i]}\n${boxMiddle}\n`;
            // }else if (i = arrayWord.length-1){
            //     wordInBox = `${barWord[i]}\n${boxMiddle}\n${boxBottom}`
            // }else if(i === 0){
            //     wordInBox = `${boxTop}\n${barWord[i]}\n${boxMiddle}\n`
            // }
           
                
                // \n${boxMiddle}\n${boxBottom}\n`;
            }//for
            return wordInBox;
        },//boxIt
        

    }//box_list_of_word
       

        // stringWithSpace = arrayWord.join(',')
        

        // let wordInBox = `${boxTop}\n${barWord}\n${boxMiddle}\n${boxBottom}`;
        // return wordInBox;  

// let a = 4;
// let b = 1;
// let c = 8;

// console.log(box_list_of_words.drawline(a));
// console.log(box_list_of_words.drawTopBorder(c));
// console.log(box_list_of_words.drawMiddleBorder(c));
// console.log(box_list_of_words.drawBottomBorder(c));
// console.log(box_list_of_words.drawBarsAround("my name is Dan"));
// console.log(box_list_of_words.drawBarsAround("   You are Bill"));
console.log(box_list_of_words.boxIt(['Jon Snow','Cersei Lannister','Daenerys Targaryen', 'Kota Watanabe']));