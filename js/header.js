window.addEventListener('load',() => {
    console.log('fully loaded');
    const banner = document.getElementById("banner")

    window.addEventListener('scroll', () => {
        if (window.scrollY > 72.88){
            banner.classList.remove('hidden');
            banner.classList.add('visible');
        } else {
            banner.classList.add('hidden');
            banner.classList.remove('visible');
        }
    });
});