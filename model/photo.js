const db = require('../config/db');

let photo = {
    'getPhotos': async function () {
        // gets db connection
        let conn = await db.getConnection();
        // query the sql string
        const result = await conn.query("select photo_id, filename, description, date_modified from photo order by date_modified");
        // ennds connection to add it back to the pool so something else can use connection
        let status = conn.end();
        // the ret variable holds the rows (results) from our query
        let ret = {
            'rows': result,
            'status': status,
        };
        // makes ret available for rest of program
        return ret;
    },

    'getPhoto': async function (id) {
        let conn = await db.getConnection();

        const result = await conn.query(
            "select photo_id, filename, description, date_modified from photo where photo_id = ?", [id]);
        let status = conn.end();

        // the ret variable holds the rows (results) from our query
        let ret = {
            'row': result[0],
            'status': status,
        };
        // makes ret available for rest of program
        return ret;
    }
};



module.exports = photo;