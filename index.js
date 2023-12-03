function select_nav_item(){

    let div_dom = document.querySelector(".nav_item:nth-of-type(3)");
    div_dom.addEventListener("click", on_click_take_picture);

    function on_click_take_picture(){
        document.body.style.backgroundImage = "url(media/background2.jpg)";
    }
}

select_nav_item();