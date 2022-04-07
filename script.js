window.addEventListener('load', () =>{
const show = () =>{
    const shoppinglist = localStorage.getItem("shoppinglist")
    ? JSON.parse(localStorage.getItem("shoppinglist"))
    : [];
    localStorage.setItem("shoppinglist", JSON.stringify(shoppinglist));
    let carttable = document.querySelector("tbody")
    carttable.innerHTML = ``
    shoppinglist.map((d,index) =>{        
        let addtr = document.createElement("tr")
        addtr.innerHTML = `<tr> <td style="display: flex; align-items: center;width: 300px;"><img style="width: 70px;"src="`+d.img+`" alt=""><span class= " productname">`+d.name+`</span></td> <td><span class= "productprice">`+d.price+`</span> <sup>đ</sup></td> <td><input style="width: 30px; " type="number" value="`+d.num+`" min="1"></td>   <td style="cursor: pointer;" class= "xoa">Xoá</td></tr>`
        carttable.append(addtr)
        
    })
    var nocart = document.querySelector(".nocart")
    var cartactive = document.querySelector(".cartactive")
    if ( shoppinglist == 0){
        cartactive.style.display = 'none'
       
    }else{
        nocart.style.display= 'none'
        
    }  
//----------xoa sp----------------   
    var btnxoa = document.querySelectorAll(".xoa")    
    btnxoa.forEach(function(button,index){
        button.addEventListener("click",(event)=>{
            const shoppinglist = localStorage.getItem("shoppinglist")
        ? JSON.parse(localStorage.getItem("shoppinglist"))
        : [];
            shoppinglist.splice(index, 1);
            localStorage.setItem("shoppinglist", JSON.stringify(shoppinglist));
            show();
            cartotal()            
        })
    })  
//--------------update----------
    var cartitem1 = document.querySelectorAll("tbody tr")
    cartitem1.forEach((button,index) =>{
        var inputnumber = cartitem1[index].querySelector("input")
        inputnumber.onclick = () => {        
            shoppinglist[index].num = inputnumber.value
            console.log(shoppinglist[index].num);
       
            localStorage.setItem("shoppinglist", JSON.stringify(shoppinglist));    
         
        cartotal();  
        }  
    })
    }        
show()    
cartotal()
//--------- Them sp vao giô-------------
const btn = document.querySelectorAll(".addtocart")
btn.forEach(function(button,index){
    button.addEventListener("click", function(event){
        var btnitem = event.target
        var product = btnitem.parentElement
        var productimg = product.querySelector("img").src
        var productname = product.querySelector("p").innerText
        var productprice = product.querySelector(".product-pricenew").innerText
        var cartitem = document.querySelectorAll("tbody tr")
        var cartitemlength = cartitem.length
        var productT = document.querySelectorAll(".productname")
        for ( var i= 0; i < cartitemlength; i++){
          if(productT[i].innerText === productname) {
              alert("Sản phẩm của bạn đã có trong giỏ hàng")
              return
            }
        }     
        const shoppinglist = localStorage.getItem("shoppinglist")
        ? JSON.parse(localStorage.getItem("shoppinglist"))
        : [];
        shoppinglist.push({
            name: productname,
            price: productprice,
            img: productimg, 
            num: 1,           
          });
        localStorage.setItem("shoppinglist", JSON.stringify(shoppinglist));  
        console.log(shoppinglist);
        show()
        cartotal()
    })
})
//--------- Total price-------------

function cartotal(){
    var cartitem = document.querySelectorAll("tbody tr")
    var caritemlength = cartitem.length
    var total = 0
    for ( var i= 0; i< caritemlength; i++){        
        var inputvalue = cartitem[i].querySelector("input").value
        var inputprice = parseFloat(cartitem[i].querySelector(".productprice").innerText)
        // totalitem = (inputvalue * inputprice *1000000).toLocaleString('de-DE') 
        totalitem = inputvalue * inputprice 
        total = total + totalitem
        // totalA = (total *1000000).toLocaleString('de-DE') 
        var num = document.querySelector(".header-cart-num")
        num.innerHTML = caritemlength       
    }
    var cartotalA = document.querySelector(".totalnumber")   
       cartotalA.innerHTML = (total *1000000).toLocaleString('de-DE')
   } 
})   

//---------------chatbox------------------
const mess = document.querySelector('.fa-facebook-messenger')
const active = document.querySelector('.chatboxactive')
mess.onclick = () =>{
    if (active.style.display === 'none') {
        active.style.display = 'block';
    } else {
        active.style.display = 'none';
    }
}       
const chatinput = document.querySelector('.chatboxinput')
const send = document.querySelector('.fa-paper-plane')
send.onclick = () =>{
    if (chatinput.value != ''){
        const checkboxlistitem = document.createElement('div')
    const checkboxlist = document.querySelector('.chatboxlist')
    checkboxlistitem.innerHTML = `<div class="chatboxlistitem">`+chatinput.value+`</div>`
    checkboxlist.append(checkboxlistitem)
    chatinput.value = null
    if(checkboxlistitem.innerText == 'hello'){
        const checkboxlistitem1 = document.createElement('div')
        const checkboxlist = document.querySelector('.chatboxlist')
        checkboxlistitem1.innerHTML = `<div class="chatboxlistitem1">Chào bạn! Mình có thể giúp gì được cho bạn?</div>`
        checkboxlist.append(checkboxlistitem1)
    }
    }    
}
document.onkeydown = function(e){
    if(e.which ==13){
        if (chatinput.value != ''){
            const checkboxlistitem = document.createElement('div')
        const checkboxlist = document.querySelector('.chatboxlist')
        checkboxlistitem.innerHTML = `<div class="chatboxlistitem">`+chatinput.value+`</div>`
        checkboxlist.append(checkboxlistitem)
        chatinput.value = null
        if(checkboxlistitem.innerText == 'hello'){
            const checkboxlistitem1 = document.createElement('div')
            const checkboxlist = document.querySelector('.chatboxlist')
            checkboxlistitem1.innerHTML = `<div class="chatboxlistitem1">Chào bạn! Mình có thể giúp gì được cho bạn?</div>`
            checkboxlist.append(checkboxlistitem1)
        }
        }
    }
}
const x = document.querySelector('.x')
x.onclick = () =>{
    const chat = document.querySelectorAll('.chatboxlistitem')
    const chat1 = document.querySelectorAll('.chatboxlistitem1')
    active.style.display = 'none'
    chat.forEach(function(e){
        e.remove()     
    })
    chat1.forEach(function(e){
        e.remove()
    })
    
}
//-----------------responsive--------------
const menu = document.querySelector(".menu");
const options = document.querySelector(".header-nav");
console.log(menu);
menu.addEventListener("click", () => {
    console.log(1);
  options.classList.add("header-nav-active");
  turnoff = document.createElement('div')
  turnoff.innerHTML = `<i class="fa-solid fa-xmark"></i>`
  options.append(turnoff)
  turnoff.classList.add("turnoff");
  turnoff.addEventListener('click', () =>{
      options.classList.remove("header-nav-active")
  })
});



