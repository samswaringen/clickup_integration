import { gql } from "@apollo/client";

const GET_TAGS= gql`
  query GET_TAGS{
    tags{
      value
    }
  }
`
const GET_REQUESTERS= gql`
  query GET_REQUESTERS{
    requesters{
      value
      label
    }
  }
`
const GET_ASSIGNEES= gql`
  query GET_ASSIGNEES{
    assignees{
      value
      label
    }
  }
`
const GET_COMPANIES= gql`
  query GET_COMPANIES{
    companies{
      value
      label
    }
  }
`
const GET_PRIORITIES= gql`
  query GET_PRIORITIES{
    priorities{
      value
      label
      level
    }
  }
`

export {GET_TAGS, GET_ASSIGNEES, GET_COMPANIES,GET_PRIORITIES,GET_REQUESTERS}