const instanceMigrate = require("../../utils/instanceMigrations");

module.exports = {
  async up(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("companies").createIndex({ legacy_id: 1 });
      await instanceDb.collection("companies").createIndex({ "users._id": 1, "users.hierarchy": 1 });
      db.groups.createIndex({ legacy_id: 1 });

    })
  },

  async down(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("companies").dropIndex({ legacy_id: 1 });
      await instanceDb.collection("companies").dropIndex({ "users._id": 1, "users.hierarchy": 1 });
    });
  }
};
