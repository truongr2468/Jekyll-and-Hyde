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

function show(graph) {
    if (graph == "Topic 0") {
    hidden.style.display='inline-block';
        secret.style.display='none';
    huh.style.display='none';
    }
    else if (graph == "Topic 1") {
    secret.style.display='inline-block';
        hidden.style.display='none';
    huh.style.display='none';

    }
    else if (graph == "Topic 2") {
    huh.style.display='inline-block';
    hidden.style.display='none';
    secret.style.display='none';

    }


  }
