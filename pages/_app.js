import React from 'react'
import App from 'next/app'
import Page from '../components/Page'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <div className="layout">{children}</div>
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
          <Page>
            <Component {...pageProps} />
          </Page>
      </Layout>
    )
  }
}