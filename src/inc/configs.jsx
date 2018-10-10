const configs = {
  apiBase: `http://${window.location.hostname !== 'localhost' ? window.location.hostname : 'localhost'}:5000`,
  cardDesigns: [
    {id: 0, label: 'Just Married'},
    {id: 1, label: 'Engagement'},
    {id: 2, label: 'Happy Birthday'},
    {id: 3, label: 'Congratulations'},
    {id: 4, label: 'For your new home'},
    {id: 5, label: 'Happy father day'},
    {id: 6, label: 'Let\'s share'},
    {id: 7, label: 'Travelling'}
  ]
};

export default configs;
