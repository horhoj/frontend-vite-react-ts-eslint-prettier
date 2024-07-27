docker-init: docker-up docker-install docker-prod

#all
docker-up: docker-down
	docker compose up -d --build

docker-log: docker-down
	docker compose up --build

docker-down:
	docker compose stop
	docker compose down

docker-console:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "/bin/bash"

docker-dev:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run dev -- --host=0.0.0.0"

docker-ddev: docker-up docker-install docker-dev

docker-prod:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run build"

docker-install:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm i"

docker-lint-check:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run lint-check"

docker-lint-fix:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run lint-fix"

docker-type-check:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run type-check"

docker-test:
	docker compose exec --user $(shell id -u):$(shell id -g)  node sh -c "npm run test"

check:
	npm run type-check && npm run lint-check

check-full:
	npm run build && npm run type-check && npm run lint-check

test:
	npm run test

dev:
	npm run dev

lint-fix:
	npm run lint-fix

test-coverage:
	npm run test-coverage
