document.addEventListener("DOMContentLoaded", () => {
    let link = document.querySelector("main p");
    let btn1 = document.querySelector("main nav a:first-child");
    let btn2 = document.querySelector("main nav a:nth-child(2)");
    console.log(link)
    console.log(btn2)
    
    link.addEventListener("onclick", () => {
/*         if (btn1.innerHTML == `<a href="">Recherche Google</a>` && btn2.innerHTML == `<a href="">J'ai de la chance</a>`){
            btn1.innerHTML = `<a href="">Google Search</a>`;
            btn2.innerHTML = `<a href="">I'm lucky</a>`;
        }
        else{
            btn1.innerHTML = `<a href="">Recherche Google</a>`;
            btn2.innerHTML = `<a href="">J'ai de la chance</a>`;
            btn1.innerHTML = `<a href="">Google Search</a>`;
            btn2.innerHTML = `<a href="">I'm lucky</a>`;
        } */
        btn1.innerHTML = `<a href="">Google Search</a>`;
        btn2.innerHTML = `<a href="">I'm lucky</a>`;
        
    });
});