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


    function on_click_history(){
        container.style.right = "100%";

        shutter_button.addEventListener("click", on_click_shutter);
        change_view_button("#background2", "100%");
        
    }

    function on_click_now(){
        container.style.right = "200%";

        shutter_button.addEventListener("click", on_click_shutter);
        change_view_button("#background3", "200%");
    }

    function on_click_future(){
        container.style.right = "300%";

        shutter_button.addEventListener("click", on_click_shutter);
        change_view_button("#background4", "300%");

    }
}


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
        let background = document.querySelector(backgroundId);

        if(container.style.right === rightProcent){
            background.classList.toggle("flip");
        }
    }
}


select_nav_item();

