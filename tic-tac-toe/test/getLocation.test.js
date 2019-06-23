const getLocation = require('../src/ui/game/GetLocation').getLocation

const assert = require('assert');

describe('PositionTest', function() {
    it("returns the position when passed a move", function() {
        const position0 = 'row: 1, col: 1'
        const position1 = 'row: 1, col: 3'
        const position2 = 'row: 2, col: 1'
        const position3 = 'row: 2, col: 2'
        const position4 = 'row: 1, col: 2'
        const position5 = 'row: 2, col: 3'
        const position6 = 'row: 3, col: 1'
        const position7 = 'row: 3, col: 2'
        const position8 = 'row: 3, col: 3'

        assert.equal(position0, getLocation(0))
        assert.equal(position1, getLocation(2))
        assert.equal(position2, getLocation(3))
        assert.equal(position3, getLocation(4))
        assert.equal(position4, getLocation(1))
        assert.equal(position5, getLocation(5))
        assert.equal(position6, getLocation(6))
        assert.equal(position7, getLocation(7))
        assert.equal(position8, getLocation(8))
    })
})