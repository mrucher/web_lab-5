function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};


function mediana(arr) {
  var temp = quickSort(arr, 0, arr.length - 1);
  return temp[(arr.length - arr.length % 2) / 2];
}


function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = part(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function part(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i++;
          j--;
        }
    }
    return i;
}

var arr = [];
for(let i = 0; i < 2000; i++) {
  arr.push(random(100));
}


function logMapElements(value, key, map) {
  alert(`${key} - ${value}`);
}


alert(Array.min(arr));
alert(Array.max(arr));
alert(mediana(arr));
alert(quickSort(arr, 0, arr.length-1));


let tags = document.querySelectorAll('*');
let map = new Map();

for(let i = 0; i < tags.length; i++) {
  if (map.has(tags[i].tagName)){
    map.set(tags[i].tagName, map.get(tags[i].tagName) + 1);
  }
  else {
    map.set(tags[i].tagName, 1);
  }
}

map.forEach(logMapElements);
