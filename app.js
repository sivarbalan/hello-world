function split(chocolate, children){
  function breakChocolate(breaks, start, current){
    var i;
    console.log(breaks, start, current);
    if(breaks === 0){
      current.push(chocolate.slice(start));
      var max = 0, min = Infinity;
      for(i = 0; i < current.length; i ++){
        var currentSum = current[i].reduce((total, element) => total += element);
        max = Math.max(max, currentSum);
        min = Math.min(min, currentSum);
      }
      if(!distributions[max-min]) distributions[max-min] = current.slice(0);
      current = [];
    }
    else if(breaks > 0){
      for(i = start; i < chocolate.length - breaks; i++){
        current[current.length] = (chocolate.slice(start, i+1));
        console.log("current -> " + current);
        breakChocolate(breaks-1, i+1, current);
        current.pop();
        console.log("current 2 -> " + current);
      }
    }
  }

  console.log(chocolate);
  var distributions = {};
  if(children === 1) return chocolate;
  if(children > chocolate.length){
    var divisions = [];
    for(var i = 0; i < chocolate.length; i++){
      divisions.push(chocolate.slice(i, i+1));
    }
  }
  var breaks = children - 1;
  breakChocolate(breaks, 0, []);
}



split([1,2,3,4,5,6,7], 2);