function select_nav_item() {

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


    function on_click_history() {
        container.style.right = "100%";
        shutter_button.addEventListener("click", on_click_shutter);



        div_history.classList.add("yellow");
        div_now.classList.remove("yellow");
        div_future.classList.remove("yellow");

    }

    function on_click_now() {
        container.style.right = "200%";
        shutter_button.addEventListener("click", on_click_shutter);

        div_now.classList.add("yellow");
        div_history.classList.remove("yellow");
        div_future.classList.remove("yellow");


    }

    function on_click_future() {
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


function on_click_shutter() {
    let shutter_button = document.querySelector("#shutter_button");
    let shutter_effect = document.querySelector("#shutter_effect");
    let container = document.querySelector("#image_container");

    let popup_container = document.querySelector("#popup_container");

    shutter_effect.classList.add("shutter");

    if (container.style.right === "100%") {
        let historia_popup = document.querySelector("#historia_wrapper");
        historia_popup.style.display = "flex";
    
        let remove = historia_popup.querySelector(".remove_button");
        remove.addEventListener("click", function(){
            historia_popup.style.display = "none";
            shutter_effect.classList.remove("shutter");
        });
    }

    if (container.style.right === "200%") {
        // Här ska nutid popupen vara
        let nutid_popup = document.querySelector("#nutid_wrapper");
        nutid_wrapper.style.display = "flex";


        let exit = nutid_wrapper.querySelector(".exit_button");
        exit.addEventListener("click", function () {
            nutid_wrapper.style.display = "none";
            shutter_effect.classList.remove("shutter");
        });
    }

    if (container.style.right === "300%") {
        let future_popup = document.querySelector("#future_popup");
        future_popup.style.display = "flex";


        let remove = future_popup.querySelector(".remove_button");
        remove.addEventListener("click", function () {
            future_popup.style.display = "none";
            shutter_effect.classList.remove("shutter");
        });
    }


    //för att sedan gå tillbaka måste shutter klassen tas bort

}



function change_view_button(backgroundId, rightProcent) {

    let button = document.querySelector("#change_angle_button");
    button.addEventListener("click", on_click_rotate_image);

    let container = document.querySelector("#image_container");


    function on_click_rotate_image(event) {
        button.classList.toggle("rotate");

        let background = document.querySelector(backgroundId);
        let background2 = document.querySelector(backgroundId + "> img");

        if (container.style.right === rightProcent) {
            background.classList.toggle("flip");
            background2.classList.toggle("display");
        }
        button.setAttribute("disabled", true);
        button.style.cursor = "defualt";

        setTimeout(make_button_cooldown, 2600);
    }

    function make_button_cooldown() {
        button.removeAttribute("disabled", true);
    }
}
/*
function start_animation_on_click(){
    let h1_dom = document.querySelector("#loading_in_container > h1");
    let dark_filter = document.querySelector("#dark_filter");
    let container = document.querySelector("#loading_in_container");
    let container2 = document.querySelector("#content_wrapper");

    h1_dom.addEventListener("click", function(){
        h1_dom.classList.add("move_left");
        dark_filter.style.left = "100%";
        container.style.transform = "scale(4)";
        container.style.opacity = "0";

        container2.style.transform = "scale(1)";
    });

    container2.addEventListener("transitionend", function(){
        container.remove();
    });
}
*/


//start_animation_on_click();


select_nav_item();