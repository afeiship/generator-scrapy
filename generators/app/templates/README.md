# <%= project_name %>
> <%= description %>

## commands
```shell
# use pm2 manage your spider
pip install -r requirements.txt
# active env
. venv/bin/activate
# start a spider
scrapy crawl post_every5minte
# start with pm2
pm2 start ecosystem.config.js --only "entry"

## generators
# create model
yo @jswork/scrapy:model ncbi_page
# create spider
yo @jswork/scrapy:spider ncbi_page
# create spider + model
yo @jswork/scrapy:spmodel ncbi_page

# Add pipelines(processor + download)
yo @jswork/scrapy:pipelines
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
