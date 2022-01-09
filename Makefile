COMPOSE_DEV=docker-compose -f docker-compose.dev.yml

commit:
	pre-commit run --all-files

docker-compose:
	${COMPOSE_DEV} up --build

app-start:
	${COMPOSE_DEV} up -d

app-stop:
	${COMPOSE_DEV} down
