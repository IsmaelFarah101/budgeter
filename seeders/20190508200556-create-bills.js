'use strict';
let bill = [
   {
      name: 'Electricity',
      amount:65.00,
      description:'This is the electricity bill from General Electric'
   },
   {
      name: 'Medical',
      amount:120.00,
      description:'This is is my medical bill for my broken leg'

   },
   {
      name: 'Subscriptions',
      amount:23.50,
      description:'This is my netflix and hulu bill'

   },
   {
      name: 'Prescription',
      amount:470.20,
      description:'This is for my opiod addiction'

   }
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
    let bills = bill.map(function(s) {
      s.paid = false  
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Bills', bills, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Bills', null, {});

  }
};