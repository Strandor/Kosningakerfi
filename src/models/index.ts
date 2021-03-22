import { ApplicationsCategory } from "./applicationsCategory";
import { Applications } from "./appplications";
import { Candidacy } from "./candidacy";
import { Candidats } from "./candidats";
import { Sessions } from "./sessions";
import { Users } from "./users";
import { VotingKeys } from "./votingKeys";
import { Votes } from "./votes";

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

VotingKeys.hasMany(Votes, {
	foreignKey: "votingKeyId",
});

Votes.belongsTo(VotingKeys, {
	foreignKey: "votingKeyId",
});

Candidacy.hasMany(Votes, {
	foreignKey: "candidacyId",
});

Votes.belongsTo(Candidacy, {
	foreignKey: "candidacyId",
});

Applications.hasMany(Votes, {
	foreignKey: "applicationId",
});

Votes.belongsTo(Applications, {
	foreignKey: "applicationId",
});

export * from "./applicationsCategory";
export * from "./appplications";
export * from "./candidacy";
export * from "./sessions";
export * from "./users";
export * from "./votingKeys";
export * from "./announcements";
export * from "./interface";
export * from "./votes";
