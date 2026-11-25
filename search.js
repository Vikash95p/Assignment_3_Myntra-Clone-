function searchProduct() {

    const input = document.getElementById("searchInput");
    const searchText = input.value.trim().toLowerCase();

    const products = document.querySelectorAll(".product-item");

    // Search empty hai
    if (searchText === "") {
        products.forEach(function(product) {
            product.style.display = "";
        });
        return;
    }

    let found = false;

    products.forEach(function(product) {

        const name = product.dataset.name.toLowerCase();

        if (name.includes(searchText)) {
            product.style.display = "";
            found = true;
        } else {
            product.style.display = "none";
        }

    });

    if (!found) {
        alert("No product found for: " + searchText);
    }
}