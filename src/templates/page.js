import React from "react"
import { graphql } from "gatsby"
import Calculator from "../components/calculator"

const Page = ({ data }) => {

  console.log(data.contentfulPage.components);

  return (
    <div>
      <h1>{data.contentfulPage.pageTitle}</h1>
      {data.contentfulPage.components.map((component) => <Calculator title={component.title} subtitle={component.subtitle} />)}
    </div>
  )
}
export const query = graphql`

query PageQuery(
    $id: String!
  )
  {
    contentfulPage(id: {eq: $id}) {
      pageTitle
      components {
        subtitle
        title
        internal {
          type
        }
      }
    }
  }
`

export default Page