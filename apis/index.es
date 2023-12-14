# to get the index mappings
#To retrieve the mapping of an index in Elasticsearch, you can use the GET request with the specific index name. 

GET /cwl-2023.12.12/_mapping

OUTPUT: 
{
  "cwl-2023.12.12": {
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
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
            }
          }
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
        "objectID": {
          "type": "text",
          "fielddata": true
        },
        "started_at": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
            }
          }
        },
        "status": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
            }
          }
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
        "subdomain": {
          "type": "object"
        },
        "tenant_id": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
            }
          }
        }
      }
    }
  }
}


# this data has been ingested into ES from cloudwatch log group: 


{
    "job_name": "ss-sf-blackboard-stage-stage-initialization-job",
    "status": "RUNNING",
    "job_id": "4fe37284-1161-4c4b-9088-1f762e695b7c",
    "job_queue": "arn:aws:batch:us-east-1:12:job-queue/ss-sf-2-stage-queue",
    "job_definition": "arn:aws:batch:ap-south-1:12:job-definition/ss-sf-2-stage-jobdef:8",
    "started_at": 1702391934510,
    "status_reason": "Essential container in task exited",
    "subdomain": {},
    "subdomains_list ": [],
    "tenant_id": "2000000004"
}



{
    "job_name": "ss-sf-21-dev-stage-zipAndSendFiles-job",
    "status": "RUNNABLE",
    "job_id": "3ba26ca5-7031-4f49-b40a-54aca10c6cdc",
    "job_queue": "arn:aws:batch:us-east-1:212:job-queue/ss-sf-2-dev-queue",
    "job_definition": "arn:aws:batch:us-east-1:121:job-definition/ss-sf-2-dev-jobdef:22",
    "started_at": "N/A",
    "status_reason": "N/A",
    "subdomain": {},
    "subdomains_list ": [],
    "tenant_id": "2000000004"
}

{
    "job_name": "ss-sf-2-stage-gradeFile-job",
    "status": "SUCCEEDED",
    "job_id": "8576c71a-bb07-4cb6-8f06-bbf58776967d",
    "job_queue": "arn:aws:batch:us-east-1:12:job-queue/ss-sf-2-dev-queue",
    "job_definition": "arn:aws:batch:us-east-1:12:job-definition/ss-sf-12-dev-jobdef:22",
    "started_at": 1702391985366,
    "status_reason": "Essential container in task exited",
    "subdomain": {},
    "subdomains_list ": [],
    "tenant_id": "2000000004"
}






