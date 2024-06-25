const { Admin } = require("../model")

const create_admin_s = (data) => {
    console.log("servicessss");
    return Admin.create(data)
}

const get_admin_s = () => {
    return Admin.find()
}

const delete_admin_s = (id) => {
    return Admin.findByIdAndDelete(id)
}

const update_admin_s = (id,data) => {
    return Admin.findByIdAndUpdate(id,data)
}


module.exports = {
    create_admin_s,
    get_admin_s,
    delete_admin_s,
    update_admin_s
}