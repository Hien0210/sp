const product =[
    {
        id: 'tissot1',
        name: 'Tissot T109.610.36.032.00 Kính Sapphire',
        priceold: '7.310.000',
        pricenew: '5.848.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/236_T109.610.36.032.00.jpg',
        category: 'tissot',
    },
    {
        id: 'tissot2',
        name: 'Tissot T063.210.11.057.00 Kính Sapphire',
        priceold: '10.010.000',
        pricenew: '8.508.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/36_T063.210.11.057.00-700x700.jpg',
        category: 'tissot',
    },
    {
        id: 'tissot3',
        name: 'Tissot T086.407.16.031.000 Bộ Máy Cơ ',
        priceold: '23.130.000',
        pricenew: '19.660.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/140_T086.407.16.031.00.jpg',
        category: 'tissot',
    },
    {
        id: 'tissot4',
        name: 'Tissot T035.207.22.011.000  Bộ Máy Cơ',
        priceold: '24.320.000',
        pricenew: '20.672.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/47_T035.207.22.011.00-1-700x700.jpg',
        category: 'tissot',
    },
    {
        id: 'tissot5',
        name: 'Tissot T063.428.33.038.00 Kính Sapphire',
        priceold: '25.290.000',
        pricenew: '20.232.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/428_T063.428.33.038.00-3.jpg',
        category: 'tissot',
    },
    {
        id: 'longines1',
        name: 'Longines L2.128.4.78.612.342  Máy Cơ',
        priceold: '46.420.000',
        pricenew: '39.457.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/27_L2.128.4.78.6-700x700.jpg',
        category: 'longines',
    },
    {
        id: 'longines2',
        name: 'Longines L4.709.2.21.7 Kính Sapphire',
        priceold: '33.000.000',
        pricenew: '28.050.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/20_L4.709.2.21.7-700x700.jpg',
        category: 'longines',
    },
    {
        id: 'longines3',
        name: 'Longines L4.89.44.72.64.5 Siêu Mỏng',
        priceold: '26.620.000',
        pricenew: '23.958.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/48_L4.859.4.72.6-700x700.jpg',
        category: 'longines',
    },
    {
        id: 'longines4',
        name: 'Longines L4.90.2.11.7.5.4  Bộ Máy Cơ',
        priceold: '44.880.000',
        pricenew: '35.904.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/163_L4.908.2.11.7-700x700.jpg',
        category: 'longines',
    },
    {
        id: 'longines5',
        name: 'Longines L2.128.4.78.3 Kính Sapphire',
        priceold: '47.810.000',
        pricenew: '40.300.000',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/10/28_L2.128.4.78.3-700x700.jpg',
        category: 'longines',
    },
    {
        id: 'gshock1',
        name: 'G-Shock GSTS330D, năng lượng mặt trời',
        priceold: '9.870.000',
        pricenew: '8.389.500',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/125_GST-S330D-1ADR-700x700.jpg',
        category: 'gshock',
    },
    {
        id: 'gshock2',
        name: 'G-ShockBaby-G GG-B100-200, Bluetooth',
        priceold: '10.528.000',
        pricenew: '8.422.400',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/89_GG-B100-1A3DR-700x700.jpg',
        category: 'gshock',
    },
    {
        id: 'gshock3',
        name: 'G-Shock GST-S300G-1A2DR, World Time',
        priceold: '8.202.000',
        pricenew: '6.971.700',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/28_GST-S300G-1A2DR-700x700.jpg',
        category: 'gshock',
    },
    {
        id: 'gshock4',
        name: 'G-Shock GST-S120L, năng lượng mặt trời',
        priceold: '8.648.000',
        pricenew: '6.918.400',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/120_GST-S120L-1BDR-700x700.jpg',
        category: 'gshock',
    },
    {
        id: 'gshock5',
        name: 'G-Shock Baby-G GA-400CS, World Time',
        priceold: '4.489.000',
        pricenew: '3.815.650',
        img: 'https://fridayshopping.vn/wp-content/uploads/2020/03/21_GA-400CS-9ADR-700x700.jpg',
        category: 'gshock',
    },
]
    var gridrow = document.querySelector('.grid-row')
    var gridrow1 = document.querySelector('.grid-row1')
    var gridrow2 = document.querySelector('.grid-row2')
    
product.forEach(e =>{
    var gridcolumn = document.createElement('div')
    gridcolumn.innerHTML=  `<div class="product-home">
    <img class="product-img" src="`+e.img+`" alt="">
    <a href="https://hien0210.github.io/produce/index.html" style="text-decoration: none; color: black;" ><p class="product-name">`+e.name+`</p>   </a>    
     <div class="product-price">
     <span class="product-priceold">`+e.priceold+`</span>
         <span class="product-pricenew">`+e.pricenew+`</span> <sup>đ</sup>
    </div>
     <div class="product-star">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
    </div>  
    <button  class="addtocart">Thêm vào giỏ hàng</button>            
</div>  `        
    if( e.category === 'tissot'){
        gridrow.append(gridcolumn)
    } else{ if(e.category==='longines'){
        gridrow1.append(gridcolumn)
      } else{gridrow2.append(gridcolumn)}}
    
    gridcolumn.classList.add('grid-column')
    
})
//----------move item product-----------
const itemname = document.querySelectorAll('.product-name')
itemname.forEach((button,index) =>{
    button.addEventListener('click',(e)=>{       
const item1 = localStorage.getItem("item1")
? JSON.parse(localStorage.getItem("item1"))
: [];
   item1.push({ 
       name1 : e.target.innerHTML,
   })
   localStorage.setItem("item1", JSON.stringify(item1));
   console.log(item1);
})
})
//----------search-----------
const searchInput = document.querySelector('.header-search-ipput');
const searchResults = document.querySelector('.search-list');

searchInput.addEventListener('input', (e) => {
    console.log(1);
    const search = e.target.value.replace(/\s+/g, ' ').trim().toLowerCase(); // Loại bỏ những khoảng trống thừa khi người dùng nhập
    if (search) {
        const res = product.filter((product) =>
            product.name.toLowerCase().includes(search) // Lọc ra những kết quả True từ file data
        );
        searchResults.style.display = 'block';
        if (!res[0]) {
            searchResults.innerHTML = `
                <li class="search-no-result">
                    <i>Không tìm thấy sản phẩm</i>
                </li>
            `;
        }

        else {
            searchResults.innerHTML = res
                .map(
                    (product) => `
                    <li class="search-item">
                        <a href="https://hien0210.github.io/produce/index.html">
                            <div class="search-item__img">
                                <img src="${
                                    product.img
                                }" alt="" style="width: 100%;">
                            </div>
                            <div class="search-item__text">
                                <p class="item-name" style= "margin-bottom: 0px;">${product.name}</p>
                                <p class="item-price">
                                `+product.pricenew+`</p>
                            </div>
                        </a>
                    </li>
                `
                )
                .join('');

                const itemsearch = document.querySelectorAll('.search-item')
                itemsearch.forEach((button,index) =>{
                    button.addEventListener('click',(e)=>{       
                const item1 = localStorage.getItem("item1")
                ? JSON.parse(localStorage.getItem("item1"))
                : [];
                   item1.push({ 
                       name1 : e.target.innerHTML,
                   })
                   localStorage.setItem("item1", JSON.stringify(item1));
                   console.log(item1);
                })
                })    
            }

    } 
    
    else {
        searchResults.style.display = 'none';
    }
});

searchInput.addEventListener('focus', (e) => {
    if (e.target.value.replace(/\s+/g, ' ').trim())
        searchResults.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if (!searchResults.contains(e.target) && !searchInput.contains(e.target))
        searchResults.style.display = 'none';
});
