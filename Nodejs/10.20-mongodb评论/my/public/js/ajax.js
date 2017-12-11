
var oBtn = document.querySelector("#btn");
	console.log(oBtn);

oBtn.onclick = function(){
	$.ajax({
		url:"/users/ajax",
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data);
		}
	})
}
 