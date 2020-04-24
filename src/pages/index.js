import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "dg6tezt9ehsc",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "jzYHeJUGSrUSrMo-x4x5gnDFF7Mv1XjJdgL8R80pHNU"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
let name = null
client
  .getEntry("1EciK2tdf6WeBfFbjwkDtY")
  .then(entry => {
    console.log(entry.fields.names)
    name = entry.fields.names
  })
  .catch(err => console.log(err));
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>{name}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
