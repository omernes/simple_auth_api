module.exports = {
    get,
    add
};

function get(req, res, next) {
    res.json({ message: "got data" });
}

function add(req, res, next) {
    res.json({ message: "added data" });
}

