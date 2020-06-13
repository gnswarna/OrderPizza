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
 	removeactive();
	$("#confirm_order_div").removeClass("hide");
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
 	removeactive();
	$("#menu").addClass("active");
	$("#menu_div").removeClass("hide");
	$("#login").addClass("hide");
	$("#orders").removeClass("hide");
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

