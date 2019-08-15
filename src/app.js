class Product {   
    constructor(name, price, year)
    {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI 
{
    addProduct(product)
    {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = 
        `<div class="card text-center mb-4">
            <div class="card-body">
                <strong> Nombre de producto </strong>: ${product.name}
                <strong> Precio </strong>: ${product.price}
                <strong> Año </strong>: ${product.year}
                <a href="#" class="btn btn-danger ml-5" name="delete">Borrar</a>
            </div>
        </div>
        `
        ;
        productList.appendChild(element);
        
    }
    resetForm()
    {
        document.getElementById("form-product").reset();
    }

    deleteProduct(element)
    {
        if(element.name === "delete") 
        {
            element.parentElement.parentElement.parentElement.remove();

        }


    }

    showMessage(message, cssClass)
    {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));
        //show in DOM 
        const container = document.querySelector("#appContainer");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);

        //time
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000);
    }
}

//DOM Events
//Add product 
document.getElementById("form-product").addEventListener("submit", function(e){
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    const product = new Product(name,price,year);

    const iu = new UI();
    iu.addProduct(product, "animated rollOut");
    iu.resetForm();
    iu.showMessage("Producto agregado satisfactoriamente", "success");
    e.preventDefault();
});

//Delete product
document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showMessage("Producto eliminado", "danger");
})