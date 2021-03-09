import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";
import { Candidacy } from "./candidacy";

ApplicationsCategory.hasMany(Applications, {
  foreignKey: "applicationCategoryId",
});
Applications.belongsTo(ApplicationsCategory, {
  foreignKey: "applicationCategoryId",
});

Candidacy.belongsTo(Applications, {
  foreignKey: "applicationId",
});
Applications.hasMany(Candidacy, {
  foreignKey: "applicationId",
});

export * from "./applicationsCategory";
export * from "./appplications";
export * from "./candidacy";
