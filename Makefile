.PHONY: install run build

install:
	npm install

preview:
	npm run preview

run:
	npm start

build:
	export BASE_URL=https://lowess.github.io/110lab
	npm run build
