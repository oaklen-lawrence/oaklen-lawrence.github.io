function findMaximum() {
    let num1 = document.getElementById("num1").valueAsNumber;
    let num2 = document.getElementById("num2").valueAsNumber;
    let num3 = document.getElementById("num3").valueAsNumber;

    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    document.getElementById("result").innerHTML =
        "Maximum Number: " + max;
}

document.getElementById("findBtn").addEventListener("click", findMaximum);