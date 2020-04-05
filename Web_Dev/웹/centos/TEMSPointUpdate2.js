$('.save_button').click(function () {
    $.ajax({
        type: "POST",
        url: "TEMSPointUpdate.php",
        data: {
            idMinusOneString: $(this).val()
        }
    }).done(function (msg) {
        alert("Data Saved: " + msg);
    });
});
