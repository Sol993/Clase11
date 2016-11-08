function Mostar()
{
	alert("siempre");
	$.ajax({
        type: 'POST',
        url: "./nexo.php",
        dataType: "json",
        data: {
			queHago : "mostrarLoginSession",
			
		},
    }).then(function (objJson) {
		//alert(objJson);
		console.info(objJson);
		/*if(!objJson.Exito){
			alert(objJson.Mensaje);
			return;
		}*/
	},function (error) {
        alert(error.responseText);
    });   


}