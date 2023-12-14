# why we need index:

To create an index template that supports aggregations on fields like status, tenant_id, and job_name, 
we need to ensure that these fields are indexed appropriately in Elasticsearch. The error you're encountering ("not aggregatable") usually occurs when fields are not indexed as keyword types or when they're not properly mapped for aggregation.

In our current mapping, fields like status, tenant_id, and job_name are of type text with a keyword sub-field. 
While text type fields are good for full-text search, they are not suitable for aggregations. 
For aggregations, we need to use the keyword type, which is designed for structured content like email addresses, hostnames, status codes, and tags.

PUT _template/cwl-template
{
  "index_patterns": ["cwl-*"], // pattern matching our index names so this template will be picked. 
  "settings": {
    "number_of_shards": 1
    // additional settings like number of replicas, etc we can give here. 
  },
  "mappings": {
    "properties": {
      "status": { 
        "type": "keyword" // I used keyword for aggregation
      },
      "tenant_id": {
        "type": "keyword"
      },
      "job_name": {
        "type": "keyword"
      },
      // other fields mappings
      // ...
    }
  }
}

-- FUll--

PUT _template/cwl-template
{
  "index_patterns": ["cwl-*"],  
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
    
  },
  "mappings": {
    "properties": {
      "@id": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "@log_group": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "@log_stream": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "@message": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "@owner": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "@timestamp": {
        "type": "date"
      },
      "job_definition": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "job_id": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "job_name": {
        "type": "keyword" 
      },
      "job_queue": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "status": {
        "type": "keyword"  
      },
      "status_reason": {
        "type": "text",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "tenant_id": {
        "type": "keyword"  
      }
     
    }
  }
}


We can list all index templates in Elasticsearch to confirm that your template was indeed created. 

GET _cat/templates?v

We get output like this: 

name                  index_patterns order      version composed_of
tenant_template       [.kibana_-*_*, .kibana_0*_*, .kibana_1*_*, .kibana_2*_*, .kibana_3*_*, .kibana_4*_*, .kibana_5*_*, .kibana_6*_*, .kibana_7*_*, .kibana_8*_*, .kibana_9*_*] 2147483647         
cwl-template          [cwl-*] 0                  
ss4o_metrics_template [ss4o_metrics-*-*] 1          1       []
ss4o_traces_template  [ss4o_traces-*-*] 1          1       []


we got cwl-template CREATED. 


