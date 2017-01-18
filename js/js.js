

$(document).ready(function(){




    $("form").submit(function() {
        $.ajax({
            type: "GET",
            url: "getmail.php",
            data: $("form").serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });




});

