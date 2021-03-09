var filterPrd = document.querySelector('.display-filter');
var listFilter = document.querySelector('.list_prd');
var title    = document.querySelectorAll('.title');
filterPrd.addEventListener('click', () => {
    listFilter.classList.toggle('display');
    

})
document.querySelector('.display-filter').attributeName = "new value";

title.forEach(item => {
    item.addEventListener('click',() => {
        listFilter.classList.remove('display');
    
    filterPrd.innerHTML = item.innerText
          
    })
    
});
var titlePrd = document.querySelector('.title-prd');
var slectPage = document.querySelector('.select-page')
titlePrd.addEventListener('click', () => {
    titlePrd.classList.toggle('y')
    slectPage.classList.toggle('x')
})
