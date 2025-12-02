var numbers = [3, 1, 2, 4, 3, 5, 1];

//1
function removdub(arr) {
    var res = [];
    for (var i=0; i<arr.length;i++) {
        var flag =false;
        for (var j=0;j<res.length; j++) {
            if (arr[i] === res[j]) {
                flag=true;
                break;
            }
        }
        if (!flag) {
            res.push(arr[i]);
        }
    }
    return res;
}

//____________________________________________________________________


 //2

var resAfterSort=numbers;
resAfterSort.sort(function (a, b) { 
    return a-b; 
});

//3_____________________________________________________________________


function filGThan50(arr) {
    var res2 =[];
    for (var i = 0;i<arr.length; i++) {
        if (arr[i] > 50) {
            res2.push(arr[i]);
        }
    }
    return res2;
}

//_____

var numAfterFilter = numbers.filter(function(num) {
    return num > 50;
});
;
//_______________________________________________________________________

// 4


//--1
function getMax(arr) {
    var max=arr[0];
    for (var i=1;i<arr.length; i++) {
        if (arr[i]>max) {
            max=arr[i];
        }
    }
    return max;
}
function getMin(arr) {
    var min=arr[0];
    for(var i = 1;i<arr.length;i++) {
        if (arr[i]<min) {
            min=arr[i];
        }
    }
    return min;
}




//-_____________________________________

function sumAll(Arr_ofNum) {
    var sum_oper = Arr_ofNum.join("+");
    var Multi_oper = Arr_ofNum.join("*");

    var sum = eval(sum_oper);
    var Multi = eval(Multi_oper);

    console.log("Sum of numbers is =", sum);
    console.log("Multi of numbers is =", Multi);
}
//--------------------

sumAll([1,2,3,4,5]);

function sum2All() {
    var arr=[];
    for(var i=0;i<arguments.length;i++) {
        arr.push(arguments[i]);
    }

    var sum_oper=arr.join("+");
    var Multi_oper=arr.join("*");

    var sum=eval(sum_oper);
    var Multi=eval(Multi_oper);

   console.log("Sum of numbers is =", sum);
    console.log("Multi of numbers is =", Multi);
}
sum2All(1,2,3,4,5);