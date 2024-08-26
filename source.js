const print = () => {
    const text = document.getElementById("text");
    //const text = document.querySelector("#text"); 쿼리 셀렉터로 받아오려면 아이디는 #, 클래스는 .을 붙여주고 불러와야한다. 그냥 태그 자체를 불러오려면 태그를 적어주면 된다.
    const value = text.value;
    const p = document.createElement("p");
    const div = document.createElement("div");
    p.textContent = value;
    document.getElementById("div").appendChild(p);  
    text.value = "";
}
document.getElementById("show").addEventListener("click", () => print());