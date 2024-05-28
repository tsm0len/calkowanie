function f(x, formula) {
    return eval(formula);
}
function calc() {
    let formula = document.getElementById("formula").value;
    let x = eval(document.getElementById("a").value);
    let limit = eval(document.getElementById("b").value);
    let step = eval(document.getElementById("step").value);
    limit -= step;
    if (a>b) {
        alert("b is smaller than a");
    } else if (step > (limit-x)) {
        alert("Too big step");
    } else if (step === 0) {
        alert("Step cannot be 0");
    } else {
        let area = 0;
        while (x <= limit) {
            area += (f(x, formula)+f(x+step, formula))*step/2;
            x+=step;
        }
        document.getElementById("output").textContent = "Area = " + area;
    }
}
