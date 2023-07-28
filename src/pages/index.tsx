import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../home/header'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header />
      <main style={pageStyles}>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
