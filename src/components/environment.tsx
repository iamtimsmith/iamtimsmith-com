export const Environment = () => (
	<div
		style={{
			position: "sticky",
			top: 0,
			left: 0,
			right: 0,
			color: "var(--color-text)",
			fontSize: "0.75rem",
			fontFamily: "'Dank Mono', monospace",
			padding: "0.1rem 1rem",
			textTransform: "capitalize",
			background:
				process.env.NODE_ENV === "development"
					? "var(--color-error)"
					: "var(--color-accent)",
		}}
	>
		Environment:{" "}
		<span style={{ fontStyle: "italic" }}>{process.env.NODE_ENV}</span>
	</div>
);
