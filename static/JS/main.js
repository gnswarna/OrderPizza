var pizza_1=0; var pizza_2=0; var pizza_3=0; var pizza_5=0; var pizza_6=0; var pizza_7=0; var pizza_8=0; var pizza_9=0; var pizza_10=0; var pizza_11=0;

var pizza_1_d=12; var pizza_1_e=10; var pizza_2_d=11; var pizza_2_e=9;
var pizza_3_d=13; var pizza_3_e=12; var pizza_5_d=12; var pizza_5_e=11;
var pizza_6_d=14; var pizza_6_e=12; var pizza_7_d=12; var pizza_7_e=10;
var pizza_8_d=12; var pizza_8_e=11; var pizza_9_d=12; var pizza_9_e=10;
var pizza_10_d=14; var pizza_10_e=12; var pizza_11_d=12; var pizza_11_e=11;

var dc_e=5; var dc_d=7;var sub_total_d=0; var total_d=0;var sub_total_e=0; var total_e=0;




$( document ).ready(function() {

	localStorage.setItem('pizza_1_d', '12');
	localStorage.setItem('pizza_2_d', '11');
	localStorage.setItem('pizza_3_d', '13');
	localStorage.setItem('pizza_5_d', '12');
	localStorage.setItem('pizza_6_d', '14');
	localStorage.setItem('pizza_7_d', '12');
	localStorage.setItem('pizza_8_d', '12');
	localStorage.setItem('pizza_9_d', '12');
	localStorage.setItem('pizza_10_d', '14');
	localStorage.setItem('pizza_11_d', '12');

	localStorage.setItem('pizza_1_e', '10');
	localStorage.setItem('pizza_2_e', '9');
	localStorage.setItem('pizza_3_e', '12');
	localStorage.setItem('pizza_5_e', '11');
	localStorage.setItem('pizza_6_e', '12');
	localStorage.setItem('pizza_7_e', '10');
	localStorage.setItem('pizza_8_e', '11');
	localStorage.setItem('pizza_9_e', '10');
	localStorage.setItem('pizza_10_e', '12');
	localStorage.setItem('pizza_11_e', '11');


	localStorage.setItem('dc_e', '5');
	localStorage.setItem('dc_d', '7');
	localStorage.setItem('sub_total_e', '0');
	localStorage.setItem('sub_total_d', '0');
	localStorage.setItem('total_d', '0');
	localStorage.setItem('total_e', '0');

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

	$('#1_plus').click(onplusclick)
	$('#1_minus').click(onminusclick)
	$('#1_text').change(ontextclick)
	$('#2_plus').click(onplusclick)
	$('#2_minus').click(onminusclick)
	$('#2_text').change(ontextclick)
	$('#3_plus').click(onplusclick)
	$('#3_minus').click(onminusclick)
	$('#3_text').change(ontextclick)
	$('#5_plus').click(onplusclick)
	$('#5_minus').click(onminusclick)
	$('#5_text').change(ontextclick)
	$('#6_plus').click(onplusclick)
	$('#6_minus').click(onminusclick)
	$('#6_text').change(ontextclick)
	$('#7_plus').click(onplusclick)
	$('#7_minus').click(onminusclick)
	$('#7_text').change(ontextclick)
	$('#8_plus').click(onplusclick)
	$('#8_minus').click(onminusclick)
	$('#8_text').change(ontextclick)
	$('#9_plus').click(onplusclick)
	$('#9_minus').click(onminusclick)
	$('#9_text').change(ontextclick)
	$('#10_plus').click(onplusclick)
	$('#10_minus').click(onminusclick)
	$('#10_text').change(ontextclick)
	$('#11_plus').click(onplusclick)
	$('#11_minus').click(onminusclick)
	$('#11_text').change(ontextclick)
	
	$('#1_cartplus').click(onplusclick)
	$('#1_cartminus').click(onminusclick)
	$('#1_carttext').change(ontextclick)
	$('#2_cartplus').click(onplusclick)
	$('#2_cartminus').click(onminusclick)
	$('#2_carttext').change(ontextclick)
	$('#3_cartplus').click(onplusclick)
	$('#3_cartminus').click(onminusclick)
	$('#3_carttext').change(ontextclick)
	$('#5_cartplus').click(onplusclick)
	$('#5_cartminus').click(onminusclick)
	$('#5_carttext').change(ontextclick)
	$('#6_cartplus').click(onplusclick)
	$('#6_cartminus').click(onminusclick)
	$('#6_carttext').change(ontextclick)
	$('#7_cartplus').click(onplusclick)
	$('#7_cartminus').click(onminusclick)
	$('#7_carttext').change(ontextclick)
	$('#8_cartplus').click(onplusclick)
	$('#8_cartminus').click(onminusclick)
	$('#8_carttext').change(ontextclick)
	$('#9_cartplus').click(onplusclick)
	$('#9_cartminus').click(onminusclick)
	$('#9_carttext').change(ontextclick)
	$('#10_cartplus').click(onplusclick)
	$('#10_cartminus').click(onminusclick)
	$('#10_carttext').change(ontextclick)
	$('#11_cartplus').click(onplusclick)
	$('#11_cartminus').click(onminusclick)
	$('#11_carttext').change(ontextclick)




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

function carthandling(){
	sub_total_d = 0;
	sub_total_e = 0;
	for (var i = 0; i < 12; i++) {
		if(i != 4){
  			if(localStorage.getItem('pizza_'+i) > 0 ){
				
				$("#cart_"+i).removeClass("hide");
				dollr = Number(localStorage.getItem('pizza_'+i)) * Number(localStorage.getItem('pizza_'+i+'_d'));
				sub_total_d = Number(sub_total_d) + dollr; 
				euro = Number(localStorage.getItem('pizza_'+i)) * Number(localStorage.getItem('pizza_'+i+'_e'));
				sub_total_e = Number(sub_total_e) + euro; 
				$("#"+i+"_cartcost").text('€'+ euro +' / $' + dollr);
			}
			else{
				$("#cart_"+i).addClass("hide");
				$("#"+i+"_cartcost").text('€0 / $0');
			}
		}
	}
	localStorage.setItem('sub_total_d',sub_total_d);
	localStorage.setItem('sub_total_e',sub_total_e);
	$("#cart_total").text('Total : € '+  sub_total_e +' / $ '+ sub_total_d);

}

function onplusclick(){
	id=this.id.split('_')[0];
	text_id = id+'_text';
	value = Number($('#'+text_id).val());
	$('#'+text_id).val(value+1)
	carttext_id = id+'_carttext';
	$('#'+carttext_id ).val(value+1)
	localStorage.setItem('pizza_'+id,value+1);
	carthandling();
	
}

function onminusclick(){
	id=this.id.split('_')[0];
	text_id = id+'_text';
	value = Number($('#'+text_id).val());
	if(value > 0){
		$('#'+text_id).val(value-1);
		carttext_id = id+'_carttext';
		$('#'+carttext_id ).val(value-1)
		localStorage.setItem('pizza_'+id,value-1);
	}
	carthandling();
}

function ontextclick(){
	id=this.id.split('_')[0];
	value = Number($('#'+text_id).val());
	localStorage.setItem('pizza_'+id,value);
	text_id = id+'_text';
	value = Number($('#'+text_id).val());
	$('#'+text_id).val(value)
	carttext_id = id+'_carttext';
	$('#'+carttext_id ).val(value)
	carthandling();
}

function oncarttoorderclick(){	
	var summary = ''	
 	removeactive();
	$("#order_form_div").removeClass("hide");
	
	for (var i = 0; i < 12; i++) {
		if(i != 4){
  			if(localStorage.getItem('pizza_'+i) > 0 ){
				des = $('#'+i+'_text').val() + ' X ' + $('#'+i+'_name').text();
				summary = summary + des +'\n'
			}
		}
	}
	$('#order_description').val(summary);

	$('#order_dc').text('€ ' + localStorage.getItem('dc_e') + '/ $ ' + localStorage.getItem('dc_d'));
	$('#order_sub_total').text('€ ' + localStorage.getItem('sub_total_e') + '/ $ ' + localStorage.getItem('sub_total_d'));

	localStorage.setItem('total_d', Number(localStorage.getItem('dc_d'))+Number(localStorage.getItem('sub_total_d')));
	localStorage.setItem('total_e', Number(localStorage.getItem('dc_e'))+Number(localStorage.getItem('sub_total_e')));

	$('#order_total').text('€ ' + localStorage.getItem('total_e') + '/ $ ' + localStorage.getItem('total_d'));
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