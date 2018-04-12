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
hyde.hits.v <-length(hyde.words.v[which(hyde.words.v=="hyde")])
plot(sorted.hyde.freqs.t[1:10], type="b",
     xlab="Top Ten Words", ylab="Word Count", xaxt ="n")
axis(1,1:10, labels=names(sorted.hyde.freqs.t[1:10]))