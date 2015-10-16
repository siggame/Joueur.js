all:
	make dependencies
	make core

dependencies:
	npm install

core: ;

clean:
	rm -rf ./node_modules
