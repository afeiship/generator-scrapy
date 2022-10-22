# <%= project_name %>
> <%= description %>

## commands
```shell
# create new migration with model
cd <%= project_name %>
orator make:model User -m

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
yo @jswork/scrapy:spider ncbi_page
# create spider + model
yo @jswork/scrapy:spmodel ncbi_page
```

## database
```shell
mysql -uroot -p123456 -h127.0.0.1
create database <%= appName %> default character set utf8mb4 collate utf8mb4_unicode_ci;
```
