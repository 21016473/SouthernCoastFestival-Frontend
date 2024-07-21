import App from './App'
import Router, { gotoRoute } from './Router'
import splash from './views/partials/splash'
import { html, render } from 'lit'
import Toast from './Toast'

class Auth {

    constructor() {
        this.currentUser = {
          accessLevel: 'user'
        }
    }

    // async sign up

    // async sign in
    async signIn(userData, callback){
      try {
        const response = await fetch(`${App.apiBase}/auth/signin`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },     
          body: JSON.stringify(userData)
        })
  
        const data = await response.json()
    
        // if response not ok
        if(!response.ok){
          console.log(data)
          if (callback) callback(false)
        } else {
          localStorage.setItem('accessToken', data.accessToken)
          this.currentUser = {
            ...data.user,
            accessLevel: data.user.accessLevel || 'user'
          }
          Router.init()
          if (callback) callback(true)
        }
      } catch (error) {
        console.error('Sign-in error:', error)
        if (callback) callback(false)
      }
    }

    // async check
    async check(success) {
        // show splash screen while loading
        render(splash, App.rootEl)

        // check loacl token exists
        if(!localStorage.accessToken) {
            // no local token
            // Toast.show("token not found")
            // redirect
            gotoRoute('/')
            return
        }

        // validate token via the backend
        const response = await fetch(`${App.apiBase}/auth/validate`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.accessToken}`
            }
        })

        // response not ok
        if(!response.ok) {
            // console log error
            const err = await response.json()
            if(err) console.log(err)
            // delete local token
            localStorage.removeItem('accessToken')
            Toast.show("session expired, please sign in")
            // redirect to sign in
            gotoRoute('/')
            return
        }

        // token is valid
        const data = await response.json()
        // set currentUser obj
        this.currentUser = {
          ...data.user,
          accessLevel: data.user.accessLevel || 'user'
        }
        // run success
        success()
    }

    // async sign out
    signOut() {
      localStorage.removeItem('accessToken')
      gotoRoute('/')
      this.currentUser = {
        accessLevel: 'user'
      }

      const screenContent = document.getElementById('screen-content')
      if (screenContent) {
        screenContent.classList.remove('shifted')
      }
    }
}

export default new Auth()