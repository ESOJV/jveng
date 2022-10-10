import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
 
export const getPosts =  async () => {
    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            slug
            title
            content {
              text
            }
            excerpt
            sectionContent1
            sectionTitle1
            createdAt
          }
        }
      }
    } 
    `;

    const result = await request('https://api-us-east-1.hygraph.com/v2/cl62rnul66eoz01uk9mp4fh81/master', query);

    return result.postsConnection.edges;

}

//query for post details, where: will only get the details for the corresponding slug 
export const getPostDetails =  async (slug) => {
    const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: {slug: $slug}) {
            slug
            title
            content {
              text
            }
            excerpt
            sectionContent1
            sectionTitle1
            createdAt
            sectionContent2
            sectionTitle2
          }
        }
    `;

    const result = await request('https://api-us-east-1.hygraph.com/v2/cl62rnul66eoz01uk9mp4fh81/master', query, {slug});

    return result.post;

}