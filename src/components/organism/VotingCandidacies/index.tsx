import React, { useMemo } from "react";
import { connect } from "react-redux";
import { DropdownItem, RadioButton } from "../..";
import { StoreState, addVote, removeVote } from "../../../redux";
import { IProps } from "./interface";

const Component = ({ voting, application, addVote, removeVote }: IProps) => {
	const count = useMemo(() => {
		console.log(voting.votes);
		return voting.votes.reduce((pv, cv) => {
			if (application.candidacies.find((candidacy) => candidacy.id == cv))
				return pv + 1;

			return pv;
		}, 0);
	}, [voting.votes]);

	return (
		<DropdownItem
			text={`${application.name} (${count}/${application.maxVotes})`}
		>
			<p>Þú getur kosið allt að {application.maxVotes}</p>
			{application.candidacies.map((candidacy) => (
				<RadioButton
					text={candidacy.name}
					disabled={
						count > application.maxVotes - 1 &&
						!voting.votes.includes(candidacy.id)
					}
					onChange={(value) => {
						if (value) {
							addVote(candidacy.id);
						} else {
							removeVote(candidacy.id);
						}
					}}
				/>
			))}
		</DropdownItem>
	);
};

const mapStateToProps = (state: StoreState) => ({
	voting: state.voting,
});

const mapDispatchToProps = {
	addVote,
	removeVote,
};

export const VotingCandidacies = connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);
