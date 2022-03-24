//--------- Them sp vao giô-------------

const btn = document.querySelectorAll(".addtocart");
btn.forEach(function(button,index){
button.addEventListener("click", function(event){
    var btnitem = event.target
    var product = btnitem.parentElement
    var productimg = product.querySelector("img").src
    var productname = product.querySelector("p").innerText
    var productprice = product.querySelector(".product-pricenew").innerText
    addcart(productimg,productname,productprice)
    
})
})
function addcart(productimg,productname,productprice){
    var addtr = document.createElement("tr")
    var cartitem = document.querySelectorAll("tbody tr")
    var cartitemlength = cartitem.length
    var productT = document.querySelectorAll(".productname")
    for ( var i= 0; i < cartitemlength; i++){
        if(productT[i].innerText == productname) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = `<tr> <td style="display: flex; align-items: center;width: 300px;"><img style="width: 70px;"src="`+productimg+`" alt=""><span class= " productname">`+productname+`</span></td> <td><span class= "productprice">`+productprice+`</span> <sup>đ</sup></td> <td><input style="width: 30px; " type="number" value="1" min="1"></td>   <td style="cursor: pointer;" class= "xoa">Xoá</td></tr>`
    addtr.innerHTML = trcontent
    var carttable = document.querySelector("tbody")
    carttable.append(addtr)
 //----------xoa sp----------------   
    var btnxoa = document.querySelectorAll(".xoa")    
    btnxoa.forEach(function(button,index){
        button.addEventListener("click",(event)=>{
            var btnitem1 = event.target
            var btnproduct1 = btnitem1.parentElement
            btnproduct1.remove()
            cartotal()
        })
    })
 cartotal()
}

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
    
        
    update()  
    attendcart()
   }   
   

//------------cap nhat so sp---------------

function update(){
    var cartitem1 = document.querySelectorAll("tbody tr")
    for (var i =0; i< cartitem1.length;i++){
        var inputvalue1 = cartitem1[i].querySelector("input")
        inputvalue1.onclick = () => {
        cartotal();  
       
       
        }
    }
        
}
//------------hien thi cart---------------
function attendcart(){
    var cartitem = document.querySelectorAll("tbody tr")
    var nocart = document.querySelector(".nocart")
    var cartt = document.querySelector(".cart")
    
    if ( cartitem != null){
        nocart.style.display = 'none'
        cartt.classList.add("cartactive")
        
    } 
}
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




