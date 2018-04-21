

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
document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic0.png";
    }
    else if(document.getElementById('n500select').value == "Topic 1") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic1.png";
    }
    else if(document.getElementById('n500select').value == "Topic 2") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic2.png";
    }
    else if(document.getElementById('n500select').value == "Topic 3") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic3.png";
    }
    else if(document.getElementById('n500select').value == "Topic 4") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic4.png";
    }
    document.body.appendChild(x);
}

function nltk250 () {
    var y = document.createElement("IMG")
    if(document.getElementById('n250select').value == "Topic 0") {
document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic0.png";
    }
    else if(document.getElementById('n250select').value == "Topic 1") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic1.png";
    }
    else if(document.getElementById('n250select').value == "Topic 2") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic2.png";
    }
    document.body.appendChild(y);
}
