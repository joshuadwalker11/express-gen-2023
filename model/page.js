const db = require('../config/db');

module.exports = {
    'getPage': async function (key) { // key ==> care

        const conn = await db.getConnection();

        key = key.toLowerCase();

        // running a query to retrieve data for the page with `key` ==> "care"
        const result = await conn.query(
            "select page_id, title, content, `key` from page where `key` = ?", [key]);

        let status = conn.end(); // release the connection back to the pool

        let ret; // define ret at this scope level
        if (result.length < 1) { // check that there is at least 1 row
            // define result structure - no results
            ret = {
                'row': null,
                'status': false
            }
        } else {
            // define result structure: row has first (only) row of results
            ret = {
                'row': result[0],
                'status': true
            };
        }

        return ret; // return result structre
    }
};