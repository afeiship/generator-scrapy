# <%= project_name %>
> <%= description %>

## commands
```shell
# use pm2 manage your spider
poetry install
# active env
npm run env:active
# start a spider
poetry run scrapy crawl entry
# start with pm2
pm2 start ecosystem.config.js --only "entry"

## generators
# create model
yo @jswork/scrapy:model ncbi_page --orm=peewee
# create spider
yo @jswork/scrapy:spider ncbi_page --orm=peewee
# create spider + model
yo @jswork/scrapy:spmodel ncbi_page --orm=peewee
```

## database
```shell
# use pasword
mysql -uroot -p123456 -h127.0.0.1
# if you have set `MYSQL_PWD` env
mysql -uroot -h127.0.0.1
# create project database
create database <%= app_name %> default character set utf8mb4 collate utf8mb4_unicode_ci;
```
