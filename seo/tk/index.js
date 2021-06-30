const has = [
    {
      type: 'host',
      value: 'localhost', //we can use the domain here to be even more safe.
    },
]

const ROUTES = [              
    {   
        source: '/paper', 
        destination: '/tk/paper', 
        has: has
    },
];

module.exports = ROUTES