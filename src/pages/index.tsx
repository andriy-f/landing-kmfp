import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../home/Header'
import Frame from '../home/Frame'

// const pageStyles = {
//   color: '#232129',
//   padding: 96,
//   fontFamily: '-apple-system, Roboto, sans-serif, serif',
// }


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Header />
      <main className="frame">
        <Frame />
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
