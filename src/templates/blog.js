import React from "react"
import { Link, graphql } from 'gatsby';
import LayOut from "../components/LayOut";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'



export const query = graphql`
query ($slug: String!) {
  contentfulStartupPakistan(heading: {eq: $slug}) {
    heading
    publishedDate(fromNow: true)
      details {
      raw
    }
  }
}
`

export default function Blogpost(props) {
    console.log(props);

    const json = JSON.parse(props.data.contentfulStartupPakistan.details.raw);
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                //console.log(children);
                return <p style={{ color: "blue", fontStyle: "normal" }}>{children}</p>
            },
            [MARKS.BOLD]: (node, children) => {
                //console.log(children);
                return <p style={{ color: "blue", fontStyle: "normal" }}>{children}</p>
            }
        }
    }
    return (
        <LayOut>
            <h1>{props.data.contentfulStartupPakistan.heading}</h1>
            <p>{props.data.contentfulStartupPakistan.publishedDate}</p>
            {documentToReactComponents(json, RICHTEXT_OPTIONS)}
        </LayOut>
    );
}