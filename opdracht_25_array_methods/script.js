// Opdracht A
const addTheWordCool = function(array){
    array.push("cool");
    return array;
}

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// Opdracht B

let amountOfElementsInArray = ((array) => array.length);

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

  //Opdracht C
  let selectBelgiumFromBenelux = ((array) => array[0]);
  console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 

  //Opdracht D
  let lastElementInArray = ((array) => array[array.length -1]);

  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"

  // Opdracht E
  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
    return array.slice(1);
  }
  const impeachTrumpSplice = function(array) {
      return array.splice(1)
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(presidents);
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(presidents)

  // Opdracht F

  let stringsTogether = ((array) => array.join(" "));
  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"

  let combineArrays = ((array1, array2) => array1.concat(array2))
  console.log(combineArrays([1,2,3], [4,5,6]));
  // resultaat: [1,2,3,4,5,6]


