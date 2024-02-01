setup: setup-env setup-directories
	npm install

start:
	npm start

dev:
	npm run dev

lint:
	npm run lint

format:
	npm run format

check:
	npm run check

check-force:
	npm run check:force

setup-env:
	@echo "Setting up env file..."
	if [ ! -f .env ]; then touch .env; fi

setup-directories:
	@echo "Setting up directories..."
	bash scripts/setup-directories.sh