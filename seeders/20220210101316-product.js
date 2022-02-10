'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Products', [
      {
        item: '加气板材',
        desc: '加气带钢筋板材',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: '加气砌块',
        desc: '加气标准化砌块',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], 
    {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
