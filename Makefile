commit:
	pre-commit run --all-files

docker-compose:
	docker-compose -f docker-compose.dev.yml up --build

app-start:
	docker-compose -f docker-compose.dev.yml up
