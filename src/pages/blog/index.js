import React from "react"
import { graphql, Link } from "gatsby"

import { mdiFolderHome } from "@mdi/js"

import Layout from "../../components/layout"

const BlogIndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  // console.log({ data })
  return (
    <Layout title={`Blog`} pathIndex={`1`}>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              &nbsp;
              <small>
                {" "}
                <em>published on</em> {frontmatter.date}
              </small>
              <p>{frontmatter.excerpt}</p>
              <br />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogIndexPage