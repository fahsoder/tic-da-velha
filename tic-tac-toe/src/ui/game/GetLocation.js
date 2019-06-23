function getLocation (move) {
    const locationMap = {
      0: 'row: 1, col: 1',
      2: 'row: 1, col: 3',
      3: 'row: 2, col: 1',
      4: 'row: 2, col: 2',
      1: 'row: 1, col: 2',
      5: 'row: 2, col: 3',
      6: 'row: 3, col: 1',
      7: 'row: 3, col: 2',
      8: 'row: 3, col: 3',
    };
    return locationMap[move];
}

module.exports = {getLocation}