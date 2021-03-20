import { Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import {
	DropdownItem,
	GenericButton,
	InputText,
	MarginWrapper,
	RadioButton,
} from "../../components";
import { StoreState, fetchVoting, VotingState } from "../../redux";

interface IProps {
	fetchVoting: typeof fetchVoting;
	voting: VotingState;
}

const Voting = ({ voting, fetchVoting }: IProps) => {
	return (
		<MarginWrapper>
			{voting.voting?.votingKey ? (
				<Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
					{({ handleSubmit }) => (
						<>
							{voting.voting?.applications.map((application) => (
								<DropdownItem
									text={`${application.name} (${application.maxVotes})`}
								>
									{application.candidacies.map((candidacy) => (
										<RadioButton text={candidacy.name} />
									))}
								</DropdownItem>
							))}
							<GenericButton onPress={handleSubmit}>Senda inn</GenericButton>
						</>
					)}
				</Formik>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Voting);
