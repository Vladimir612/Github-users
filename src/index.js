import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
//vladimir-lazarevic.us.auth0.com
//Q1N2ODrz9hyV7maFrcDPH1YCam2UC78D

ReactDOM.render(
 <React.StrictMode>
  <Auth0Provider
   domain='vladimir-lazarevic.us.auth0.com'
   clientId='Q1N2ODrz9hyV7maFrcDPH1YCam2UC78D'
   redirectUri={window.location.origin}
   cacheLocation='localstorage' //for social logins when you come back from 404 page or other pages that you stay logged in
  >
   <GithubProvider>
    <App />
   </GithubProvider>
  </Auth0Provider>
 </React.StrictMode>,
 document.getElementById('root')
)

serviceWorker.unregister()
