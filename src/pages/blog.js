import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout"
import Head from '../components/head'

import blogStyles from "./blog.module.scss"
const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)
    return (
        <div>
            <Layout>
                <Head title = "Blog"></Head>
                <h1>Blogs</h1>
                <ol className = {blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li className={blogStyles.post}>
                                    <h2><Link to= {`./blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}
                                    <p>{edge.node.frontmatter.date}</p>
                                    </Link></h2>
                                </li>
                            )
                        })
                    }
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage