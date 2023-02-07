//Active Toggle
const navigation = document.querySelector(".navigation")
const menuToggle = document.querySelector(".menuToggle")
let isOpen
function activeToggle (){
    navigation.classList.toggle('open')
    isOpen = true
}
menuToggle.onclick = activeToggle

//Active list
const list = document.querySelectorAll(".list")

function activateLink(){
    list.forEach((item)=>{
        item.classList.remove('active')
        this.classList.add('active')
        if (isOpen == true){
            activeToggle()
            isOpen = false
        }
    })


}

list.forEach((item)=>{
    item.addEventListener('click', activateLink)     
})