const con = require('../databaseConnection/connection')

module.exports.showData = (req, res) => {
    con.query('select * from courses_details', (err, result) => {
        if(err) throw err;
        console.log(result)
        res.send(result)
    });
}