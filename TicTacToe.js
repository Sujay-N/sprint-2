
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")


var count = 0


one.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        one.textContent = "X"
    }
    else
        one.textContent = "O"
})

two.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        two.textContent = "X"
    }
    else
        two.textContent = "O"
})
three.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        three.textContent = "X"
    }
    else
        three.textContent = "O"
})
four.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        four.textContent = "X"
    }
    else
        four.textContent = "O"
})
five.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        five.textContent = "X"
    }
    else
        five.textContent = "O"
})
six.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        six.textContent = "X"
    }
    else
        six.textContent = "O"
})
seven.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        seven.textContent = "X"
    }
    else
        seven.textContent = "O"
})
eight.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        eight.textContent = "X"
    }
    else
        eight.textContent = "O"
})
nine.addEventListener('click', function mark() {
    count++
    if (count % 2 == 0) {
        nine.textContent = "X"
    }
    else
        nine.textContent = "O"
})






function result() {


    if ((one.textContent == two.textContent && one.textContent == three.textContent) || (one.textContent == five.textContent && one.textContent == nine.textContent) || (one.textContent == nine.textContent && one.textContent == seven.textContent)) {
        if (one.textContent == "x")
            alert("X is Winner!!!");
        else
            alert("O is Winner!!!");
    }
    else if ((seven.textContent == eight.textContent && seven.textContent == nine.textContent) || (seven.textContent == five.textContent && seven.textContent == three.textContent)) {
        if (seven.textContent == "x")
            alert("X is Winner!!!");
        else
            alert("O is Winner!!!");

    }
    else if ((four.textContent == five.textContent && four.textContent == six.textContent)) {
        if (four.textContent == "x")
            alert("X is Winner!!!");
        else
            alert("O is Winner!!!");

    }
    else if ((two.textContent == five.textContent && two.textContent == eight.textContent)) {
        if (two.textContent == "x")
            alert("X is Winner!!!");
        else
            alert("O is Winner!!!");

    }
    else if ((three.textContent == six.textContent && three.textContent == nine.textContent)) {
        if (three.textContent == "x")
            alert("X is Winner!!!");
        else
            alert("O is Winner!!!");

    }
    else {
        alert("DRAW!!!");
    }
}





function timer() {
    // for(i=1;i<=9;i++)


    var x = 0
    var counter = setInterval(function () {
        // console.log(x++)
        document.getElementById('start').innerHTML = x++
        if (x == 10) {
            clearInterval(counter)
        }

    }, 1000)
}

function reset() {
    document.getElementById("one").textContent = ""
    document.getElementById("two").textContent = ""
    document.getElementById("three").textContent = ""
    document.getElementById("four").textContent = ""
    document.getElementById("five").textContent = ""
    document.getElementById("six").textContent = ""
    document.getElementById("seven").textContent = ""
    document.getElementById("eight").textContent = ""
    document.getElementById("nine").textContent = ""
}


