import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";
import { Candidacy } from "./candidacy";
import { Candidats } from "./candidats";
import { Sessions } from "./sessions";
import { Users } from "./users";
import { VotingKeys } from "./votingKeys";
import { Announcements } from "./announcements";

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
    onDelete: "cascade",
    foreignKey: "userID",
});

Sessions.belongsTo(Users, {
    onDelete: "cascade",
    foreignKey: "userId",
});

Users.hasMany(VotingKeys, {
    foreignKey: "userId",
});

VotingKeys.belongsTo(Users, {
    foreignKey: "userId",
});

Announcements.belongsTo(Users, {
    foreignKey: "userId",
});

Users.hasMany(Announcements, {
    foreignKey: "userId",
});

export * from "./applicationsCategory";
export * from "./appplications";
export * from "./candidacy";
export * from "./sessions";
export * from "./users";
export * from "./votingKeys";
export * from "./announcements";
