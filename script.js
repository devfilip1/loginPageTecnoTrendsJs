var button = $('#button');
var login = $('#login');
var password = $('#password');
var divLogin = $('#divLogin');
var divPassword = $('#divPassword');
var alert1 = $('p').first();
var alert2 = $('p').last();
var eyes = $('#eyes');

alert1.hide();
alert2.hide();

button.click(function(event){
    let error = false;
    
    if(!login.val()) {
        login.css('borderColor', 'red')
        alert1.show();
        error = true;
    } else{
        login.css('borderColor', 'grey');
        alert1.hide();
    }

    if(!password.val()) {
        password.css('borderColor', 'red');
        alert2.show();
        eyes.css('top', '43%')
        error = true;
    } else{
        password.css('borderColor', 'grey');
        alert2.hide();
    }

    if(error){
        event.preventDefault();
    } else{
        login.css('borderColor', 'green');
        password.css('borderColor', 'green');
    }
})

eyes.click(function() {
    if(password.attr('type') == 'password'){
        password.attr('type','text');
    }else{
        password.attr('type','password');
    }
})