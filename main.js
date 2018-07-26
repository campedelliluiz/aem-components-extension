var css = '.cmp-nm { height: 60px; margin-bottom: -60px; text-align: center;position:relative;font:20px Verdana;background:rgba(0,0,0,0.7);color:#fff;font-weight:700;width:100%;display:flex;align-items:center;justify-content:center; z-index:9999;} .cmp-nm span { font-size: 10px;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.type = 'text/css';

if (style.styleSheet)
  style.styleSheet.cssText = css;
 else
  style.appendChild(document.createTextNode(css));

head.appendChild(style);

$('.component-wrapper').each(function(index){
    var componentName = $(this).children("div").attr("data-role"),
    columnControl = '';

    if ( $(this).children("div").hasClass("c-column-control") ) {
      componentName = "column-control";
    }

    $(this).mouseenter(function() {
        if ( $(this).parents().hasClass("c-column-control") ) {
          columnControl = "<br><span>(inside column-control)</span>";
        }
        $(this).prepend('<div class="cmp-nm"><p>' + componentName + columnControl + '</p></div>');
    }).mouseleave(function() {
        $(".cmp-nm").remove();
    });
});