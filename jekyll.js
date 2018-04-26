//tabs//

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

//NLTK 500 Plot//

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
    else if(document.getElementById('n500select').value == "Topic 5") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic5.png";
    }
    else if(document.getElementById('n500select').value == "Topic 6") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic6.png";
    }
    else if(document.getElementById('n500select').value == "Topic 7") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic7.png";
    }
    else if(document.getElementById('n500select').value == "Topic 8") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic8.png";
    }
    else if(document.getElementById('n500select').value == "Topic 9") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic9.png";
    }
    else if(document.getElementById('n500select').value == "Topic 10") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic10.png";
    }
    else if(document.getElementById('n500select').value == "Topic 11") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic11.png";
    }
    else if(document.getElementById('n500select').value == "Topic 12") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic11.png";
    }
    else if(document.getElementById('n500select').value == "Topic 13") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic13.png";
    }
    else if(document.getElementById('n500select').value == "Topic 14") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic14.png";
    }
    else if(document.getElementById('n500select').value == "Topic 15") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic15.png";
    }
    else if(document.getElementById('n500select').value == "Topic 16") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic16.png";
    }
    else if(document.getElementById('n500select').value == "Topic 17") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic17.png";
    }
    else if(document.getElementById('n500select').value == "Topic 18") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic18.png";
    }
    else if(document.getElementById('n500select').value == "Topic 19") {
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic19.png";
    }
    document.body.appendChild(x);
}

//NLTK 250 Plot//

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
