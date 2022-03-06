// In this file we would contains all the routes at one place for extensible and scaling reason
// change on this one file will be reflected through out product


// open routes can be accessible for logged out users.
export const openRoutes = {
  root: '/',
  movies: '/movies',
}

// protected routes can be accessable only for logged in users.
export const protectedRoutes = {

}

// neutral routes can be accessable in both logged in stage and logged out stage as well. 
export const neutralRoutes = {

}
