# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever

PROJECT_PATH = File.expand_path("..", __dir__)
set :output, "#{PROJECT_PATH}/logs/schedule.log"

every 5.minute do
  command "pm2 restart all"
end

# ---- whenever tasks ----
# alias when-clear='whenever -c'
# alias when-init='wheneverize .'
# alias when-list='whenever'
# alias when-list-all='crontab -l'
# alias when-update='whenever --update-crontab'
