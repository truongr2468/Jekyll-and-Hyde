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
      document.getElementById("x").src="R-Files/Final/R-Plots/NLTK500/Topic12.png";
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
      document.getElementById("xtext").value="what"
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
    else if(document.getElementById('n250select').value == "Topic 3") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic3.png";
    }
    else if(document.getElementById('n250select').value == "Topic 4") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic4.png";
    }
    else if(document.getElementById('n250select').value == "Topic 5") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic5.png";
    }
    else if(document.getElementById('n250select').value == "Topic 6") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic6.png";
    }
    else if(document.getElementById('n250select').value == "Topic 7") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic7.png";
    }
    else if(document.getElementById('n250select').value == "Topic 8") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic8.png";
    }
    else if(document.getElementById('n250select').value == "Topic 9") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic9.png";
    }
    else if(document.getElementById('n250select').value == "Topic 10") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic10.png";
    }
    else if(document.getElementById('n250select').value == "Topic 11") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic11.png";
    }
    else if(document.getElementById('n250select').value == "Topic 12") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic12.png";
    }
    else if(document.getElementById('n250select').value == "Topic 13") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic13.png";
    }
    else if(document.getElementById('n250select').value == "Topic 14") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic14.png";
    }
    else if(document.getElementById('n250select').value == "Topic 15") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic15.png";
    }
    else if(document.getElementById('n250select').value == "Topic 16") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic16.png";
    }
    else if(document.getElementById('n250select').value == "Topic 17") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic17.png";
    }
    else if(document.getElementById('n250select').value == "Topic 18") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic18.png";
    }
    else if(document.getElementById('n250select').value == "Topic 19") {
      document.getElementById("y").src="R-Files/Final/R-Plots/NLTK250/Topic19.png";
    }
    document.body.appendChild(y);
}

//NLTK 500 text//

function nltk500txt() {
    if (document.getElementById("n500select").value == "Topic 0") {
        document.getElementById("xtext").innerHTML = "letter doctor client friend's mark bottle handed escape judge swear";
    } else if (document.getElementById("n500select").value == "Topic 1") {
        document.getElementById("xtext").innerHTML = "city ten corner along by-street interest sounds mind two face ";
    } else if (document.getElementById("n500select").value == "Topic 2") {
        document.getElementById("xtext").innerHTML = "said utterson man one jekyll hyde lawyer upon like would";
    } else if (document.getElementById("n500select").value == "Topic 3") {
        document.getElementById("xtext").innerHTML = "maid victim heavy stick lane gentleman body seen broken particularly";
    }
    else if (document.getElementById("n500select").value == "Topic 4") {
        document.getElementById("xtext").innerHTML = "guest clerk document death sir note tempted autograph public handwriting";
    } else if (document.getElementById("n500select").value == "Topic 5") {
        document.getElementById("xtext").innerHTML = "two even life die evil pleasures months made side moral";
    } else if (document.getElementById("n500select").value == "Topic 6") {
        document.getElementById("xtext").innerHTML = "visitor curiosity ordinary remember sense unknown person struck set conduct";
    }
    else if (document.getElementById("n500select").value == "Topic 7") {
        document.getElementById("xtext").innerHTML = "many liked others ill clear secrets past things chief friendship";
    } else if (document.getElementById("n500select").value == "Topic 8") {
        document.getElementById("xtext").innerHTML = "creature evil horror countenance drug hours beyond life sensations pangs";
    } else if (document.getElementById("n500select").value == "Topic 9") {
        document.getElementById("xtext").innerHTML = "poole sir voice butler that’s it’s master servant candle there's";
    }
    else if (document.getElementById("n500select").value == "Topic 10") {
        document.getElementById("xtext").innerHTML = "drawer letter book understood colleague midnight contents reason rose powders";
    } else if (document.getElementById("n500select").value == "Topic 11") {
        document.getElementById("xtext").innerHTML = "street woman fog seen shop many brown cab latter lamps";
    } else if (document.getElementById("n500select").value == "Topic 12") {
        document.getElementById("xtext").innerHTML = "draught supply wonderful loathed finally ecstasy love fall days fallen";
    }
    else if (document.getElementById("n500select").value == "Topic 13") {
        document.getElementById("xtext").innerHTML = "door several times turned theatre cabinet may body lying clothes";
    } else if (document.getElementById("n500select").value == "Topic 14") {
        document.getElementById("xtext").innerHTML = "hyde edward jekyll cast double terror soho body still vain";
    } else if (document.getElementById("n500select").value == "Topic 15") {
        document.getElementById("xtext").innerHTML = "clothes enter smiled lighted gallows conceal chattering fury boldness closed";
    }
    else if (document.getElementById("n500select").value == "Topic 16") {
        document.getElementById("xtext").innerHTML = "enfield cheque family court really windows it’s child’s point best";
    } else if (document.getElementById("n500select").value == "Topic 17") {
        document.getElementById("xtext").innerHTML = "suddenly death throw hold heard sort far knew true freshness";
    } else if (document.getElementById("n500select").value == "Topic 18") {
        document.getElementById("xtext").innerHTML = "raged fled followed break cause pedant spirit private suppose made";
    }
    else if (document.getElementById("n500select").value == "Topic 19") {
        document.getElementById("xtext").innerHTML = "lanyon forth disappearance lawyer’s private case eagerness affected confined surrounded";
    }
}

//NLTK 250 text//
function nltk250txt() {
    if (document.getElementById("n250select").value == "Topic 0") {
        document.getElementById("ytext").innerHTML = "contents many several book woman drawer lay powders phial axe";
    } else if (document.getElementById("n250select").value == "Topic 1") {
        document.getElementById("ytext").innerHTML = "moral scientific truly consciousness direction sides deeply walk reasons struggling";
    } else if (document.getElementById("n250select").value == "Topic 2") {
          document.getElementById("ytext").innerHTML = "maid purpose stick broken murderer victim envelope address far get";
    } else if (document.getElementById("n250select").value == "Topic 3") {
            document.getElementById("ytext").innerHTML = "certain discovery experiment drug instead death loathed agonies birth deadly";
    } else if (document.getElementById("n250select").value == "Topic 4") {
              document.getElementById("ytext").innerHTML = "sense lying icy chemist stairs anatomical chemical rooms half light";
    } else if (document.getElementById("n250select").value == "Topic 5") {
                document.getElementById("ytext").innerHTML = "divided slumber shape within hope new something gallows caged deposed";
    } else if (document.getElementById("n250select").value == "Topic 6") {
                  document.getElementById("ytext").innerHTML = "know impatience lips trifle pedant driver decide completely conscience tempted";
                } else if (document.getElementById("n250select").value == "Topic 7") {
                    document.getElementById("ytext").innerHTML = "foot effort streets steps escaped ecstasy thence efficacy begun blow";
                  } else if (document.getElementById("n250select").value == "Topic 8") {
                      document.getElementById("ytext").innerHTML = "letter colleague understood midnight judge importance reason rose appear covered";
                    } else if (document.getElementById("n250select").value == "Topic 9") {
                        document.getElementById("ytext").innerHTML = "utterson said lawyer poole sir see well never know door";
                      } else if (document.getElementById("n250select").value == "Topic 10") {
                          document.getElementById("ytext").innerHTML = "pleasures hence wholly guilty position liberty degree complete considered undignified";
                        } else if (document.getElementById("n250select").value == "Topic 11") {
                            document.getElementById("ytext").innerHTML = "street entry lifted shop business sunday huddled impression pale quaint";
                          } else if (document.getElementById("n250select").value == "Topic 12") {
                              document.getElementById("ytext").innerHTML = "hands fled narrative destroyed seal disappearance case doom short followed";
                            } else if (document.getElementById("n250select").value == "Topic 13") {
                                document.getElementById("ytext").innerHTML = "confined incident sense professional stared scaffold tragic conceal size sought";
                              } else if (document.getElementById("n250select").value == "Topic 14") {
                                  document.getElementById("ytext").innerHTML = "late vain double drug throw cast slowly adventures occasion shared";
                                } else if (document.getElementById("n250select").value == "Topic 15") {
                                    document.getElementById("ytext").innerHTML = "cheque gentleman presently pounds family child’s black bank place stone";
                                  } else if (document.getElementById("n250select").value == "Topic 16") {
                                      document.getElementById("ytext").innerHTML = "guest clerk set secrets past document thought quite kept resemblance";
                                    } else if (document.getElementById("n250select").value == "Topic 17") {
                                        document.getElementById("ytext").innerHTML = "hyde jekyll upon man one could would even life house";
                                      } else if (document.getElementById("n250select").value == "Topic 18") {
                                          document.getElementById("ytext").innerHTML = "week influence suffer changed dark chief friendship drank master’s leaping";
                                        } else if (document.getElementById("n250select").value == "Topic 19") {
                                            document.getElementById("ytext").innerHTML = "wind would fog foul swiftly city darkness figure lamps along";
                                          }
                                        }
