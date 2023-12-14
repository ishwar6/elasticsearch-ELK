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
