
'use strict'


const processItemBoxes= document.querySelectorAll('.process-item-box')
const process= document.querySelector('.process')
const linkItem=document.querySelectorAll('.link-item')
const link=document.querySelector('.footer__links')
const responsiveLogo= document.querySelector('.responsive-logo')
const responsiveMenu= document.querySelector('.responsive-menu')





function SetActiveLink (active){
    linkItem.forEach(link =>{
        link.classList.remove('link-active')
    })
    linkItem[active].classList.add('link-active')
}

function SetActiveProcess (active){
    processItemBoxes.forEach(item =>{
        item.classList.remove('active-box')
    })
    processItemBoxes[active].classList.add('active-box')
}

//set process animation
processItemBoxes.forEach((item,index) => {
    item.addEventListener('mouseover', function(){
        SetActiveProcess(index)
    })
    item.addEventListener('mouseleave', function(){
        item.classList.remove('active-box')
    })
})

process.addEventListener('mouseleave', function(){
    processItemBoxes[0].classList.add('active-box')
})

//set links animation
linkItem.forEach((item,index) => {
    item.addEventListener('mouseover', function(){
        SetActiveLink(index)
    })
    item.addEventListener('mouseleave', function(){
        linkItem[index].classList.remove('link-active')
    })
})

link.addEventListener('mouseleave', function(){
    linkItem[0].classList.add('link-active')
})


responsiveLogo.addEventListener('click', function (){
    if(responsiveLogo.ariaChecked==="false"){
        responsiveLogo.ariaChecked="true"
        responsiveMenu.style.transform='scaleY(1)'
        responsiveMenu.style.height="100%"
        responsiveMenu.style.transformOrigin='top'
    }
    else{
        responsiveLogo.ariaChecked="false"
        responsiveMenu.style.transform='scaleY(0)'
        responsiveMenu.style.height="0"
    }

})