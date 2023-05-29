# pipelines.sample

## steps
1. Copy `pipelines.sample.py` code to `spider_xxx/pipelines.py`
2. Uncomment settings

```py
ITEM_PIPELINES = {
    "spider_classify_fasta.pipelines.SpiderClassifyFastaPipeline": 300,
    "spider_classify_fasta.pipelines.SpiderClassifyFastaFilesPipeline": 200,
}
```
