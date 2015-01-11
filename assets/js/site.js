$(document).ready(function() {
  $('pre code').each(function(i, block) {
    var _this = this;

    if($(_this).hasClass('xml')){
      $(_this).html($(_this).html().replace(/</g, "&lt;").replace(/>/g, '&gt;'))
    }

    hljs.highlightBlock(block);
  });
});
