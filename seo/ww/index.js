const has = [
    {
      type: 'host',
      value: 'localhost', //we can use the domain here to be even more safe.
    },
]


const ROUTES = [              
    {   
        source: '/wedding-paper', 
        destination: '/ww/paper', 
        has: has
    },
];

module.exports = ROUTES