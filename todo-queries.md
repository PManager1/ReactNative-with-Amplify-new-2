{
  hobby(id:"2") {
    title
    id
    user {
      name
      age
      id
    }
  }
}


{
  user(id:"2") {
		age
    posts{
      comment
      id
    }
  }
}



{
  user(id:"1") {
    name
		age
    id
    posts{
      id
      comment
    }
		hobbies{
      id
      title
    }

  }
}

// MUTATION 

mutation{
  createPost(comment: "the comment", userId: 2) {
    comment
			id
    	user{
        name
        id
      }
  }
    
}




{
  getRecord(id:"0978b264-6eda-41af-bc53-bbd024d3f76f") {
    cell_phone
    id
  }
}





query ListRecords($filter: ModelRecordFilterInput, $limit: Int, $nextToken: String) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      business_size
      base
      updatedAt
    }
    nextToken
  }
}


query ListRecords($filter: ModelRecordFilterInput, $limit: Int, $nextToken: String) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      business_size
      base
      updatedAt
    }
    nextToken
  }
}




