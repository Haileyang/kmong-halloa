//ACCODRIAN DROPBOX EVENT (multiple) -start
const accordianItemHeaders = document.querySelectorAll(
    ".accordian-item-header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener("click", () => {
    const current = document.querySelector(".accordian-item-header.active");

    if (current && current !== accordianItemHeader) {
        current.classList.toggle("active");
        current.nextElementSibling.style.maxHeight = 0;
    }
    accordianItemHeader.classList.toggle("active");
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
        accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
        accordianItemBody.style.maxHeight = 0;
    }
    
    });
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
        accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
        accordianItemBody.style.maxHeight = 0;
    }
});

//ACCODRIAN DROPBOX EVENT (multiple) -end

function mobileClose(){
    const mobileMenuOpen = document.querySelector('.mobile-menu-open')
    mobileMenuOpen.classList.remove('active')
}
function mobileOpen(){
    const mobileMenuOpen = document.querySelector('.mobile-menu-open')
    mobileMenuOpen.classList.add('active')
}

// MOBILE NAV SCRIPT - TOGGLE BTN
let SubNavList = document.querySelectorAll('.gnb-list')
let currentMenu


// MOBILE MENU -TOGGLE LIST
function subMenuHandler() {
    if (currentMenu) {
        currentMenu.classList.remove('active')
    }
    this.classList.toggle('active');
    currentMenu = this
}
for (var i = 0; i < SubNavList.length; i++) {
    SubNavList[i].addEventListener('click', subMenuHandler)
}