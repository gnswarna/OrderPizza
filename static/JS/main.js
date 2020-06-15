$( document ).ready(function() {
	
	$.ajax({
            url: "/prices/",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            success: function(resultData) {
		localStorage.setItem('pizza_data', resultData);
            },
            error : function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus)
            },
        });

	localStorage.setItem('cart_count', '0');
	localStorage.setItem('sub_total_e', '0');
	localStorage.setItem('sub_total_d', '0');
	localStorage.setItem('total_d', '0');
	localStorage.setItem('total_e', '0');

	localStorage.setItem('pizza_1', '0');
	localStorage.setItem('pizza_2', '0');
	localStorage.setItem('pizza_3', '0');
	localStorage.setItem('pizza_5', '0');
	localStorage.setItem('pizza_6', '0');
	localStorage.setItem('pizza_7', '0');
	localStorage.setItem('pizza_8', '0');
	localStorage.setItem('pizza_9', '0');
	localStorage.setItem('pizza_10', '0');
	localStorage.setItem('pizza_11', '0');
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
	cart_count = 0;
	pizza_data = $.parseJSON(localStorage.getItem('pizza_data'));
	for (var i = 0; i < 12; i++) {
		if(i != 4){
  			if(localStorage.getItem('pizza_'+i) > 0 ){
				
				$("#cart_"+i).removeClass("hide");
				dollr = Number(localStorage.getItem('pizza_'+i)) * Number(pizza_data['pizza_'+i+'_d']);
				sub_total_d = Number(sub_total_d) + dollr; 
				euro = Number(localStorage.getItem('pizza_'+i)) * Number(pizza_data['pizza_'+i+'_e']);
				sub_total_e = Number(sub_total_e) + euro; 
				$("#"+i+"_cartcost").text('€'+ euro +' / $' + dollr);
				cart_count = cart_count + Number(localStorage.getItem('pizza_'+i))
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
	if(cart_count > 0){
		$("#cart_number").text('Cart ('+  cart_count +')');
	}
	else{	
		$("#cart_number").text('Cart');
	}
}

function onplusclick(type){
	id=$(type).attr('id').split('_')[0];
	text_id = id+'_text';
	value = Number($('#'+text_id).val());
	$('#'+text_id).val(value+1)
	carttext_id = id+'_carttext';
	$('#'+carttext_id ).val(value+1)
	localStorage.setItem('pizza_'+id,value+1);
	carthandling();
	
}

function onminusclick(type){
	id=$(type).attr('id').split('_')[0];
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

function ontextclick(type){
	id=$(type).attr('id').split('_')[0];
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
	pizza_data = $.parseJSON(localStorage.getItem('pizza_data'));	
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

	$('#order_dc').text('€ ' + pizza_data['dc_e'] + '/ $ ' + pizza_data['dc_d']);
	$('#order_sub_total').text('€ ' + localStorage.getItem('sub_total_e') + '/ $ ' + localStorage.getItem('sub_total_d'));

	localStorage.setItem('total_d', Number(pizza_data['dc_d'])+Number(localStorage.getItem('sub_total_d')));
	localStorage.setItem('total_e', Number(pizza_data['dc_e'])+Number(localStorage.getItem('sub_total_e')));

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