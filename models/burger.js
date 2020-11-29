const orm =require("../config/orm");

const types = {
    all: function (cb) {
        orm.all("types", function (res) {
            cb(res)
        })
    },

    create: function (vals, cb) {
        orm.create('types', ["name" , "devoured"], [vals, false], cb )
    },

    update: function (id, cb) {
        const condition = "id=" + id
        orm.update("types", {devoured:true}, condition, cb )
    }
};

module.exports = types;