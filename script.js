

var N_SIZE = 3;
var matrix = createArray(N_SIZE*N_SIZE, null);

var data = [];

function createArray(len, itm) {
    var arr1 = [itm],
        arr2 = [];
    while (len > 0) {
        if (len & 1) arr2 = arr2.concat(arr1);
        arr1 = arr1.concat(arr1);
        len >>>= 1;
    }
    return arr2;
}

function gen(data, aux) {
if (aux.length >= 9)
  data.push({"values":aux, "det":det(aux)});
else {
  var a = aux.slice();
  a.push(0);
  var b = aux.slice();
  b.push(1);
  gen(data, a);
  gen(data, b);
}
}

function det(vec) {
return vec[0]*(vec[4]*vec[8]-vec[5]*vec[7]) - vec[1]*(vec[3]*vec[8]-vec[5]*vec[6]) + vec[2]*(vec[3]*vec[7]-vec[4]*vec[6]);
}

gen(data,[]);

document.getElementById('game').innerHTML = JSON.stringify(data);
