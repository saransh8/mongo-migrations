const instanceMigrate = require("../../utils/instanceMigrations");

module.exports = {
  async up(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("groups").createIndex({ legacy_id: 1 });

    })
  },

  async down(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("groups").dropIndex({ legacy_id: 1 });
    });
  }
};
