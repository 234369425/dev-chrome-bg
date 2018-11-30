(function () {
    var editorElement = document.getElementById("editor");

    var editor = CodeMirror.fromTextArea(editorElement, {
        lineNumbers: true,
        mode: 'javascript'
    });

    document.getElementById("editor-div").style.height = (window.innerHeight - 140) + "px";
    document.writeln("<style> .CodeMirror { height:" + (window.innerHeight - 140) + "px;}</style>")

})();