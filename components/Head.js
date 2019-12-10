import Head from 'next/head'
import Header from './Header';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8"/>
        <link rel="shortcut icon" href="/static/favicon.png"/>
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
        <title>Mineral Group</title>
      </Head>
      <Header/>
    </div>
  )
}

export default IndexPage;