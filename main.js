document.getElementById("fileLoader").onchange = function() {
  var file = document.getElementById("fileLoader").files[0];
  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var text = e.target.result;
    document.getElementById("myText").value = text;
  };
  fileReader.readAsText(file, "UTF-8");
};

document.getElementById("fileLoader2").onchange = function() {
  var file2 = document.getElementById("fileLoader2").files[0];
  var fileReader2 = new FileReader();
  fileReader2.onload = function(e) {
    var text2 = e.target.result;
    document.getElementById("myText2").value = text2;
  };
  fileReader2.readAsText(file2, "UTF-8");
};

function Difference() {
  var textArea = document.getElementById("myText");
  var lines = textArea.value.split("\nw"); // lines is an array of strings
  for (var j = 0; j < lines.length; j++) {
    var word1 = lines[j];
    console.log(lines[j]);
  }

  var textArea2 = document.getElementById("myText2");
  var lines2 = textArea2.value.split("\nw"); // lines is an array of strings
  for (var j = 0; j < lines2.length; j++) {
    var word2 = lines2[j];
    console.log(lines2[j]);
  }
  var result = word1.match(word2);
  console.log(result);
}
