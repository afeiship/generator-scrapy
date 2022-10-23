from <%= app_name %>.models.kninfo_detail import KninfoDetail
from <%= app_name %>.models.stat import Stat

if __name__ == '__main__':
    count = KninfoDetail.select().where(KninfoDetail.is_crawled == True).count()
    Stat.create(count=count, description='SELECT COUNT(*) from kninfo_details WHERE is_crawled = 1;')
