import { Session } from "inspector";
import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";
import { Candidacy } from "./candidacy";
import { Candidats } from "./candidats";
import { Sessions } from "./sessions";
import { Users } from "./users";

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

Users.hasMany(Sessions, {
    foreignKey: "userID",
});

Sessions.belongsTo(Users, {
    foreignKey: "userId",
});

export * from "./applicationsCategory";
export * from "./appplications";
export * from "./candidacy";
export * from "./sessions";
export * from "./users";
