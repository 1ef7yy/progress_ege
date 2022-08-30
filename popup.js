const show = () => {
  popup = document.getElementsByClassName("popup")[0];
  popup.style.opacity = 1;
  popup.style.transition = "0.4s";
  popup.style.pointerEvents = "all";
};

const hide = () => {
  popup = document.getElementsByClassName("popup")[0];
  popup.style.opacity = 0;
  popup.style.transition = "0.4s";
  popup.style.pointerEvents = "none";
};

const shake = () => {
  popup = document.getElementsByClassName("popup")[0];
  popup.style.animation = "shake .3s";
};

const submit = () => {
  select_value = document.getElementById("subject").value;
  input_value = document.getElementById("pts_input").value;
  if (
    input_value == "" ||
    Number(input_value) < 0 ||
    Number(input_value) > 100 ||
    isNaN(input_value)
  ) {
    shake();
    // resetting the shaking animation after its done
    setTimeout(function () {
      popup.style.animation = "";
    }, 400);
  } else {
    // from db.js
    set(select_value, input_value);
    hide();
  }
};
