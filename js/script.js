document.addEventListener("DOMContentLoaded", function () {
    // Luas Persegi
    const luasSquareSideInput = document.getElementById("squareSideLuas");
    const luasCountButton = document.getElementById("luasCountButton");
    const luasResetButton = document.getElementById("luasResetButton");
    const luasResultOutput = document.getElementById("luasResult");

    luasCountButton.addEventListener("click", function () {
        const sideValue = parseFloat(luasSquareSideInput.value);
        const luasResult = sideValue * sideValue;
        luasResultOutput.innerHTML = `
            <p id= "luasResult">L = S x S</p>
            <p id= "luasResult">L = ${sideValue} x ${sideValue}</p>
            <p id= "luasResult">L = ${luasResult}</p>
        `;
    });

    luasResetButton.addEventListener("click", function () {
        luasSquareSideInput.value = "";
        luasResultOutput.textContent = "";
    });

    // Keliling Persegi
    const kelilingSquareSideInput = document.getElementById("squareSideKeliling");
    const kelilingCountButton = document.getElementById("kelilingCountButton");
    const kelilingResetButton = document.getElementById("kelilingResetButton");
    const kelilingResultOutput = document.getElementById("kelilingResult");

    kelilingCountButton.addEventListener("click", function () {
        const sideValue = parseFloat(kelilingSquareSideInput.value);
        const kelilingResult = 4 * sideValue;
        kelilingResultOutput.innerHTML = `
            <p id= "kelilingResult">K = 4 x S</p>
            <p id= "kelilingResult">K = 4 x ${sideValue}</p>
            <p id= "kelilingResult">K = ${kelilingResult}</p>
        `;
    });

    kelilingResetButton.addEventListener("click", function () {
        kelilingSquareSideInput.value = "";
        kelilingResultOutput.textContent = "";
    });
});
