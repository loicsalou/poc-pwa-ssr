Pour consulter les logs du nodejs qui tourne dans NgInx
- docker logs <containerId-or-name>

Pour entrer dans le container nodejs, sachant que dans les versions "alpine" il n'y a pas bash
- docker exec -it <containerId-or-name> /bin/sh
