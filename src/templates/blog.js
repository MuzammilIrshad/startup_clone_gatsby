import React from "react"
import { Link, graphql } from 'gatsby';
import LayOut from "../components/LayOut";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as blogData from './blog.module.css';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';

export const query = graphql`
query ($slug: String!) {
  contentfulStartupPakistan(heading: {eq: $slug}) {
    heading
    publishedDate(formatString: "DD MMM, Y")
      details {
      raw
    }
    image{
       fluid{
          src
      }
      }
  }
 allContentfulStartupPakistan(limit: 4) {
    edges {
      node {
        heading
        image {
          fluid {
            src
          }
        }
      }
    }
  }
}
`

export default function Blogpost(props) {
    console.log(props);
    const data = props.data.contentfulStartupPakistan;
    const allData = props.data.allContentfulStartupPakistan;
    const json = JSON.parse(data.details.raw);
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                //console.log(children);
                return <p>{children}</p>
            },
            [MARKS.BOLD]: (node, children) => {
                //console.log(children);
                return <p>{children}</p>
            }
        }
    }
    return (
        <LayOut>
            <div id={blogData.main_div}>
                <Grid container spacing={3}>
                    <Grid item md={7} xs={6}>
                        <Paper id={blogData.details}>
                            <img src={data.image.fluid.src} />
                            <h1>{data.heading}</h1>
                            <p>{data.publishedDate}</p>
                            <p><span><GrFacebook id={blogData.fb} /></span><span><FaTwitterSquare id={blogData.tw} /></span><span><FaPinterestSquare id={blogData.pt}/></span></p>
                            {documentToReactComponents(json, RICHTEXT_OPTIONS)}
                        </Paper>
                    </Grid>
                    <Grid item xs={5} >
                        <Paper style={{ boxShadow: 'none', marginLeft: '4em' }}>
                            <div id={blogData.popular}>
                                <p>Popular <hr /></p>
                            </div>
                            {allData && allData.edges.map((edge) => {
                                return (
                                    <div className={blogData.popular_Data}>
                                        <Link to={`/blog/${edge.node.slug}`} >

                                            <img src={edge.node.image.fluid.src} />
                                            <h2><span>Other</span> <br />{edge.node.heading}</h2>
                                        </Link>

                                    </div>
                                );
                            })}

                        </Paper>
                    </Grid>
                </Grid>
               
            </div>
        </LayOut>
    );
}