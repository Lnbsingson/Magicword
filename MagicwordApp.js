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
    },
    GetWords(arr){
        console.log(this.SMate1[arr[0]]+' '+this.SMate2[arr[1]]+' '+this.SMate3[arr[2]])
    }
}

MagicWord.GetWords(MagicWord.GetRandomNums())