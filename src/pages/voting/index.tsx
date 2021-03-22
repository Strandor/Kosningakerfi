import { FieldArray, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import {
	DropdownItem,
	GenericButton,
	InputText,
	MarginWrapper,
	RadioButton,
	VotingCandidacies,
} from "../../components";
import { StoreState, fetchVoting, VotingState, submitVotes } from "../../redux";

interface IProps {
	fetchVoting: typeof fetchVoting;
	voting: VotingState;
	submitVotes: typeof submitVotes;
}

const Voting = ({ voting, fetchVoting, submitVotes }: IProps) => {
	const _isDisabled = (object, application, candidacy) => {
		if (object[application.id]) return false;
		return true;
	};

	return (
		<MarginWrapper>
			{voting.voting?.votingKey ? (
				<>
					{voting.voting?.applications.map((application) => (
						<DropdownItem
							text={`${application.name} (${application.maxVotes})`}
						>
							<VotingCandidacies
								candidacies={application.candidacies}
								maxVotes={application.maxVotes}
							/>
						</DropdownItem>
					))}
					<GenericButton onPress={submitVotes} loading={voting.loading}>
						Senda inn
					</GenericButton>
				</>
			) : (
				<Formik
					initialValues={{
						votingKey: "",
					}}
					onSubmit={(values) => {
						fetchVoting(values);
					}}
				>
					{({ handleChange, handleSubmit }) => (
						<>
							<InputText id="votingKey" text="Kóði" onChange={handleChange} />
							<GenericButton onPress={handleSubmit} loading={voting.loading}>
								Senda inn
							</GenericButton>
						</>
					)}
				</Formik>
			)}
		</MarginWrapper>
	);
};

const mapStateToProps = (state: StoreState) => ({
	voting: state.voting,
});

const mapDispatchToProps = {
	fetchVoting,
	submitVotes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Voting);
