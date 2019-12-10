import Head from 'next/head'
import Header from './Header';
function IndexPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8"/>
        <link rel="shortcut icon" href="/public/static/favicon.png"/>
        <link rel="stylesheet" type="text/css" href="/public/static/nprogress.css"/>
        <title>Mineral Group</title>
      </Head>
      <Header/>
    </div>
  )
}

export default IndexPage;