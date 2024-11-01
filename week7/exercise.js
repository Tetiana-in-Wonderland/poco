Array.prototype.myForEach = myForEach; // - prototype exists for any objects

/// myForEach implementation
function myForEach(callbackfn) {

    for (let i=0; i < this.length; i++) {
        callbackfn(this[i], i);
        //console.log(i + ": " + this[i]); - same as previous line
    }

}


//usage code
let array = [1, 2, 45];

//array.myForEach = myForEach;

//array.forEach(processItem); - we wrote this in line 1

function processItem(element) {
    console.log(element);
}

function processItemWithIndex(element, index) {
    console.log(index + ": " + element);
}

array.forEach(processItem);
array.myForEach(processItem);
array.myForEach(processItemWithIndex);
array.forEach((element, index) => {
    console.log(index + ": " + element);
})
