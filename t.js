const products =[];
showProducts = () => {
    const products =[1,2,3,4];
    document.write(products);
}
showProducts;

kiemtra = () => {
    const products =[1,2,3,4];
    let soluong = products.length;
    if (soluong==0) {
        console.log("không có sản phẩm để hiển thị")
    } else {
        console.log(products)
    }
};
kiemtra;

addProduct = () => {
    const products =["aokhoac","quanbo"];
    let content = document.querySelector('nhap');
    let p = content.length;
    if (p<5) {
        alert("Nhập lại")
    } else {
        products[products.length] = content;
        console.log(products)
    };

};
addProduct;
