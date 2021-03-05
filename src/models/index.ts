import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";

ApplicationsCategory.hasMany(Applications, {
  foreignKey: "applicationCategoryId",
});
Applications.belongsTo(ApplicationsCategory, {
  foreignKey: "applicationCategoryId",
});

export * from "./applicationsCategory";
export * from "./appplications";
