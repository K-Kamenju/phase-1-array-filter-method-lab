// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, value) {
    return array.filter(item => {
        return item.toLowerCase() === value.toLowerCase()
    })
}

function fuzzyMatch(array, letters) {
    return array.filter(item => item.startsWith(letters))
}


const driversLocation = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(array, name) {

    return array.filter(item => {
        if(item.name === name) {
            return item
        }
    })
}

matchName(driversLocation, "Bobby")