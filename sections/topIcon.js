const scrollToTop = document.querySelector('.topIcon');

window.addEventListener("scroll", function() {
    var scrollH = window.scrollY;
    var halfVh= window.innerHeight / 2;

    if (scrollH > halfVh) {
        scrollToTop.style.visibility = "visible";
    } else {
        scrollToTop.style.visibility = "hidden";
    }
});

scrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});