let btnMinusAll = document.querySelectorAll("#btn-minus")
let btnPlusAll = document.querySelectorAll("#btn-plus")

prixTotal()

btnPlusAll.forEach((btn) => {
    btn.addEventListener("click", incrementQuantity)

    function incrementQuantity() {
        this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1
        sousTotal(this)
        prixTotal()
    }



});
btnMinusAll.forEach((btn) => {
    btn.addEventListener("click", decrementQuantity)

    function decrementQuantity() {
        if (this.nextElementSibling.value > 1) {
            this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1
            sousTotal(this)
            prixTotal()
        }

    }


});




function sousTotal(elt) {
    let btnPlusAll = document.querySelector("#btn-plus")
    if (elt == btnPlusAll) {
        let price = elt.parentElement.parentElement.nextElementSibling.children[0]
        let qty = elt.previousElementSibling.value
        let sousT = elt.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0]
        sousT.innerHTML = parseInt(qty) * parseInt(price.innerHTML) + ' Fcfa'
    } else {
        let price = elt.parentElement.parentElement.nextElementSibling.children[0]
        let qty = elt.nextElementSibling.value
        let sousT = elt.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0]
        sousT.innerHTML = parseInt(qty) * parseInt(price.innerHTML) + ' Fcfa'
    }


}




// Ajout de panier

let name = document.querySelector(".name")
let prix = document.querySelector(".prix")
let addArticle = document.querySelector("#ajouter")

addArticle.addEventListener("click", addProduct)

function addProduct() {
    let name = document.querySelector(".name").value
    let price = document.querySelector(".prix").value

    if (name != "" && price != "") {
        document.querySelector("#all-produits").innerHTML += `  <tr>

    <td>
        <div class="produits">
            <img id="img-1" src="res/images/image-product-1-thumbnail.jpg" alt="">
            <div>
                <h5 id="article1">${name} </h5>
                <button class="remove">Suprimer</button>
            </div>
        </div>
    </td>
    <td>
        <div class="quantity">
            <button id="btn-minus"><img src="res/images/icon-minus.svg" alt=""></button>
            <input type="text" class="qty" value="1">
            <button id="btn-plus"><img src="res/images/icon-plus.svg" alt=""></button>
        </div>
    </td>

    <td>
        <h3 class="price">${price} Fcfa </h3>
    </td>
    <td>
        <div class="sousT">
            <p class="totalPrice">${price} Fcfa</p>
        </div>
    </td>

</tr>`
    }
    let btnMinusAll = document.querySelectorAll("#btn-minus")
    let btnPlusAll = document.querySelectorAll("#btn-plus")

    btnPlusAll.forEach((btn) => {
        btn.addEventListener("click", incrementQuantity)


    });
    btnMinusAll.forEach((btn) => {
        btn.addEventListener("click", decrementQuantity)

    });


    function decrementQuantity() {
        if (this.nextElementSibling.value > 1) {
            this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1
            sousTotal(this)
            prixTotal()
        }

    }


    function incrementQuantity() {
        this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1
            // sousTotal(this)
        let price = this.parentElement.parentElement.nextElementSibling.children[0]
        let qty = this.previousElementSibling.value
        let sousT = this.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0]
        sousT.innerHTML = parseInt(qty) * parseInt(price.innerHTML) + ' Fcfa'
        prixTotal()
    }
    prixTotal()
    let elts = document.querySelectorAll(".remove")
    elts.forEach((elt) => {
        elt.addEventListener("click", removeProduct)

    })


}

function prixTotal() {
    let sum = 0;
    let totalPrice = document.querySelectorAll(".totalPrice")
    let prix = document.querySelector("#prix-total")
    totalPrice.forEach((elt) => {
        sum = sum + parseInt(elt.innerHTML)
    })
    console.log(prix.innerHTML = sum);

}

function removeProduct() {

    this.parentElement.parentElement.parentElement.parentElement.innerHTML = ""
    prixTotal()
}
let elts = document.querySelectorAll(".remove")
elts.forEach((elt) => {
    elt.addEventListener("click", removeProduct)

})