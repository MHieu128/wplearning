import client from "client";
import { gql } from "@apollo/client";

export default function Home(props) {
  console.log(props);
  let image = props.blocks[0].attributes.url;
  console.log(image);
  return <div>Next JS &amp; WordPress.</div>;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
      `,
  });
  return {
    props: {
      blocks: data.nodeByUri.blocks
    }
  }
}