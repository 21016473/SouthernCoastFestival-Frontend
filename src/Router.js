// import views
import homeView from './views/pages/home'
import errorView from './views/pages/404'
import adminView from './views/pages/admin'
import eventsView from './views/pages/events'
import newEventView from './views/pages/new-event'

// define routes
const routes = {
    '/': homeView,
    '404': errorView,
    '/admin': adminView,
    '/events': eventsView,
    '/newEvent': newEventView
}

class Router {
    constructor() {
        this.routes = routes
    }

    init() {
        // initial call
        this.route(window.location.pathname)

        // on back/forward
        window.addEventListener('popstate', () => {
            this.route(window.location.pathname)
        })
    }

    route(fullPathname) {
        // extract path without params
        const pathname = fullPathname.split('?')[0]
        const route = this.routes[pathname]

        if(route) {
            // if route exists, run init() of the view
            route.init()
        } else {
            // show 404 view
            this.routes['404'].init()
        }
    }

    gotoRoute(pathname) {
        window.history.pushState({}, '', pathname)
        this.route(pathname)
    }
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter

// programmatically load any route
export function gotoRoute(pathname) {
    AppRouter.gotoRoute(pathname)
}

// allows anchor <a> links to load route
export function anchorRoute(e) {
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    AppRouter.gotoRoute(pathname)
}