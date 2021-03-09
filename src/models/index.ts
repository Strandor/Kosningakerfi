import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";
import { Candidacy } from "./candidacy";
import { Candidats } from "./candidats";

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

Candidats.belongsTo(Candidacy, {
  foreignKey: "candidacyId",
});

Candidacy.hasMany(Candidats, {
  foreignKey: "candidacyId",
});

export * from "./applicationsCategory";
export * from "./appplications";
export * from "./candidacy";
