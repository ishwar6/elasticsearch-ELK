Method 1: Using Aliases
This method is less disruptive and does not involve duplicating data. 
we can create an alias with the name of the original index pointing to the new index.

POST /_aliases
{
  "actions": [
    {
      "add": {
        "index": "cwl-2023.12.11-new",
        "alias": "cwl-2023.12.11"
      }
    }
  ]
}



DELETE cwl-2023.12.11



Method 2: Reindexing to the Original Name

DELETE cwl-2023.12.11

then reindex

POST _reindex
{
  "source": {
    "index": "cwl-2023.12.11-new"
  },
  "dest": {
    "index": "cwl-2023.12.11"
  }
}

then delete the new as well. 

DELETE cwl-2023.12.11-new
