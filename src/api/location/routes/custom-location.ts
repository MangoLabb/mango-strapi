
export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/locations/by-user/:id',
        handler: 'location.findByUser',
      }
    ]
  }