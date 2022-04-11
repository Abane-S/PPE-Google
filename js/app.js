document.addEventListener("DOMContentLoaded", () => {
    let link = document.querySelector("main p a");
    let btn1 = document.querySelector("main nav a:first-child");
    let btn2 = document.querySelectorAll("main nav a:nth-child(2)");

    link.addEventListener("click", () => {
        if (btn1.innerHTML === `<a href="">Recherche Google</a>` && btn2.innerHTML === `<a href="">J'ai de la chance</a>`){
            btn1.innerHTML = `<a href="">Google Search</a>`;
            btn2.innerHTML = `<a href="">I'm lucky</a>`;
        }
        else{
            btn1.innerHTML = `<a href="">Recherche Google</a>`;
            btn2.innerHTML = `<a href="">J'ai de la chance</a>`;
        }
        link.innerHTML = `<p>Google in : <a href="">French</a></p>`;
    });
});