

function openwords(evt, words) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(words).style.display = "block";
    evt.currentTarget.className += " active";


}

document.getElementById("defaultOpen").click();

function nltk500 () {
    var x = document.createElement("IMG")
    if(document.getElementById('n500select').value == "Topic 0") {
document.getElementById("x").src="R-Files/Final/R-Plots/Topic0.png";
    }
    else if(document.getElementById('n500select').value == "Topic 1") {
      document.getElementById("x").src="R-Files/Final/R-Plots/Topic1.png";
    }
    else if(document.getElementById('n500select').value == "Topic 2") {
      document.getElementById("x").src="R-Files/Final/R-Plots/Topic2.png";
    }
    document.body.appendChild(x);
}
