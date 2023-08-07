import React from 'react'
import { css } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const heroSectioinStyle = css`
  border-radius: 0px 0px 30px 30px;
`

const backgroundStyles = css`
  background: url(/images/header.jpg);
  height: 1026px;
  left: 40px;
  position: absolute;
  top: 0;
  width: 1920px;
`

const navbarWrapperStyles = css`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--p2-primary-200);
  height: 110px;
  left: 40px;
  position: absolute;
  top: 0;
  width: 1920px;
`

const navbarStyles = css`
  align-items: center;
  display: flex;
  gap: 10px;
  height: 110px;
  justify-content: center;
  left: 240px;
  padding: 59px 0px;
  position: relative;
  width: 1440px;
`

export default function Header() {
  return (
    <header>
      {/* <h1>Live Kirtan Meidation for peace</h1> */}
      {/* <StaticImage alt="Indie band" src="../images/love-lg-2.jpg" /> */}

      <div css={heroSectioinStyle}>
        <div css={backgroundStyles} >
          <div css={navbarWrapperStyles}>
            <div css={navbarStyles}>
              <div className="div-wrapper-2">
                <div className="text-wrapper-22">HOME</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-22">🔴 LIVE</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-22">TICKETS</div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-22">CONTACT</div>
              </div>
            </div>
          </div>
          <div className="LIVE-KIRTAN">
            LIVE
            <br />
            KIRTAN
            <br />
            MEDITATION
            <br />
            FOR PEACE
          </div>
          <div className="group-6">
            <div className="get-tickets-wrapper">
              <div className="get-tickets">GET TICKETS</div>
            </div>
          </div>
          <p className="hello-london-join-us">HELLO LONDON! JOIN US ON</p>
          <img className="logo-2" alt="Logo" src="/images/logo-1-2.svg" />
        </div>
      </div>
    </header>
  )
}
