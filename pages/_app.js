import "../styles/globals.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import Layout from "./components/layout"
function MyApp ({ Component,pageProps}){
  return( 
  <Layout>
    <Component {...pageProps}/>
  </Layout>
  )
}

export default MyApp