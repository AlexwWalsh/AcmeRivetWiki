'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('rivets',
      [
        {
          name: 'Morris',
          size: '4',
          material:'stone',
          capacity: "Long walks on the beach.",
          description: 'lorem ipsum',
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
            name: 'lorem ipsum',
            size: '4',
            material:'lorem ipsum',
            capacity: "lorem ipsum.",
            description: 'lorem ipsum',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'lorem ipsum',
            size: '6',
            material:'lorem ipsum',
            capacity: "lorem ipsum.",
            description: 'lorem ipsum',
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {})

 }
};
