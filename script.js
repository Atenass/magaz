    fetch('https://dummyjson.com/products')
   .then((resp)  => resp.json())
   .then((json) => add_products(json));
// распределение товаров по категориям и вывод на экран
function add_products(json) {
    let all_products = json.products;
    let content = document.querySelector(".content");
    let i = 0;
    for (const product of all_products){
        content.innerHTML += 
        `   <div class="product">
                <div>
                    <img  class="img_size" src="${product["images"][0]}">
                </div>
                    <div>
                        <p>${product.title}</p>
                        <p class="price_tx">Цена: ${product.price}</p>
                        <p>${product.description}</p>
                            <div class="forkorz" id="${i}">
                                <button>Узнать больше</button>
                            </div>
                    </div>
            </div>`;   
            i +=1; 
    }
    let item = document.querySelectorAll('.forkorz');
    for(let i = 0; i < item.length; i++){
        let click_on_item_id = item[i].id;
        item[i].addEventListener('click', (e) => {  
            console.log(all_products[click_on_item_id]);
            let product_id = all_products[click_on_item_id].id;  
            addprodforkorz;
            forkorzinaa(product_id);
        });  
    }
}

fetch('https://dummyjson.com/products/categories')
.then((resp)  => resp.json())
.then((json) => category(json));
function category(json) {
    let all_category = json;
   console.log(all_category);
  
   let choise = document.querySelector(".choise");

   for (let i = 0; i < all_category.length; i++ ){
       choise.innerHTML += 
       `   <div>
                   <a href="#" class="category">${all_category[i]}</a>
           </div>`;    
   }
}
fetch('https://dummyjson.com/products')
.then((resp)  => resp.json())
.then((json) => category(json));
function categor_menu(json) {

}

// доработать
// jQuery(document).ready(function($){
  
//     $('.korz').on('click', function(e){
//       alert('Действие выполнено');
//     })
//   });
// let korzina = {
//     'korz' : {
//         'product' : 'product'
//     }
// }
// document.onclick = event => {
//     if (event.target.classList.contains("add")) {
//         addFunction(event.targer.sataset.id);
//     }
//     if (event.target.classList.contains("delete")) {
//         removeFunction(event.targer.sataset.id);
//     }
// }
// const addFunction = id =>{
//     korzina[id]++;
// }
// const removeFunction = id =>{
//     korzina[id]--;
// }
// авторизация....
let users = [
    {
        "lg" : "admin",
        "ps" : "admin",
   
        // "lg" : "user",
        // "ps" : "user"
    }
];
let btnlog = document.querySelector(".btnlog");

btnlog.addEventListener("click", formwrap);

function formwrap() {
    let main = document.querySelector(".main");
    main.style.display = "none";
    let btnlog = document.querySelector(".btnlog");
    btnlog.style.display = "none";
    let d2 = document.querySelector(".d2");
    d2.style.display = "none";
    let section = document.querySelector(".section");
    section.style.display = "flex";
    let frmbut = document.querySelector(".frmbut");
    frmbut.addEventListener("click", getLogPass);
}
function getLogPass() {
    let frmlog = document.querySelector("#frmlog").value;
    let frmpass = document.querySelector("#frmpass").value;

    console.log("Login ->"+frmlog);
    console.log("Password ->"+frmpass);
    checkLogPass(frmlog, frmpass);
}
function checkLogPass(frmlog, frmpass) {
    let flag = false;
    for (const user of users) {
        if (user.lg == frmlog && user.ps == frmpass) {
            flag = true;
            let section = document.querySelector(".section");
            section.style.display = "none";
            let btnlog = document.querySelector(".btnlog");
            btnlog.style.display = "none";
            let main = document.querySelector(".main");
            main.style.display = "flex";
            let img = document.querySelector(".img");
            img.style.display = "flex";
            let d2 = document.querySelector(".d2");
            d2.style.display = "flex";
        }
    }
    if (!flag) {
        section.innerHTML = "Error";
    }
}

let week = document.querySelector(".week");
week.addEventListener("click", go_main);

let img = document.querySelector(".img");
img.addEventListener("click", formkorz);

function formkorz() {
    let main = document.querySelector(".main");
    main.style.display = "none";
    let log_in = document.querySelector(".log_in");
    log_in.style.display = "none";
    let no_buy = document.querySelector(".no_buy");
    no_buy.style.display = "flex";
    let week = document.querySelector(".week");
    week.addEventListener("click", go_main);
}
function go_main() {
    let main = document.querySelector(".main");
    main.style.display = "none";
    let info_prod = document.querySelector(".info_prod");
    info_prod.style.display = "flex";
//     let main = document.querySelector(".main");
//     main.style.display = "flex";
//     let log_in = document.querySelector(".log_in");
//     log_in.style.display = "flex";
//     let no_buy = document.querySelector(".no_buy");
//     no_buy.style.display = "none";
//     let section = document.querySelector(".section");
//     section.style.display = "none";
}



// let forkorz = document.querySelector(".forkorz");
// forkorz.addEventListener("click",addprodforkorz);

    
function forkorzinaa() {
    let main = document.querySelector(".main");
    main.style.display = "none";
    let info_prod = document.querySelector(".info_prod");
    info_prod.style.display = "flex";
    let week = document.querySelector(".week");
    week.addEventListener("click", go_main);
}

function addprodforkorz(all_products) {
    let i = 0;
    let product_id = all_products[click_on_item_id].id; 
    for (const product of product_id){
        info_prod.innerHTML += 
        `   <div class="product">
                <div class="product" id="${i}">
                    <div>
                        <img  class="img_size" src="${product["images"][0]}">
                    </div>
                        <div>
                            <p>${product.title}</p>
                            <p class="price_tx">Цена: ${product.price}</p>
                            <p>${product.description}</p>
                        <div>
                            <ul class="inf_prod">    
                                <div class="forkorz">
                                    <button >В корзину</button>
                                </div>
                            </ul>
                </div>
            </div>`;    
            i += 1;
    }
    let item = document.querySelectorAll('.forkorz');
    for(let i = 0; i < item.length; i++){
        let click_on_item_id = item[i].id;
        item[i].addEventListener('click', (e) => {  
            console.log(all_products[click_on_item_id]);
        });  
        let item = document.querySelectorAll('.product');
        for(let i = 0; i < item.length; i++){
            let click_on_item_id = item[i].id;
            item[i].addEventListener('click', (e) => {
                let product_id = all_products[click_on_item_id].id;
                clear_content();    
                add_info_about_product(product_id);
            }); 
    }
}
}

    //         <div class="basket_btn" id="${i}">
    //             <div id="basket_btn">
    //                     <a href="#" class="basket_btn_text">Купить</a>
    //             </div>
    //         </div>
    //     </div>`;
    //     i += 1;
    // }
    // Слушатель нажатия на карточку продукта
//     let item = document.querySelectorAll('.product');
//     let add_product_to_basket = document.querySelectorAll('.basket_btn');
//     for(let i = 0; i < item.length; i++){
//         let click_on_item_id = item[i].id;
//         item[i].addEventListener('click', (e) => {
//             let product_id = all_products[click_on_item_id].id;
//             clear_content();    
//             add_info_about_product(product_id);
//         });  
//         let click_on_buy_id = add_product_to_basket[i].id;
//         add_product_to_basket[i].addEventListener('click', (e) => {
//             let product_id = all_products[click_on_buy_id].id;
//             add_to_basket(product_id, all_products);
//         });  
//     }   
// }





















// function add_info_about_product(product_id){
//     let about_product_page = document.querySelector(".about_product_page");
//     fetch('https://dummyjson.com/products/' + product_id)
//     .then(response => response.json())
//     .then((json)=>{
//         about_product_page.innerHTML = `
//         <h1 class="title_product">${json.title}</h1>
//         <div class="picture">
//             <ul class="product_picture_selector">
//                 <li>
//                     <img class="product_img" src="${json.images[0]}" alt="product_photo">
//                 </li>
//             </ul>
//         </div>
//         <br>
//         <p class="brand_of_product">Производитель: ${json.brand}</p>
//         <br>
//         <p class="description_of_product">${json.description}</p>
//         <br>
//         <p class="description_of_product">Рейтинг продукта: <span class="mark_product">${json.rating}&#9733;</span></p>
//         <br>
//         <div class="product_page_basket_btn">
//             <div id="basket_btn">
//                     <a href="#" class="basket_btn_text">Купить за <span class="price_product">${json.price}$</span></a>
//             </div>
//         </div>
//     `;
//     });
// }
