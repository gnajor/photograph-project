function select_nav_item(){

    let shutter_button = document.querySelector("#shutter_button");

    let div_dom = document.querySelector(".nav_item:nth-of-type(3)");
    div_dom.addEventListener("click", on_click_history);

    let background = document.querySelector("#background1");
    let background2 = document.querySelector("#background2");
    let background3 = document.querySelector("#background3");
    let background4 = document.querySelector("#background4");



    function on_click_history(){
        background.classList.toggle("right");
        background2.classList.toggle("left");

        shutter_button.addEventListener("click", on_click_shutter);
    }
}


function on_click_shutter(){
    let shutter_button = document.querySelector("#shutter_button");
    let shutter_effect = document.querySelector("#shutter_effect");

    shutter_effect.classList.add("shutter");
}


select_nav_item();