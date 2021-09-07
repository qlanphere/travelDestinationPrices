const locsData = require("../data");


class Destinations {
    constructor(data) {
        this.id = data.id;
        this.location = data.location;
        this.price = data.price;
    }

    static get all() {
        const dests = locsData.map((dest) => new Destinations(dest));
        return dests;
    }

    static create(dest) {
        const newDestId = locsData.length+1
        const newDest = new Destinations({id:newDestId, ...dest});
        locsData.push(newDest);
        return newDest;
    }

    static findById(id) {
        try {
            const locData = locsData.filter((loc) => loc.id === id)[0];
            const loc = new Destinations(locData);
            return loc;
        } catch (err) {
            throw new Error('That location does not exist!');
        }
    }
}



module.exports = Destinations;