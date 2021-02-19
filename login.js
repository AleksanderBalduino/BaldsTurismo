function validarFormulario(){
	var usr = document.getElementById("txtUsuario");
	var pwd = document.getElementById("txtSenha");
		
	if (usr.value == ""){
		alert("Usuário não informado.");
		usr.focus();
		usr.style.backgroundColor = "#FF0000";
	}else{
		if (pwd.value == ""){
			alert("Senha não informada.");
			pwd.focus();
		}
	}

	if(usr.value != "" && pwd.value != ""){
		alert("Login realizado com sucesso");
		window.location.replace("principal.html");
	}else{
		alert("Tente novamente");
		usr.focus();
		usr.value = "";
		pwd.value = "";
	}
}
	
function limpar(){
	var usr = document.getElementById("txtUsuario");
	var pwd = document.getElementById("txtSenha");
			
	usr.value = "";
	usr.style.backgroundColor = "#FFFFFF";
	pwd.value = "";
}

function cancelar(){
	var x;
	var r=confirm("Você deseja mesmo sair?");
	if (r==true)
	  {
	  	window.location.replace("principal.html");
	  	x="você pressionou OK!";
	  }
}