module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'us-cdbr-iron-east-01.cleardb.net',
        user: process.env.DATABASE_USER || 'b696788db440f3',
        password: process.env.DATABASE_PASSWORD || '0fcfcb71',
        database: process.env.DATABASE_NAME || 'heroku_a20e75802d7b786'
    }

};
