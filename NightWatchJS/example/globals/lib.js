
module.exports = {
    beforeEach: function (client, done) {
        console.log("Test started @ " + new Date().toLocaleString());

        done();
    },

    afterEach: function(client, done) {
        console.log("Test done @ " + new Date().toLocaleString());
        client.end();
        done();
    }

};
