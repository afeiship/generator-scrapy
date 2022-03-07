# <%= project_name %>
> <%= description %>

## commands
```shell
# create new migration with model
cd <%= project_name %>
orator make:migration create_users_table -m

# use pm2 manage your spider
pm2 start entry.py --interpreter=python3 --name us:entry
```
