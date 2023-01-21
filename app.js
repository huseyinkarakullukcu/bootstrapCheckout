
const ship = 15
window.addEventListener('load', ()=>{
    subTotals()
})

function subTotals(){
    //sub total
    let subTotals = document.querySelectorAll(".subTotal")
    let totals = 0
    subTotals.forEach((cur) =>{
        totals += +cur.textContent
    })
    //tax
    let tax = totals * 0.18

    document.getElementById("tax").textContent = "$"+tax.toFixed(2)
    //sub total bottom
    let lastTotals = document.getElementById("totals")
    lastTotals.textContent = "$"+totals.toFixed(2)
    let allTotal = totals + ship + tax
    //All total
    document.getElementById("allTotal").textContent = "$"+allTotal.toFixed(2)
}



rowProduct.addEventListener("click",(e)=>{
    const input = e.target.closest("div").parentNode.getElementsByTagName("input")[0]
    let price = e.target.closest(".col-md-6").querySelector(".price")
    let subTotal = e.target.closest(".col-md-6").querySelector(".subTotal")
    //console.log(subTotal)
    //
    if(e.target.parentNode.classList.contains("increase")){
        input.value++

    }else if(e.target.parentNode.classList.contains("decrease")){
       input.value > 1 && input.value--    
    }else if(e.target.classList.contains("remove")){
        const remove = e.target.closest("div").parentNode.parentNode
        remove.remove()        
    }
    calculate(price, input, subTotal)  
    subTotals()
})

function calculate(price, count, element){
    price = +price.textContent.replace('$','')
    count = +count.value
    //console.log(price.textContent, count, element)
    price *= count
    element.textContent = price.toFixed(2)
}
