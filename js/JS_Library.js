/***************JavaScript Object*******************/
var User = {  
	name: "", 
	email:"",
	question:"",


	
	toJSONString: function(){
		 var inputs = document.getElementsByClassName("c1"); 
            User.name = inputs[0].value; 
			User.email = inputs[1].value; 
			User.question = inputs[2].value; 
            
		return JSON.stringify(User);
		},
	
	 readFromJSONString: function(jsonparse){
	 return JSON.parse(jsonparse);
	}



};
/**************JavaScript Object ends*************/
/******************************************/
/******************Local Storage*********************/			
function saveToLocalStorage() { 
	
					var lscount = localStorage.length;  
					var Userstring=User.toJSONString();
							localStorage.setItem("User_" + lscount, Userstring); 
		
}
	





	