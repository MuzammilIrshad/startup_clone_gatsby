import React from "react"
import LayOut from "../components/LayOut";
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './index.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from "react";

export default function Blog() {

    const data = useStaticQuery(graphql`
query {
  allContentfulStartupPakistan(limit:5) {
    edges {
      node {
        slug
        heading
        publishedDate
         image {
          description
          fluid {
            src
          }

        }
      }
    }
  }
}
`)
    console.log(data);
    const [isOpen, setIsOpen] = useState(false);
    const blogs = data.allContentfulStartupPakistan.edges;
    if (blogs) {
        console.log(blogs.slice(0,2))
    }

    return (
        <LayOut>
            <div className={blogStyles.posts}>
                <Grid container spacing={1}>
                    <Grid item md={5} className={blogStyles.post} id={blogStyles.grid1}>
                        <Paper> <div id={blogStyles.post1} onClick={() => setIsOpen(true)}>
                            <Link to={`${isOpen ? '/'+blogs[0].node.slug:'/'}`} style={{
                            backgroundImage: `url(${blogs[0].node.image.fluid.src})`, height: '400px',
                            width: '100%', backgroundSize: 'cover', paddingTop: '2em',
                            backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                            backgroundPosition: 'top',
                            backgroundColor: 'white'
                        }}>

                            <h2>{blogs[0].node.heading}</h2>
                        </Link>
                    </div></Paper>
                </Grid>
                <Grid item md={3} className={blogStyles.post}>
                    <Paper>  <div className={blogStyles.post2}>
                            <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} style={{
                            backgroundImage: `url(${blogs[1].node.image.fluid.src})`, height: '170px',
                            width: '200px', backgroundSize: 'cover', paddingTop: '2em',
                            backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                            backgroundPosition: 'top',
                            backgroundColor: 'white'
                        }} >

                            <h2>{blogs[1].node.heading}</h2>
                        </Link>
                    </div>
                        <div className={blogStyles.post2}>
                                <Link to={`${isOpen ? '/' + blogs[2].node.slug : '/'}`} style={{
                                backgroundImage: `url(${blogs[2].node.image.fluid.src})`, height: '170px',
                                width: '200px', backgroundSize: 'cover', paddingTop: '2em',
                                backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                backgroundPosition: 'top',
                                backgroundColor: 'white'
                            }} >

                                <h2>{blogs[2].node.heading}</h2>
                            </Link>
                        </div></Paper>
                </Grid>
                <Grid item md={3} className={blogStyles.post}>
                    <Paper> <div className={blogStyles.post2}>
                            <Link to={`${isOpen ? '/' + blogs[3].node.slug : '/'}`} style={{
                            backgroundImage: `url(${blogs[3].node.image.fluid.src})`, height: '170px',
                            width: '200px', backgroundSize: 'cover', paddingTop: '2em',
                            backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                            backgroundPosition: 'top',
                            backgroundColor: 'white'
                        }} >

                            <h2>{blogs[3].node.heading}</h2>
                        </Link>
                    </div>
                        <div className={blogStyles.post2}>
                                <Link to={`${isOpen ? '/' + blogs[4].node.slug : '/'}`} style={{
                                backgroundImage: `url(${blogs[4].node.image.fluid.src})`, height: '170px',
                                width: '200px', backgroundSize: 'cover', paddingTop: '2em',
                                backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                backgroundPosition: 'top',
                                backgroundColor: 'white'
                            }} >

                                <h2>{blogs[4].node.heading}</h2>
                            </Link>
                        </div></Paper>
                </Grid>
               </Grid>
            </div>
            <br />
            <div id={blogStyles.section2}>
                <Grid container spacing={3}>
                    <Grid item  md={7}>
                    <Paper style={{ boxShadow:'none' }}>
                        <div id={blogStyles.tech}>
                            <p>TECHNOLOGY <hr /></p>
                        </div>
                        <div id={blogStyles.techData}>
                                <div className={blogStyles.techNews}>
                                    <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} style={{
                                    backgroundImage: `url(${blogs[1].node.image.fluid.src})`, height: '200px',
                                    width: '150px', backgroundSize: 'cover', paddingTop: '2em',
                                    backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                    backgroundPosition: 'top',
                                    backgroundColor: 'white', borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }} >

                                    <h2>Tech <br /><br />{blogs[1].node.heading}</h2>
                                </Link>
                            </div>
                            <div className={blogStyles.techNews}>
                                    <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} style={{
                                    backgroundImage: `url(${blogs[1].node.image.fluid.src})`, height: '200px',
                                    width: '150px', backgroundSize: 'cover', paddingTop: '2em',
                                    backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                    backgroundPosition: 'top',
                                    backgroundColor: 'white', borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }} >

                                    <h2>Tech <br /><br />{blogs[1].node.heading}</h2>
                                </Link>
                            </div>
                            <div className={blogStyles.techNews}>
                                    <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} style={{
                                    backgroundImage: `url(${blogs[1].node.image.fluid.src})`, height: '200px',
                                    width: '150px', backgroundSize: 'cover', paddingTop: '2em',
                                    backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                    backgroundPosition: 'top',
                                    backgroundColor: 'white', borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px'
                                }} >

                                    <h2>Tech <br /><br />{blogs[1].node.heading}</h2>
                                </Link>
                            </div>
                            </div>
                            <div id={blogStyles.section3}>
                                <Grid container spacing={0}>
                                    <Grid item md={7}>
                                        <Paper style={{ boxShadow: 'none' }}>
                                            <div id={blogStyles.globaltech}>
                                                <p>GLOBAL TECH</p><hr />
                                            </div>

                                            <div id={blogStyles.global_tech_data}>
                                                <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} >

                                                    <img src={blogs[1].node.image.fluid.src} />
                                                    <h2>{blogs[1].node.heading}</h2>
                                                </Link>
                                            </div>
                                            <div className={blogStyles.global_other_contents}>
                                                {blogs && blogs.slice(0, 2).map((edge) => {
                                                    return (
                                                        <div className={blogStyles.global_content_data}>
                                                            <Link to={`${isOpen ? '/' + edge.node.slug : '/'}`} >

                                                                <img src={edge.node.image.fluid.src} />
                                                                <h2>{edge.node.heading}</h2>
                                                            </Link>

                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Paper style={{ boxShadow: 'none' }}>
                                            <div id={blogStyles.globaltech}>
                                                <p>GLOBAL TECH</p><hr />
                                            </div>
                                            <div id={blogStyles.global_tech_data}>
                                                <Link to={`${isOpen ? '/' + blogs[1].node.slug : '/'}`} >

                                                    <img src={blogs[1].node.image.fluid.src} />
                                                    <h2>{blogs[1].node.heading}</h2>
                                                </Link>
                                            </div>
                                            <div className={blogStyles.global_other_contents}>
                                                {blogs && blogs.slice(2, 4).map((edge) => {
                                                    return (
                                                        <div className={blogStyles.global_content_data}>
                                                            <Link to={`${isOpen ? '/' + edge.node.slug : '/'}`} >

                                                                <img src={edge.node.image.fluid.src} />
                                                                <h2>{edge.node.heading}</h2>
                                                            </Link>

                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                    </Paper>
                </Grid>
                    <Grid item md={5} >
                     <Paper style={{ boxShadow: 'none', marginLeft:'4em' }}>
                        <div id={blogStyles.popular}>
                            <p>Popular <hr /></p>
                            </div>
                            {blogs && blogs.slice(0, 4).map((edge) => {
                                return (
                                    <div className={blogStyles.popular_Data}>
                                        <Link to={`${isOpen ? '/' + edge.node.slug : '/'}`} >

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
          
            <div id={blogStyles.section4}>
                <Grid container spacing={3}>
                {
                    blogs && blogs.slice(0, 4).map((edge) => {
                        return (
                              <Grid item xs={3}>
                                <Paper>
                                    <div className={blogStyles.generalNews}>
                                        <Link to={`/blog/${edge.node.slug}`} style={{
                                            backgroundImage: `url(${edge.node.image.fluid.src})`, height: '250px',
                                            width: '210px', backgroundSize: 'cover', paddingTop: '2em',
                                            backgroundRepeat: 'no-repeat', /* background-attachment: fixed; */
                                            backgroundPosition: 'top',
                                            backgroundColor: 'white'
                                        }} >

                                            <h2>Tech <br /><br />{edge.node.heading}</h2>
                                        </Link>
                                    </div>
                                </Paper>
                                </Grid>
                            
                            )
                    })
                    }
                </Grid>
            </div>
            <div id={blogStyles.section5}>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <Paper style={{ boxShadow: 'none' }}>
                            <div id={blogStyles.globaltech}>
                                <p>GLOBAL TECH</p><hr />
                            </div>
                            {blogs && blogs.slice(2, 5).map((edge) => {

                                return (
                                    <div id={blogStyles.global_tech_data}>
                                        <Link to={`/blog/${edge.node.slug}`} >

                                            <img src={edge.node.image.fluid.src} />
                                            <h2>{edge.node.heading}</h2>
                                        </Link>
                                    </div>
                                );
                            })
                            }
                            
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper style={{ boxShadow: 'none' }}>
                            <div id={blogStyles.globaltech}>
                                <p>GLOBAL TECH</p><hr />
                            </div>
                            {blogs && blogs.slice(0, 3).map((edge) => {

                                return (
                                    <div id={blogStyles.global_tech_data}>
                                        <Link to={`/blog/${edge.node.slug}`} >

                                            <img src={edge.node.image.fluid.src} />
                                            <h2>{edge.node.heading}</h2>
                                        </Link>
                                    </div>
                                );
                            })
                            }
                        </Paper>
                    </Grid>
                    <Grid item md={4} >
                        <Paper style={{ boxShadow: 'none', marginLeft:'2em' }}>
                            <div id={blogStyles.popular}>
                                <p>Popular <hr /></p>
                            </div>
                            {blogs && blogs.slice(0, 4).map((edge) => {
                                return (
                                    <div className={blogStyles.mustRead}>
                                        <Link to={`/blog/${edge.node.slug}`} >
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