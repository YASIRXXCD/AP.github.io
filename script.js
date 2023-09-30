$(document).ready(function () {
    $("#h1").click(function () {
        loadContent("index.html");
    });

    $("#h2").click(function () {
        loadContent("location.html");
    });

    $("#h3").click(function () {
        loadContent("Info.html");
    });

    function loadContent(page) {
        // Load content using AJAX or any method you prefer
        $.ajax({
            url: page,
            success: function (data) {
                $("main").html(data);
            }
        });
    }
});
