class Turtle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.direction = "EAST"
        this.totalPoint = [[x,y]];
        this.xstart = x;
        this.ystart = y;
    }
    forward(num){
        switch(this.direction){
            case "EAST":
            for(let i = 1; i <= num; i++){
            this.totalPoint.push([this.x+i, this.y])
            };
            this.x += num;
            break;
            case "WEST":
            for(let i = 1; i <= num; i++){
            this.totalPoint.push([this.x - i, this.y])
            };
            this.x -= num;
            break;
            case "NORTH":
            for(let i = 1; i <= num; i++){
            this.totalPoint.push([this.x, this.y - i])
            };
            this.y -= num;
            break;
            case "SOUTH":
            for(let i = 1; i <= num; i++){
            this.totalPoint.push([this.x, this.y + i])
            };
            this.y += num;
            break;
          }
          return this;
     }
    right(){
        switch(this.direction){
            case "NORTH":
            this.direction = "EAST"
            break;
            case "EAST":
            this.direction = "SOUTH"
            break;
            case "SOUTH":
            this.direction = "WEST"
            break;
            case "WEST":
            this.direction = "NORTH"
            break;
          }
          return this;
    }
    left(){
        switch(this.direction){
            case "NORTH":
            this.direction = "WEST"
            break;
            case "EAST":
            this.direction = "NORTH"
            break;
            case "SOUTH":
            this.direction = "EAST"
            break;
            case "WEST":
            this.direction = "SOUTH"
            break;
          }
          return this;
    }
    allPoints(){
        return this.totalPoint;
    }

    walkPoint(i,j){
        const eachPoint = this.totalPoint
        for(let e = 0; e < this.totalPoint.length;e++){
            if(eachPoint[e][0]===i && eachPoint[e][1]===j){
                return true;
            }
        }
      
            
    
        return false;
    }
    print(){
        const mark = "@";
        const blank = '-'
        const newArr = this.totalPoint;
        let maxHeight = 0;
        let maxWidth = 0;
        let minHeight = maxHeight;
        let minWidth = maxWidth;

        let rowOutPut = '';
        let tempArr = [];

        let xArr = [];
        let yArr= [];

        // console.log(newArr);
    
            for(let element of newArr){
               xArr.push(element[0]);
           }
        //    console.log(xArr);
           for(let element of newArr){
               yArr.push(element[1]);
            }
    
        
            // maxheight & Max width
            for(let i = 0; i < yArr.length; i++){
                if(maxHeight < yArr[i]){
                    maxHeight = yArr[i];
                    maxHeight = maxHeight.toString();
                }
            }

            for(let i = 0; i < xArr.length; i++){
                if(maxWidth < xArr[i]){
                    maxWidth = xArr[i];
                    maxWidth = maxWidth.toString();
                }     
            }

            // for(let num of yArr){
            //     if(minHeight > num){
            //         minHeight = num;
            //     }
            // }

            // for(let num of xArr){
            //     if(minWidth > num){
            //        minWidth = num;
            //     }
            // }
         
            // console.log(yArr);
            // console.log(maxHeight);
            // console.log(maxWidth);
       


          
        
            for (let num = 0; num <= maxHeight; num++) {
                for(let i = 0; i <= maxWidth; i++){
                     if(this.walkPoint(i,num)){
                        rowOutPut+=mark;
                     }else{
                        rowOutPut+=blank;
                     }
                }
                tempArr.push(rowOutPut);
                rowOutPut=''
               
            }    
            // console.log(newArr); 
            return console.log(tempArr.join('\n'));  
        }
     

}         

      
             
            

                     
    





// const flash = new Turtle(0,0)

// flash.forward(5);
// flash.right();
// flash.forward(5);
// flash.right();
// flash.forward(5);
// flash.right();
// flash.forward(5);
// flash.allPoints();
// flash.print();

const flash = new Turtle(0, 4)
 flash.forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)





// flash.forward(2);
// flash.forward(2);
// console.log(flash);
// console.log(flash.allPoints());
console.log(flash.print());