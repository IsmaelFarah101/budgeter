'use strict';

let income = [
  {
    name:'Main Job',
    amount:1500.00,
    description:'This is my main sources of income for the month',
    from:'Mcdonald'

  },
  {
    name:'Grandma',
    amount:200.00,
    description:'This is money that my grandmother sent me',
    from:'Grandma Betty'
  },
  {
    name:'Second Job',
    amount:720.00,
    description:'This is my secondary source of income for the month',
    from:'Wendys'
  },
]



module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let incomes = income.map(function(s) { 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Incomes', incomes, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Incomes', null, {});

  }
};