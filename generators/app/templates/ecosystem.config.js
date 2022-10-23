module.exports = {
  apps: [
    {
      name: 'entry',
      namespace: 'ncbi',
      script: 'poetry run scrapy crawl entry',
      ignore_watch: ['node_modules', 'logs', 'tmp', '*.pyc'],
      // cron_restart: '0/30 * * * *'
    },
    {
      name: 'stat',
      namespace: 'ncbi',
      // script: 'poetry run scrapy crawl kninfo_detail',
      script: 'poetry run python <%= app_name %>/tasks/stat.py',
      ignore_watch: ['node_modules', 'logs', 'tmp', '*.pyc'],
      restart_delay: 5 * 60 * 1000
    }
  ]
};
