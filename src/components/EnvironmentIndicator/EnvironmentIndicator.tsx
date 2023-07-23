import styles from "./styles.module.css";

export const EnvironmentIndicator = () => (
	<div className={styles.environmentIndicator}>
		Environment:{" "}
		<span className={styles.environmentIndicatorEnv}>
			{process.env.NODE_ENV}
		</span>
	</div>
);
