TsohaApp.directive('copyPasteWarning', function(){
  return {
    link: function(scope, elem, attrs){
      $(elem).on('mousedown', function(){
        $('#copy-paste-warning').addClass('bring-down');
      });
    }
  }
});
