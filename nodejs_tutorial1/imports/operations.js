function findFirst(a, predicate) {
    return a.filter(predicate)[0];
}

module.exports = { findFirst };