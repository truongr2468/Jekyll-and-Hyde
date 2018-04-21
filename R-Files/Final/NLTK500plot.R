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
sorted.hyde.freqs.t <- sort(hyde.freqs.t, decreasing=TRUE)
n.time.v <-seq(1:length(hyde.words.v))
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
zero.count.v[topic.zero.v] <- 1
plot(zero.count.v, main="Dispersion plot of Topic 0 in Jekyll and Hyde", xlab="Novel Time", ylab="Topic 0", type="h", ylim=c(0,1), yaxt='n')