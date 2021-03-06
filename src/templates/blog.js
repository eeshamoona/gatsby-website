import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Comments from '../components/comment'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: {slug: {eq: $slug}}) {
            frontmatter{
                title
                date
            }
            html
        }
    }
`
const Blog = (props) => {
    return (
        <Layout>
            <Head title = {props.data.markdownRemark.frontmatter.title}></Head>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>
            </div>
            <Comments />
        </Layout>
    )
}

export default Blog