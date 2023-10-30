import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store.js'

import { Auth0Provider } from '@auth0/auth0-react';
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const client_id = import.meta.env.VITE_AUTH0_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Auth0Provider
        domain={domain}
        clientId={client_id}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        >
            <App />
        </Auth0Provider>
    </Provider>,
)
