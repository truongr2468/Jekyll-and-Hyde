setwd ("~/Desktop/HenryJ")
text.v <- scan("43-0.txt", what="character", sep="\n")
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
n.hyde.v <-seq(1:length(hyde.words.v))
#hyde dispersion plot
hyde.v <-which(hyde.words.v=="hyde")
hyde.count.v <-rep(NA,length(n.hyde.v))
hyde.count.v[hyde.v] <-1
plot(hyde.count.v, main="Dispersion Plot of 'hyde' in The Strange Case of Dr. Jekyll and Mr. Hyde",
     xlab="Novel Time", ylab="hyde", type="h", ylim=c(0,1), yaxt='n')
#utterson dispersion plot
utterson.v <-which(hyde.words.v=="utterson")
utterson.count.v <-rep(NA,length(n.hyde.v))
utterson.count.v[utterson.v] <-1
plot(utterson.count.v, main="Dispersion Plot of 'utterson' in The Strange Case of Dr. Jekyll and Mr. Hyde",
     xlab="Novel Time", ylab="utterson", type="h", ylim=c(0,1), yaxt='n')
#jekyll dispersion plot
jekyll.v <-which(hyde.words.v=="jekyll")
jekyll.count.v <-rep(NA,length(n.hyde.v))
jekyll.count.v[jekyll.v] <-1
plot(jekyll.count.v, main="Dispersion Plot of 'jekyll' in The Strange Case of Dr. Jekyll and Mr. Hyde",
     xlab="Novel Time", ylab="jekyll", type="h", ylim=c(0,1), yaxt='n')