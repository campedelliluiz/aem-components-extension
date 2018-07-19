var css = '.append-component-name { position:relative;text-align:center;z-index:9999;font-size:20px;background:rgba(0,120,255,.7);color:black;font-weight:700;padding:10px}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.type = 'text/css';

if (style.styleSheet)
  style.styleSheet.cssText = css;
 else
  style.appendChild(document.createTextNode(css));

head.appendChild(style);

$('.component').each(function(index){
    var componentName = $(this).attr("data-role");

    $(this).mouseenter(function() {
        $(this).css('border','2px solid #0f83d5').append('<div class="append-component-name">' + componentName + '</div>');
    }).mouseleave(function() {
        $(this).css('border','none');
        $(".append-component-name").remove();
    });
});