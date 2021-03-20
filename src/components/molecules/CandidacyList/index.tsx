import React from "react";
import { ListIcon, TitleHeader } from "../..";
import { IProps } from "./interface";
import styles from "./CandidacyList.module.css";

export const CandidacyList = ({ candidacy }: IProps) => {
	return (
		<ListIcon title={candidacy.name}>
			<TitleHeader>Framboðstexti</TitleHeader>
			<p>{candidacy.description}</p>
			{candidacy.image && (
				<>
					<TitleHeader>Mynd</TitleHeader>
					<img src={candidacy.image} className={styles.image} />
				</>
			)}
			<TitleHeader>Nemendur</TitleHeader>
			<ul>
				{candidacy.candidats.map((candidat) => (
					<li>{candidat.name}</li>
				))}
			</ul>
		</ListIcon>
	);
};
