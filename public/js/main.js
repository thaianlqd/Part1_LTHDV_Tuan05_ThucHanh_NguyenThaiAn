// public/js/main.js
document.addEventListener("click", function(e){
  if(e.target.matches("button[data-confirm]")){
    const ok = confirm("Bạn chắc chắn muốn xóa mục này?");
    if(!ok) e.preventDefault();
  }
});
