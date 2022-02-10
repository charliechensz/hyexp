'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Articles', [
       {
        title: 'XM_ProX15',
        content: '不完美但足够好用的一台笔记本',
        type:"IT",
        qty:"100",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        title: "M1接近完美",
        content: "除了屏幕小点、内存基本够用",
        type:"YY",
        qty:"100",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "优优是个好球童",
        content: "优优捡高尔夫球真棒，尤其在树丛的时候，人根本进不去。我找到球，优优再过去捡，配合棒极了。",
        type:"YY",
        qty:"100",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
