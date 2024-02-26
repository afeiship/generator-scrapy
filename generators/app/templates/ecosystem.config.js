module.exports = {
  apps: [
    {
      name: 'post_every5minte',
      namespace: 'post',
      script: 'scrapy crawl post_every5minte',
      ignore_watch: ['node_modules', 'logs', 'tmp', '*.pyc'],
      cron_restart: '*/5 * * * * *'
    }
  ]
};
