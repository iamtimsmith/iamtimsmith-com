import { DevIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../components";

export const getIcon = (icon: string) => {
	switch (icon) {
		case "Dev.to":
			return <DevIcon />;
		case "Github":
			return <GithubIcon />;
		case "Linkedin":
			return <LinkedinIcon />;
		case "Twitter":
			return <TwitterIcon />;
		default:
			return;
	}
};
