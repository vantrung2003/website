'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'trungdeptrailama123@example.com',
      password:'admin123',
      firstName: 'Van',
      lastName: 'Trung',
      address:'Tân Lễ - Hưng Hà - Thái Bình',
      gender:1,
      typeRole:'R1',
      keyRole:'ROLE',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
