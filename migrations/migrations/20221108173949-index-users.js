const instanceMigrate = require("../../utils/instanceMigrations");

module.exports = {
  async up(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("users").createIndex({ first_name: 1, last_name: 1, email: 1 }, { collation: { locale: "en" } });
      await instanceDb.collection("users").createIndex({ legacy_id: 1 });
      await instanceDb.collection("users").createIndex({ "primary_company_info._id": 1, "primary_company_info.name": 1, "primary_company_info.role": 1 });
      await instanceDb.collection("users").createIndex({ "group_relationships._id": 1, "group_relationships.name": 1 });
    })
  },

  async down(db) {
    await instanceMigrate(async (instanceDb) => {
      await instanceDb.collection("users").dropIndex({ first_name: 1, last_name: 1, email: 1 });
      await instanceDb.collection("users").dropIndex({ legacy_id: 1 });
      await instanceDb.collection("users").dropIndex({ "primary_company_info._id": 1, "primary_company_info.name": 1, "primary_company_info.role": 1 });
      await instanceDb.collection("users").dropIndex({ "group_relationships._id": 1, "group_relationships.name": 1 });
    });
  }
};
