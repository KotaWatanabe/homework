const words = ["stranger", "codecore","banana"]

const word = () => {
    return words[Math.floor(Math.random() * words.length)];
}

word();
const wordArray = word().split("")
console.log(wordArray);
let error_count = 0
let newArray = [];
// let letterSpace = wordArray.length
// console.log(letterSpace);
// for(let i = 0; i< letterSpace; i++){
//     newArray.push("&nbsp&nbsp");
// }

console.log(newArray);

$(document).ready(() => {

    for(let i = 0; i < wordArray.length; i++){
        $('.word').append($(`<span id=${i} class="char">&nbsp&nbsp</span>`))
        console.log(newArray[i]);
        // if (newArray.includes(!"&nbsp&nbsp")){
        //     alert:("congrats")
        //       }
    }



  
    function keySelected(){
        $('button').on('click', event =>{
            $(event.currentTarget).css("background-color","salmon");
            if(!wordArray.includes(event.currentTarget.id)){
                error_count += 1;
                changeImage();
            }
            else{
                wordArray.forEach((char,index) => {
                    if(event.currentTarget.id === char){
                        newArray.push(char);
                        // $(`.char #${index}`).html(`<span id=${index} class="char">$(${char})</span>`)
                        $(`#${index}`).replaceWith(`<span id=${index} class="char">${char}</span>`)
                    }
          
                });
           console.log(newArray);
           successCheck(); 
                    }
        })
        
    }
    
    keySelected();

    // showWord();
    changeImage();
    

    console.log(newArray.length);
    console.log(wordArray.length);
    function successCheck(){
        if(newArray.length == wordArray.length){
            alert("congraturation! You win!")
        }
    }


    // function showWord(){
    //    for(let i = 0; i < newArray.length; i++){
    //     // $('.#').replaceWith($(`<span class="char">${newArray[i]}</span>`))
    //     // $('.char').html($(`<span class="char">${newArray[i]}</span>`))
    //     $('.char').html($(`<span>${newArray[i]}</span>`))
    //    }

    // }

    // images
   
    function changeImage(){
    if(error_count == 0){
        $('.picture').html($('<img src="/images/gallows.jpg">'))
    }
    if(error_count == 1){
        $('.picture').html($('<img src="/images/gallows+head.jpg">'))
    }
    if(error_count == 2){
        $('.picture').html($('<img src="/images/gallows+head+torso.jpg">'))
    }
    if(error_count == 3){
        $('.picture').html($('<img src="/images/gallows+head+torso+leg.jpg">'))
    }
    if(error_count == 4){
        $('.picture').html($('<img src="/images/gallows+head+torso+arm.jpg">'))
    }
    if(error_count == 5){
        $('.picture').html($('<img src="/images/gallows+head+torso+2leg.jpg">'))
    }
    if(error_count == 6){
        $('.picture').html($('<img src="/images/gallows+head+torso+2leg+arm.jpg">'))
    }
    if(error_count == 7){
        $('.picture').html($('<img src="/images/gallows+head+torso+2leg+2arm.jpg">'))
    }
    if(error_count > 7){
        alert("Better luck next time...")
    }
    }

});


