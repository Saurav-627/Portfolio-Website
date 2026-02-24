.PHONY: help dev build preview lint clean

help:
	@echo "Available commands:"
	@echo "  make dev      - Start the development server"
	@echo "  make build    - Build the production application"
	@echo "  make preview  - Preview the production build locally"
	@echo "  make lint     - Run ESLint to check for code quality issues"
	@echo "  make clean    - Remove build artifacts (dist folder)"

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

clean:
	rm -rf dist
