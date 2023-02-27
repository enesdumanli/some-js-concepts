const denemeArray = [{
living: true,
name: "jane"
},{
living:false,
name: "smith"
},{
living: true,
name: "adam"
}]

function filterThings(array, test){
		return array.filter(test)
}

const livingObjects = filterThings(denemeArray,obj => obj.living === true)
const objectWithLetterS = filterThings(denemeArray,obj => obj.name.includes('s'))
// console.log(livingObjects)
// console.log(objectWithLetterS)
// console.log(denemeArray)

const livingObjectNamesLetterCountFunction = (total,obj) => {
	return (
  obj.living ? total + obj.name.length : total)
}

const livingObjectNamesLetterCountNumber = denemeArray.reduce(livingObjectNamesLetterCountFunction,0)
  
const livingObjectNamesLetterCountArrowFunc = denemeArray.reduce(((total,obj) =>  obj.living ? total + obj.name.length : total
),0)

// console.log(livingObjectNamesLetterCountArrowFunc)

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

const singleArray = arrays.reduce(((accumulator,current) => {
return accumulator.concat(current);
}))
// console.log(singleArray)

// → [1, 2, 3, 4, 5, 6]

// Your code here.

function loop(value,test,update,action){
	while(true){
  	if(test(value)){
    	action(value);
      value = update(value)
    }else{
    break;
    }
  }
}

// loop(3, n => n > 0, n => n - 1, console.log);
// loop(5, n => n < 700, n => n*5, console.log)

// → 3
// → 2
// → 1


function every(array, test) {
  // Your code here.
  return array.every(test)
}

//console.log(every([1, 3, 5], n => n < 10));
// → true
//console.log(every([2, 4, 16], n => n < 10));
// → false
//console.log(every([], n => n < 10));
// → true











	
  


