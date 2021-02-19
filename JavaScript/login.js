function exibir(){
			alert("Engenharia da Computação");
		}
		
		function validarFormulario(){
			var usr = document.getElementById("txtUsuario");
			var pwd = document.getElementById("txtSenha");
		
			if (usr.value == ""){
				alert("Usuário não informado.");
				usr.focus();
				usr.style.backgroundColor = "#FF0000";
			}else{
				if (pwd.value==""){
					alert("Senha não informada.");
					pwd.focus();
				}
			}		
		}
		
		function limpar(){
			var usr = document.getElementById("txtUsuario");
			var pwd = document.getElementById("txtSenha");
			
			usr.value = "";
			usr.style.backgroundColor = "#FFFFFF";
			pwd.value = "";
		}