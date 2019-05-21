$(document).ready(function () {
    $('.header').height($(window).height());
})

var windowh = window.innerHeight;
document.getElementsByClassName('header').style.height = windowh;

$(document).ready(function () {
    $.ajax({
        url: 'https://www.billboard.com/rss/charts/hot-100',
        type: 'GET',
        dataType: "xml"
    }).done(function (xml) {

        $.each($("item", xml), function (i, e) {

            var blogNumber = i + 1 + ". ";

            var itemURL = ($(e).find("link"));
            var blogURL = "<a href='" + itemURL.text() + "'>" + itemURL.text() + "</a>";

            var itemTitle = ($(e).find("title"));
            var blogTitle = "<h4>" + blogNumber + itemTitle.text() + "</h4>";

            $("#feed").append(blogTitle);
            $("#feed").append(blogURL);
            console.log("Hello");

        });
    });
});