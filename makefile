start: setup-env setup-directories


setup-env:
	@echo "Setting up env file..."
	if [ ! -f .env ]; then touch .env; fi

setup-directories:
	@echo "Setting up directories..."
	bash scripts/setup-directories.sh