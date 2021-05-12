import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedMedia from "./FeaturedMedia"
import UniversalLink from "./UniversalLink"

const RecentPost = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 5) {
        edges {
          node {
            title
            uri
            featuredImage {
              node {
                altText
                localFile {
                  ...AvatarImage
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allWpPost.edges)
  return (
      <div>
       { data.allWpPost.edges.map((post,index) => (
            <div key={index} className="post-item">
              <UniversalLink
                    to={post.node.uri} 
                  >
                    <FeaturedMedia image={post.node.featuredImage} />
              </UniversalLink>
               
               <div className="post-content">
                  <h3>
                  <UniversalLink
                    to={post.node.uri} 
                  >
                    {post.node.title}
                  </UniversalLink>
                  
                  </h3>
               </div>
            </div>
        ))}
      </div>
  )
}

export default RecentPost
