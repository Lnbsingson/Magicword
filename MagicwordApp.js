const MagicWord = {
    SMate1: ['Hello','Good Morning','Good Afternoon','Good Evening'],
    SMate2: ['Youre Doing Great!','Youre Unique','Youre one of a kind','Never Give up'],
    SMate3: ['Youre Doing Great!','Youre Unique','Youre one of a kind','Never Give up'],
    GetRandomNums (){
        var x =[]
        for (let i=0; i<4; i++){
         
        x[i]=Math.floor(Math.random()*4)
        }
        return x
    }
}

console.log(MagicWord.GetRandomNums())