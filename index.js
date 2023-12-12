function select_nav_item(){

    let shutter_button = document.querySelector("#shutter_button");
    let container = document.querySelector("#image_container");
    let wrapper = document.querySelector("#wrapper");

    let div_history = document.querySelector(".nav_item:nth-of-type(3)");
    div_history.addEventListener("click", on_click_history);

    let div_now = document.querySelector(".nav_item:nth-of-type(2)");
    div_now.addEventListener("click", on_click_now);

    let div_future = document.querySelector(".nav_item:nth-of-type(1)");
    div_future.addEventListener("click", on_click_future);

    let item_container = document.querySelector("#item_container");


    function on_click_history(){
        container.style.right = "100%";
        shutter_button.addEventListener("click", on_click_shutter);



        div_history.classList.add("yellow");
        div_now.classList.remove("yellow");
        div_future.classList.remove("yellow");

    }

    function on_click_now(){
        container.style.right = "200%";
        shutter_button.addEventListener("click", on_click_shutter);

        div_now.classList.add("yellow");
        div_history.classList.remove("yellow");
        div_future.classList.remove("yellow");


    }

    function on_click_future(){
        container.style.right = "300%";
        shutter_button.addEventListener("click", on_click_shutter);

        div_history.classList.remove("yellow");
        div_now.classList.remove("yellow");
        div_future.classList.add("yellow");
    }
}

change_view_button("#background2", "100%");
change_view_button("#background3", "200%");
change_view_button("#background4", "300%");


function on_click_shutter(){
    let shutter_button = document.querySelector("#shutter_button");
    let shutter_effect = document.querySelector("#shutter_effect");

    shutter_effect.classList.add("shutter");
}

function change_view_button(backgroundId, rightProcent){

    let button = document.querySelector("#change_angle_button");
    button.addEventListener("click", on_click_rotate_image);

    let container = document.querySelector("#image_container");


    function on_click_rotate_image(event){
        button.classList.toggle("rotate");

        let background = document.querySelector(backgroundId);
        let background2 = document.querySelector(backgroundId + "> img");

        if(container.style.right === rightProcent){
            background.classList.toggle("flip");
            background2.classList.toggle("display");

        }
    }
}


select_nav_item();

