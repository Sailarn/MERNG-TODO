import gql from "graphql-tag";

export const FETCH_TODOS_QUERY = gql`
    {
        getTodos{
            id,
            description,
            title,
            completed,
            createdAt,
            modifiedAt,
            username,
            priority,
            privateTodo
        }
    }
`;