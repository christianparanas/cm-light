import Head from 'next/head'

import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Magaan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Nav />
        <div className="content">
          <img src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/158711789_102112648622887_9013397911764986548_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEy_LOvQ-ytY3gMM50OXL3z2l6PWu6bEtnaXo9a7psS2SwuWBJjZUmlRIvoar_g-QsP3M3vp_uIsMe_9LGWtOiY&_nc_ohc=AG2rSH0RR8sAX92Xq5g&_nc_ht=scontent.fceb2-1.fna&oh=10392c73a7339ea3b59cb50973643fda&oe=607F0E25" alt="magaan" />
          <div className="sir">Hello sir. Ronnie G. Cabillan, I am Kristal Kate Magaan from BSIT 2-E.</div>
        </div>
      </main>
    </div>
  )
}
