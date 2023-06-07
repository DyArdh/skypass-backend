'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'InformationFlights',
      [
        {
          baggage_capacity: '20 kg',
          cabin_capacity: '10 kg',
          flight_entertainment: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          baggage_capacity: '21 kg',
          cabin_capacity: '15 kg',
          flight_entertainment: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          baggage_capacity: '30 kg',
          cabin_capacity: '12 kg',
          flight_entertainment: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          baggage_capacity: '50 kg',
          cabin_capacity: '10 kg',
          flight_entertainment: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          baggage_capacity: '50 kg',
          cabin_capacity: '20 kg',
          flight_entertainment: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InformationFlights', null, {});
  },
};
