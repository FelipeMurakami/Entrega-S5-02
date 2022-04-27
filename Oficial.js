const teste = [20]

function snapCrackle(maxValue){
    let arr = []
    let final = []

    for(let i=0; i<=maxValue; i++) {

        arr.push(i)
       
    }
    
    for(let i=0; i<arr.length; i++){

        if(arr[i] % 2 == 1 && arr[i] % 5 == 0){

            final.push('SnapCrackle')

        }else if(arr[i] % 2 == 1){

            final.push('Snap')
        
        }else if(arr[i] % 5 == 1){

            final.push('Crackle')

        }else{

            final.push(arr[i])
      }

    }
       
    console.log(arr)
    
    return console.log(final.join(', '))

}



snapCrackle(teste)