# henryj
Final project for Digital Humanities

1. Acquire the text of Dr. Jekyll and Mr. Hyde from Project Gutenberg

2. Remove all metadata from the text

3. Remove lines 22 and above via terminal

sed -i '1,22d' edwardh.txt

4. Remove lines 2528 and below via terminal

sed -i '2528, $d'

5. Clean up blank spaces in the text file

vi word_per_line.txt
:%s/\s\+/\r/g
:g/^$/d
:wq

6. Check to make sure word_per_line.txt has things in it.

more word_per_line.txt

7. Split the text into 500 word-sized chunks.

split -a 2 -l 500 word_per_line.txt edwardh_

8. Move the newly made files into their own folder labeled data.

mkdir data
mv -i edward_* data

9. Run the script

./NLTKscript500.sh or ./NLTKscript250.sh
