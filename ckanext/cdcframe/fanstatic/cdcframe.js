/*
* desc set SyntaxHighlighter
*/
function setSyntaxHighlighter() {
  if(window.jQuery && $('#developerContainer').length) {
    SyntaxHighlighter.all();
  }
}

/*
* desc : initialize homepage
*/
$(function () {
  setSyntaxHighlighter();
});
