##Prepare the Document for Analysis##
setwd ("~/Documents/GitHub/Jekyll-and-Hyde/")
text.v <- scan("edwardh.txt", what="character", sep="\n")
start.v <-which(text.v == "STORY OF THE DOOR")
end.v <-2135L
start.metadata.v <-text.v[1:start.v-1]
end.metadata.v <- text.v[(end.v+1):length(text.v)]
metadata.v <- c(start.metadata.v, end.metadata.v)
novel.lines.v <- text.v[start.v:end.v]
novel.v <- paste(novel.lines.v, collapse=" ")
novel.lower.v <- tolower(novel.v)
hyde.words.1 <-strsplit(novel.lower.v, "\\W")
hyde.words.v <- unlist(hyde.words.1)
not.blanks.v <- which(hyde.words.v!="")
hyde.words.v <- hyde.words.v[not.blanks.v]
hyde.freqs.t <-table(hyde.words.v)
n.time.v <-seq(1:length(hyde.words.v))

##Create Plot for Topic 0##
letter.v <-which(hyde.words.v == "letter")
doctor.v <-which(hyde.words.v == "doctor")
client.v <-which(hyde.words.v == "client")
friends.v <-which(hyde.words.v == "friends")
mark.v <-which(hyde.words.v == "mark")
bottle.v <-which(hyde.words.v == "bottle")
handed.v <-which(hyde.words.v == "handed")
escape.v <-which(hyde.words.v == "escape")
judge.v <-which(hyde.words.v == "judge")
swear.v <-which(hyde.words.v == "swear")
topic.zero.v <-c(letter.v, doctor.v, client.v, friends.v, mark.v, bottle.v, handed.v, escape.v, judge.v, swear.v)
zero.count.v <-rep(NA,length(n.time.v))
zero.count.v[topic.zero.v] <- 1
plot(zero.count.v, main="Dispersion plot of Topic 0 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 0", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 1##
city.v <-which(hyde.words.v == "city")
ten.v <-which(hyde.words.v == "ten")
corner.v <-which(hyde.words.v == "corner")
along.v <-which(hyde.words.v == "along")
bystreet.v <-which(hyde.words.v == "by-street")
interest.v <-which(hyde.words.v == "interest")
sounds.v <-which(hyde.words.v == "sounds")
mind.v <-which(hyde.words.v == "mind")
two.v <-which(hyde.words.v == "two")
face.v <-which(hyde.words.v == "face")
topic.one.v <-c(city.v, ten.v, corner.v, along.v, bystreet.v, interest.v, sounds.v, mind.v, two.v, face.v)
one.count.v <-rep(NA,length(n.time.v))
one.count.v[topic.one.v] <- 1
plot(one.count.v, main="Dispersion plot of Topic 1 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 1", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 2##
said.v <-which(hyde.words.v == "said")
utterson.v <-which(hyde.words.v == "utterson")
man.v <-which(hyde.words.v == "man")
one.v <-which(hyde.words.v == "one")
jekyll.v <-which(hyde.words.v == "jekyll")
hyde.v <-which(hyde.words.v == "hyde")
lawyer.v <-which(hyde.words.v == "lawyer")
upon.v <-which(hyde.words.v == "upon")
like.v <-which(hyde.words.v == "like")
would.v <-which(hyde.words.v == "would")
topic.two.v <-c(said.v, utterson.v, man.v, one.v, jekyll.v, hyde.v, lawyer.v, upon.v, like.v, would.v)
two.count.v <-rep(NA,length(n.time.v))
two.count.v[topic.two.v] <- 1
plot(two.count.v, main="Dispersion plot of Topic 2 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 2", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 3##
maid.v <-which(hyde.words.v == "maid")
victim.v <-which(hyde.words.v == "victim")
heavy.v <-which(hyde.words.v == "heavy")
stick.v <-which(hyde.words.v == "stick")
lane.v <-which(hyde.words.v == "lane")
gentleman.v <-which(hyde.words.v == "gentleman")
body.v <-which(hyde.words.v == "body")
seen.v <-which(hyde.words.v == "seen")
broken.v <-which(hyde.words.v == "broken")
particularly.v <-which(hyde.words.v == "particularly")
topic.three.v <-c(maid.v, victim.v, heavy.v, stick.v, lane.v, gentleman.v, body.v, seen.v, broken.v, particularly.v)
three.count.v <-rep(NA,length(n.time.v))
three.count.v[topic.three.v] <- 1
plot(three.count.v, main="Dispersion plot of Topic 3 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 3", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 4##
guest.v <-which(hyde.words.v == "guest")
clerk.v <-which(hyde.words.v == "clerk")
document.v <-which(hyde.words.v == "document")
death.v <-which(hyde.words.v == "death")
sir.v <-which(hyde.words.v == "sir")
note.v <-which(hyde.words.v == "note")
tempted.v <-which(hyde.words.v == "tempted")
autograph.v <-which(hyde.words.v == "autograph")
public.v <-which(hyde.words.v == "public")
handwriting.v <-which(hyde.words.v == "handwriting")
topic.four.v <-c(guest.v, clerk.v, document.v, death.v, sir.v, note.v, tempted.v, autograph.v, public.v, handwriting.v)
four.count.v <-rep(NA,length(n.time.v))
four.count.v[topic.four.v] <- 1
plot(four.count.v, main="Dispersion plot of Topic 4 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 4", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 5##
two.v <-which(hyde.words.v == "two")
even.v <-which(hyde.words.v == "even")
life.v <-which(hyde.words.v == "life")
die.v <-which(hyde.words.v == "die")
evil.v <-which(hyde.words.v == "evil")
pleasures.v <-which(hyde.words.v == "pleasures")
months.v <-which(hyde.words.v == "months")
made.v <-which(hyde.words.v == "made")
side.v <-which(hyde.words.v == "side")
moral.v <-which(hyde.words.v == "moral")
topic.five.v <-c(two.v, even.v, life.v, die.v, evil.v, pleasures.v, months.v, made.v, side.v, moral.v)
five.count.v <-rep(NA,length(n.time.v))
five.count.v[topic.five.v] <- 1
plot(five.count.v, main="Dispersion plot of Topic 5 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 5", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 6##
visitor.v <-which(hyde.words.v == "visitor")
curiosity.v <-which(hyde.words.v == "curiosity")
ordinary.v <-which(hyde.words.v == "ordinary")
remember.v <-which(hyde.words.v == "remember")
sense.v <-which(hyde.words.v == "sense")
unknown.v <-which(hyde.words.v == "unknown")
person.v <-which(hyde.words.v == "person")
struck.v <-which(hyde.words.v == "struck")
set.v <-which(hyde.words.v == "set")
conduct.v <-which(hyde.words.v == "conduct")
topic.six.v <-c(visitor.v, curiosity.v, ordinary.v, remember.v, sense.v, unknown.v, person.v, struck.v, set.v, conduct.v)
six.count.v <-rep(NA,length(n.time.v))
six.count.v[topic.six.v] <- 1
plot(six.count.v, main="Dispersion plot of Topic 6 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 6", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 7##
many.v <-which(hyde.words.v == "many")
liked.v <-which(hyde.words.v == "liked")
others.v <-which(hyde.words.v == "others")
ill.v <-which(hyde.words.v == "ill")
clear.v <-which(hyde.words.v == "clear")
secrets.v <-which(hyde.words.v == "secrets")
past.v <-which(hyde.words.v == "past")
things.v <-which(hyde.words.v == "things")
chief.v <-which(hyde.words.v == "chief")
friendship.v <-which(hyde.words.v == "friendship")
topic.seven.v <-c(many.v, liked.v, others.v, ill.v, clear.v, secrets.v, past.v, things.v, chief.v, friendship.v)
seven.count.v <-rep(NA,length(n.time.v))
seven.count.v[topic.seven.v] <- 1
plot(seven.count.v, main="Dispersion plot of Topic 7 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 7", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 8##
creature.v <-which(hyde.words.v == "creature")
evil.v <-which(hyde.words.v == "evil")
horror.v <-which(hyde.words.v == "horror")
countenance.v <-which(hyde.words.v == "countenance")
drug.v <-which(hyde.words.v == "drug")
hours.v <-which(hyde.words.v == "hours")
beyond.v <-which(hyde.words.v == "beyond")
life.v <-which(hyde.words.v == "life")
sensations.v <-which(hyde.words.v == "sensations")
pangs.v <-which(hyde.words.v == "pangs")
topic.eight.v <-c(creature.v, evil.v, horror.v, countenance.v, drug.v, hours.v, beyond.v, life.v, sensations.v, pangs.v)
eight.count.v <-rep(NA,length(n.time.v))
eight.count.v[topic.eight.v] <- 1
plot(eight.count.v, main="Dispersion plot of Topic 8 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 8", type="h", ylim=c(0,1), yaxt='n')

##Create Plot for Topic 9##
creature.v <-which(hyde.words.v == "creature")
evil.v <-which(hyde.words.v == "evil")
horror.v <-which(hyde.words.v == "horror")
countenance.v <-which(hyde.words.v == "countenance")
drug.v <-which(hyde.words.v == "drug")
hours.v <-which(hyde.words.v == "hours")
beyond.v <-which(hyde.words.v == "beyond")
life.v <-which(hyde.words.v == "life")
sensations.v <-which(hyde.words.v == "sensations")
pangs.v <-which(hyde.words.v == "pangs")
topic.nine.v <-c(creature.v, evil.v, horror.v, countenance.v, drug.v, hours.v, beyond.v, life.v, sensations.v, pangs.v)
nine.count.v <-rep(NA,length(n.time.v))
nine.count.v[topic.nine.v] <- 1
plot(nine.count.v, main="Dispersion plot of Topic 9 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 9", type="h", ylim=c(0,1), yaxt='n')