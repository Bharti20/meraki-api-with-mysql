const con = require('../databaseConnection/connection')
const allData = require('../courses.json')
module.exports.addData = (req,res) => {
    var i = 0;
    while(i<1){
        let data = {
            id:allData["availableCourses"][i]['id'],
            name:allData["availableCourses"][i]['name'],
            type: allData["availableCourses"][i]['type'],
            logo: allData["availableCourses"][i]['logo'],
            short_description: allData["availableCourses"][i]["short_description"]
        }
        con.query('insert into courses_details set?', data, (err) =>{
            if(err) throw err;
            console.log(data, 'These data inserted')
            res.send(data);
        })
        i++
    };
};