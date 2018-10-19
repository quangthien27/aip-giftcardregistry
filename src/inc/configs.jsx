const configs = {
  /**
   * Base API url
   */
  apiBase: `http://${window.location.hostname !== 'localhost' ? window.location.hostname : 'localhost'}:5000`,

  /**
   * Pre-designed cards
   */
  cardDesigns: [
    {id: 0, label: 'Just Married'},
    {id: 1, label: 'Engagement'},
    {id: 2, label: 'Happy Birthday'},
    {id: 3, label: 'Congratulations'},
    {id: 4, label: 'For your new home'},
    {id: 5, label: 'Happy father day'},
    {id: 6, label: 'Let\'s share'},
    {id: 7, label: 'Travelling'}
  ],

  /**
   * Client messages
   */
  messages: {
    error: 'Something went wrong, please try again!',
    registryAdded: 'Registry added. You\'ll now be redirected to dashboard to get the registry link, and SHARE !!!',
    registryContributed: 'Thanks for your contribution! You can now close the window or continue to contribute :)'
  },

  /**
   * Endpoint slugs
   */
  endpoints: {
    dashboard: '/dashboard'
  }
};

export default configs;
