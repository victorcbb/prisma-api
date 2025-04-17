## Acessing docker container

1. Run the container at fist time:
   `docker-compose up -d`

   after this you can start it again with:
   `docker-compose start`

2. Enter the container:
   `docker-compose exec app bash`

After this you can run the cli commands.

_*HINT*: You can use `exit` to leave the container_
