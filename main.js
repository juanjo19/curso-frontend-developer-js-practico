const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMobile = document.querySelector(".menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
iconMobile.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleShoppingCar);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");

}

function toggleShoppingCar(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}