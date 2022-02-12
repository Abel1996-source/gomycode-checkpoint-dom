let effect = document.getElementById("qty1")
let effect1 = document.getElementById("qty2")
let qtyminus = document.getElementById("minus-1")
let qtyplus = document.getElementById("plus-1")
let qtyplus1 = document.getElementById("plus-2")
let qtyminus1 = document.getElementById("minus-2")
qtyminus.addEventListener("click", decrementation)
qtyminus1.addEventListener("click", decrementation1)
qtyplus.addEventListener("click", incrementation)
qtyplus1.addEventListener("click", incrementation1)
    // gestion des prix

let prix = document.getElementById("price-U")
let prixT = document.getElementById("price-T")
prixT.innerHTML = prix.innerHTML

let prix1 = document.getElementById("prix-U")
let prixT1 = document.getElementById("prix-T")
prixT1.innerHTML = prix1.innerHTML

// prix total du parnier

let total = document.getElementById("prix-total")
total.innerHTML = parseInt(prixT.innerHTML) + parseInt(prixT1.innerHTML)



function decrementation() {
    if (!isNaN(parseInt(effect.value)) && parseInt(effect.value) > 1) {
        effect.value = parseInt(effect.value) - 1
        prixT1.innerHTML = parseInt(effect.value) * parseInt(prix1.innerHTML)
        total.innerHTML = parseInt(prixT.innerHTML) + parseInt(prixT1.innerHTML)

    } else {
        return false;
    }

}

function decrementation1() {
    if (!isNaN(parseInt(effect1.value)) && parseInt(effect1.value) > 1) {
        effect1.value = parseInt(effect1.value) - 1
        prixT.innerHTML = parseInt(effect1.value) * parseInt(prix.innerHTML)
        total.innerHTML = parseInt(prixT.innerHTML) + parseInt(prixT1.innerHTML)
    } else {
        return false;
    }

}

function incrementation() {
    effect.value = parseInt(effect.value) + 1
    prixT1.innerHTML = parseInt(effect.value) * parseInt(prix1.innerHTML)
    total.innerHTML = parseInt(prixT.innerHTML) + parseInt(prixT1.innerHTML)
}

function incrementation1() {
    effect1.value = parseInt(effect1.value) + 1
    prixT.innerHTML = parseInt(effect1.value) * parseInt(prix.innerHTML)
    total.innerHTML = parseInt(prixT.innerHTML) + parseInt(prixT1.innerHTML)
}