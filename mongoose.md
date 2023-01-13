for error 100

```bash
sudo mkdir -p /data/db
sudo chown -R 'id -un' /data/db
```

run `sudo mongod`

error 48 means database server is already running

how to enable mongoDB on fedora ?

```bash
sudo systemctl enable mongod.service
sudo systemctl start mongod.service
```

check MongoDB current status

`sudo systemctl status mongod.service`
