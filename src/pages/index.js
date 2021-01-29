import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import StoryLink from "../components/storylink"
import GuideLink from "../components/guidelink"
import RecentGuides from "../components/recentGuides"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Stories = edges.map(edge => <StoryLink post={edge.node} />)
    const featStoryData = [
    {
      frontmatter: {
        slug: "/stories/michelle-bu",
        name: "Michelle Bu",
        role: "Payments Product Tech lead at Stripe",
      },
    },	
    {
      frontmatter: {
        slug: "/stories/bert-fan",
        name: "Bert Fan",
        role: "Senior Staff Engineer at Slack",
      },
    },
    {
      frontmatter: {
        slug: "/stories/duretti-hirpa",
        name: "Duretti Hirpa",
        role: "Formerly Staff Engineer at Mailchimp",
      },
    },      
  ]
  const FeatStories = featStoryData.map(node => <StoryLink post={node} />)
  const featGuideData = [
    {
      frontmatter: {
        slug: "/guides/work-on-what-matters",
        title: "Work on what matters",
      },
    },
    {
      frontmatter: {
        slug: "/guides/staying-aligned-with-authority/",
        title: "Staying aligned with authority",
      },
    },
    {
      frontmatter: {
        slug: "/guides/promo-packets/",
        title: "Promotion packets",
      },
    },
    {
      frontmatter: {
        slug: "/guides/manage-technical-quality/",
        title: "Manage technical quality",
      },
    },
    {
      frontmatter: {
        slug: "/guides/engineering-strategy",
        title: "Engineering strategy",
      },
    },
  ]
  const FeatGuides = featGuideData.map(node => <GuideLink post={node} />)

  return (
    <Layout>
      <SEO title="Stories of reaching Staff-plus engineering roles - StaffEng" />
      <p>
        At most technology companies, you'll reach Senior Software Engineer, the{" "}
        <a href="https://lethain.com/mailbag-beyond-career-level/">
          career level
        </a>
        , in five to eight years. At that point your path branches, and you have
        the opportunity to pursue engineering management or continue down the
        path of technical excellence to become a Staff Engineer.
      </p>
      <p>
        Over the past few years we've seen a flurry of books unlocking the
        engineering manager career path, like Camille Fournier's{" "}
        <a href="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897">
          The Manager's Path
        </a>
        , Julie Zhuo's{" "}
        <a href="https://www.amazon.com/Making-Manager-What-Everyone-Looks/dp/0735219567/">
          The Making of a Manager
        </a>{" "}
        and my own{" "}
        <a href="https://www.amazon.com/Elegant-Puzzle-Systems-Engineering-Management/dp/1732265186">
          An Elegant Puzzle
        </a>
        . The management career isn't an easy one, but increasingly there is a
        map available.
      </p>

      <div class="pull">
        <p>
          <strong>Stories</strong>
        </p>
        <ul>
          {FeatStories}
          {Stories}
        </ul>
        <p>
          <Link to={"/stories"}>
            <em>Looking for more? Read all stories…</em>
          </Link>
        </p>
      </div>
      <p>
        The transition into Staff Engineer, and its further evolutions like
        Principal Engineer, remains particularly challenging and undocumented.
        What are the skills you need to develop to reach Staff Engineer? What
        skills do you need to succeed <em>after</em> you've reached it? How do
        most folks reach this role? What can companies do to streamline the path
        to Staff Engineer? Will you <em>enjoy</em> being a Staff Engineer or
        toil for years for a role that doesn't suit you?
      </p>
      <div class="pull">
        <p>
          <strong>Guides</strong>
        </p>
        <ul>
          {FeatGuides}
          <RecentGuides />
        </ul>
        <p>
          <Link to={"/guides"}>
            <em>Looking for more? Read all guides…</em>
          </Link>
        </p>
      </div>

      <p>
        The <strong>StaffEng</strong> project aims to collect the stories of
        folks who are operating in Staff, Principal or Distinguished Engineer
        roles. How did you get there? What were your lucky breaks? How did you
        learn to be effective? As more of these stories are collected, I hope to
        build a dataset that helps folks draw their own map to Staff Engineer.
      </p>
    </Layout>
  )
}

export default IndexPage

export const stories = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { kind: { eq: "story" } } }
      limit: 2
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            slug
            date
          }
        }
      }
    }
  }
`
