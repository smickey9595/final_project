/**
 * Created by asmodey on 1/15/17.
 */
$('document').ready(function () {
    $('form').on('submit', sendMess);
    $('#email1, #pass1').on('keyup', checkInputs);
});

function sendMess() {
    event.preventDefault();
    $.get(
        "send.php",
        {
            "email" : $('#email1').val(),
            "pass" : $('#pass1').val()
        },
        function (data){
            if (data==1){
                $('#send-res').html('Успешно отправлено');
                $('#myModal').modal('show');
                setTimeout(function(){
                    $('#myModal').modal('hide');
                }, 3000);

            }
            else {
                $('#send-res').html('Повторите отправку');
                $('#myModal').modal('show');
            }
        }
    );
}

function  checkInputs() {
    var mail = $('#email1').val();
        mail = $.trim(mail);
    var pass= $('#pass1').val();
        pass = $.trim(pass);

    if (mail!='' && pass!='') {
        $('form button[type="submit"]').removeAttr('disabled');
    }
    else {
        $('form button[type="submit"]').attr('disabled', 'disabled');
    }
}