function mypromise(some) {
    console.log(some)
}
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 5;
    let y= 10;
    let z=x+y;
    if (z <10) {
      myResolve("OK");
     } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {mypromise(value);},
    function(error) {mypromise(error);},
  );