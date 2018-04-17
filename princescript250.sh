#!/bin/sh
mallet import-dir --input data/Jekyll250 --output jekyll-input.mallet --keep-sequence --stoplist-file princetonstopwords.txt
mallet train-topics --optimize-interval 10 --num-topics 20 --num-iterations 1000 --input jekyll-input.mallet --output-topic-keys jekyll-20-topic-keys.txt --num-top-words 10
