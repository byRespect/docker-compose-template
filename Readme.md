## ***DOCKER COMPOSE WEB TEMPLATE***

##### :warning: **This repository is made for educational purposes only. Hope it helps others too.**

## Docker Yml
    .
    ├── services
    │   ├── rabbitmq        # for queue
    │   ├── redis           # for cache
    │   ├── mongodb         # for database
    │   ├── express         # for api
    │   └── nginx           # for bridge to api and 
    └── networks
        └── privnet         # for security

<hr />

## How can use this template


> ### START

```console
by@Respect:~$ docker compose -f docker-compose.yml up
```

> ### STOP

<kbd>CTRL</kbd> + <kbd>C</kbd>

> ### REMOVE

```console
by@Respect:~$ docker compose docker-compose.yml down
```

> ### CLEAN ALL

### :warning: This command is related to the whole docker system, use this command with care

```console
by@Respect:~$ docker system prune
```
