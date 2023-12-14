First we have to create New Indices with the Correct Mappings:
we can use the template created to create new indices. 
For example, create cwl-2023.12.11-new and cwl-2023.12.10-new

POST _reindex
{
  "source": {
    "index": "cwl-2023.12.11"
  },
  "dest": {
    "index": "cwl-2023.12.11-new"
  }
}


then verify Data and Delete Old Indices:

DELETE cwl-2023.12.11
DELETE cwl-2023.12.10



Lets say we get error while running _reindex API: 

Error in reindexing


{
  "took": 4259,
  "timed_out": false,
  "total": 526,
  "updated": 0,
  "created": 129,
  "deleted": 0,
  "batches": 1,
  "version_conflicts": 0,
  "noops": 0,
  "retries": {
    "bulk": 0,
    "search": 0
  },
  "throttled_millis": 0,
  "requests_per_second": -1,
  "throttled_until_millis": 0,
  "failures": [
    {
      "index": "cwl-2023.12.11-new",
      "id": "37962181935024218552826082462438025556111546796351946752",
      "cause": {
        "type": "mapper_parsing_exception",
        "reason": "failed to parse field [started_at] of type [long] in document with id '37962181935024218552826082462438025556111546796351946752'. Preview of field's value: 'N/A'",
        "caused_by": {
          "type": "illegal_argument_exception",
          "reason": "For input string: \"N/A\""
        }
      },
      "status": 400
    } ...



----
modify the reindexing process to handle the started_at field. 
Using an ingest pipeline or a script within the reindex request can help either transform or remove this field from documents.


POST _reindex
{
  "source": {
    "index": "cwl-2023.12.11"
  },
  "dest": {
    "index": "cwl-2023.12.11-new"
  },
  "script": {
    "source": """
    if (ctx._source.containsKey('started_at')) {
      if (ctx._source.started_at == 'N/A' || ctx._source.started_at == null) {
        ctx._source.remove('started_at');
      } else {
        ctx._source.started_at = Long.parseLong(ctx._source.started_at);
      }
    }
    """,
    "lang": "painless"
  }
}



