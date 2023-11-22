const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === "Mustafa") {
        req.user = {name: 'Mustafa', id: 1900099};
        next();
    } else {
        res.status(401).send('Unauthorized.')
    }

    console.log('authorize');
    next();
}

module.exports = authorize;