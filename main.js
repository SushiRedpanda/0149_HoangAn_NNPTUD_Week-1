// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2
let products = [
    new Product(1, "iPhone 14", 999, 5, "Electronics", true),
    new Product(2, "Samsung Galaxy", 850, 3, "Electronics", true),
    new Product(3, "AirPods Pro", 1000, 10, "Accessories", true),
    new Product(4, "Laptop HP", 1200, 2, "Electronics", false),
    new Product(5, "Ốp lưng", 900, 0, "Accessories", true)
];

// Câu 3
console.log("\n===== Câu 3: Mảng name và price =====");
let resault = products.map(function(e) {
    return {
        name: e.name,
        price: e.price
    };
});
console.log(resault);

// Câu 4
console.log("\n===== Câu 4: Sản phẩm còn hàng =====");
resault = products.filter(function(e) {
    return e.quantity > 0;
});
console.log(resault)

// Câu 5
console.log("\n===== Câu 5: Kiểm tra sản phẩm giá > 30 =====");
resault = products.some(function(e) {
    return e.price > 30;
});
console.log("Có sản phẩm giá > 30:", resault);

// Câu 6
console.log("\n===== Câu 6: Kiểmm tra Accessories có sẵn hàng =====");
let check = products.filter(function(e) {
    return e.category === "Accessories";
});
resault = check.every(function(e) {
    return e.isAvailable === true;
});
console.log("Tất cả sản phẩm Acccessories có sẵn hàng:", resault);

// Câu 7:
console.log("\n===== Câu 7: Tổng giá trị kho hàng =====");
resault = products.reduce(function(sum, e) {
    return sum + (e.price * e.quantity);
}, 0);
console.log("Tổng giá trị kho hàng:", resault);

// Câu 8:
console.log("\n===== Câu 8: Duyệt với for...of =====");
for (const element of products) {
    console.log(element.name, "-", element.category, "-", element.isAvailable);
}

// Câu 9:
console.log("\n===== Câu 9: Duyệt với for...in =====");
for (let i = 0; i < products.length; i++) {
    for (const key in products[i]) {
        console.log(`${key}: ${products[i][key]}`);
    }
    console.log("---");
}

// Câu 10:
console.log("\n===== Câu 10: Danh sách sản phẩm đang bán và còn hàng =====");
resault = products.filter(function(e) {
        return e.isAvailable === true && e.quantity > 0;
    }).map(function(e) {
        return e.name;
    });
console.log(resault);

