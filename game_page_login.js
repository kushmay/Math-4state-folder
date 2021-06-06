function addUser() {
    number_1=document.getElementById("number_1_input").value;
    number_2=document.getElementById("number_2_input").value;

localStorage.setItem("number_1", number_2);
localStorage.setItem("number_2", number_2);

window.location="quiz_game_page.html";
}