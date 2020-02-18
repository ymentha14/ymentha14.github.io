CXX?= g++
.PHONY: all run plot

con:
	bundle exec jekyll serve& 2>&1 /dev/null

ref:
	kill $(ps aux | grep '[j]ekyll' | awk '{print $2}'); bundle exec jekyll serve& 2>&1 /dev/null

clean:
	kill $(ps aux | grep '[j]ekyll' | awk '{print $2}') 	
