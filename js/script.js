$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('#navbar').addClass("bg-white");
        $('.nav-link,.navbar-brand').addClass("text-dark")
    } else {
        $('#navbar').removeClass("bg-white");
        $('.nav-link,.navbar-brand').removeClass("text-dark")
    }
});

$('nav button').on('click', () => {
    $('#navbar').toggleClass("bg-white");
    $('.nav-link,.navbar-brand').toggleClass("text-dark")
})