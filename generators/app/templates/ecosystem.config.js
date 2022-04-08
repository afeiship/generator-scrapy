module.exports = {
  apps: [
    {
      name: 'entry',
      // interpreter: 'bash',
      namespace: 'aizhan',
      script: 'poetry run scrapy crawl entry',
      ignore_watch: ['node_modules', 'logs', 'tmp', '*.pyc']
    }
  ]
};
