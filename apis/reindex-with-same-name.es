# create a new index

PUT /cwl-2024.01.08-new


# put data into it from old index

POST _reindex
{
  "source": {
    "index": "cwl-2024.01.08"
  },
  "dest": {
    "index": "cwl-2024.01.08-new"
  }
}

 

# delete the old index, because new will come into it

DELETE cwl-2024.01.08

 
# push data from new to old again. 
POST _reindex
{
  "source": {
    "index": "cwl-2024.01.08-new"
  },
  "dest": {
    "index": "cwl-2024.01.08"
  }
}
 
# delete the new now, it is duplicated and not required
DELETE cwl-2024.01.08-new


