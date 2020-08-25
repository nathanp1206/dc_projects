//#1

let array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
for (i = 1; i < array.length; i++) {
    if (i!=[array[i-1]]) {
        console.log("Missing Number is " + i)
        return
    }
}

//#2

function sumFinder(arr, sum){
    var len = arr.length

    for(var i = 0; i < len - 1; i++){
        for(var j = 0; j < len + 1; i++){
        if(arr[i] + arr[j] == sum) return true
        }
    }
    return false
}

//#3

function whereIBelong (arr, num){
    arr.sort((a, b) => {
        return a - b
    })
    let counter = 0
    while (num > arr[counter]){
        counter ++
    }
    return counter
}