$( document ).ready(function() {
	$('#login').click(onloginclick)
	$('#orders').click(onordersclick)
	$('#cart').click(oncartclick)
	$('#menu').click(onmenuclick)

	$('#login_but').click(onloginbutclick)
	$('#forgot_password').click(onforgotpwdclick)
	$('#new_user').click(onnewuserclick)
	$('#confirm_order').click(onconfirmorderclick)
	$('#menutocart').click(oncartclick)
	$('#carttomenu').click(onmenuclick)
	$('#carttoorder').click(oncarttoorderclick)
	$('#login_email').change(onloginemailchange)
	$('#update_pwd').click(onupdatepwdclick)
	$('#register').click(onregisterclick)



});

function removeactive(){
	$("#login").removeClass("active");
	$("#orders").removeClass("active");
	$("#cart").removeClass("active");
	$("#menu").removeClass("active");

	$("#login_div").addClass("hide");
	$("#forgotpwd_div").addClass("hide");
	$("#newuser_div").addClass("hide");
	$("#menu_div").addClass("hide");
	$("#cart_div").addClass("hide");
	$("#orders_div").addClass("hide");
	$("#order_form_div").addClass("hide");
	$("#confirm_order_div").addClass("hide");

}

function oncarttoorderclick(){		
 	removeactive();
	$("#order_form_div").removeClass("hide");
}

function onconfirmorderclick(){		
	name = $('#order_name').val();
	phoneno = $('#order_phoneno').val();	
	address = $('#order_address').val();
	if(name && phoneno && address){
		if(validatephone(phoneno)){
			removeactive();
			$("#confirm_order_div").removeClass("hide");
		}
		else{
			alert('Entered Phone Number is Wrong');
		}
		
	}
	else{
		alert('name , phone number and address should not be empty..');
	}

 	
}

function onloginclick(){		
 	removeactive();
	$("#login").addClass("active");
	$("#login_div").removeClass("hide");
}

function onforgotpwdclick(){		
 	removeactive();
	$("#login").addClass("active");
	$("#forgotpwd_div").removeClass("hide");
}

function onnewuserclick(){		
 	removeactive();
	$("#login").addClass("active");
	$("#newuser_div").removeClass("hide");
}

function onloginbutclick(){
	email = $('#login_email').val();
	password = $('#login_pwd').val();	
	if(email && password){
		removeactive();
		$("#menu").addClass("active");
		$("#menu_div").removeClass("hide");
		$("#login").addClass("hide");
		$("#orders").removeClass("hide");
		$('#user_name').text(email);
	}
	else{
		alert('Email and Password should not be empty..');
	}
 	
}

function onordersclick(){
	removeactive();
	$("#orders").addClass("active");
	$("#orders_div").removeClass("hide");
}

function oncartclick(){
	removeactive();
	$("#cart").addClass("active");
	$("#cart_div").removeClass("hide");
}

function onmenuclick(){
	removeactive();
	$("#menu").addClass("active");
	$("#menu_div").removeClass("hide");
}

function validateEmail(email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  	return emailReg.test( email );
}


function validatephone(number){
	var regex = /^[0-9\s]*$/;
	return regex.test(number);
}

function onloginemailchange(){
	email = $('#login_email').val()
	if(validateEmail(email)){
		console.log(email)
	}
	else{
		alert('Please enter a valid Email-id')
	}

}

function onloginemailchange(){
	email = $('#login_email').val()
	if(validateEmail(email)){
		console.log(email)
	}
	else{
		alert('Please enter a valid Email-id')
	}

}

function onupdatepwdclick(){
	email = $('#forgotpwd_email').val();
	password = $('#forgotpwd_pwd').val();
	repassword = $('#forgotpwd_repwd').val();

	if(email && password && repassword){
		if(!validateEmail(email)){
			alert('Please enter a valid Email-id');
		}
		if(password != repassword){
			alert('Password and Re-password should be same..');
		}
		if(validateEmail(email) && password == repassword){
			alert('Password updated successfully.');
		}
	}
	else{
		alert('Email , Password and Re-password should not be empty..');
	}
	
}

function onregisterclick(){

	email = $('#newuser_email').val();
	password = $('#newuser_pwd').val();
	repassword = $('#newuser_repwd').val();

	if(email && password && repassword){
		if(!validateEmail(email)){
			alert('Please enter a valid Email-id');
		}
		if(password != repassword){
			alert('Password and Re-password should be same..');
		}
		if(validateEmail(email) && password == repassword){
			alert('Register successfully.');
		}
	}
	else{
		alert('Email , Password and Re-password should not be empty..');
	}
}