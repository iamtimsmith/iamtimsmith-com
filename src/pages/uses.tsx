import React from 'react';
import {Layout, Hero, SEO} from 'components';
import {useUsesQuery} from 'hooks';

const UsesPage = () => {
	const {heroImage} = useUsesQuery();

	return (
		<Layout>
			<SEO
				title='Uses'
				description={`If you're interested in the various tools I use when developing, you can find a list of them here.`}
				image={heroImage.childImageSharp.fluid.src}
			/>
			<Hero
				title='Uses'
				content={`My set up changes every so often, but I'll try to keep an up-to-date list of the stuff I'm using. If you're interested in the various tools I use when developing, you can find a list of them here.`}
				image={heroImage.childImageSharp.fluid}
			/>
			<h2>Hardware</h2>
			<ul>
				<li>
					<a href="https://www.apple.com/macbook-pro/" target='_blank' rel='noopener nofollow'>2018 Macbook Pro</a>
					: This computer is my workhorse. I do most of my work here.
				</li>
				<li>
					<a href="https://www.apple.com/imac/" target='_blank' rel='noopener nofollow'>2017 iMac</a>
					: This is used in larger scale projects or when I need more screen real estate.
				</li>
				<li>
					<a href="http://www.wasdkeyboards.com/index.php/products/mechanical-keyboard/wasd-v3-87-key-custom-mechanical-keyboard.html" target='_blank' rel='noopener nofollow'>WASD V2 87 Key</a>
					: This mechanical keyboard with CherryMX Browns is my go-to keyboard when using a monitor.
				</li>
				<li>
					<a href="https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver?fnode=56" target='_blank' rel='noopener nofollow'>Apple Magic Mouse 2</a>
					: I never leave home without this bluetooth mouse.
				</li>
				<li>
					<a href="https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english?fnode=56" target='_blank' rel='noopener nofollow'>Apple Magic Keyboard</a>
					: A secondary keyboard I use when I want to mix things up.
				</li>
				<li>
					<a href="https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_silver" target='_blank' rel='noopener nofollow'>Bose QuietComfort 35</a>
					: The headphones I reach for when I really need to focus
				</li>
				<li>
					<a href="https://www.apple.com/airpods/" target='_blank' rel='noopener nofollow'>Apple Airpods</a>
					: The headphones I use most of the time.
				</li>
				<li>
					<a href="https://www.elevationscasework.com" target='_blank' rel='noopener nofollow'>Custom Desk by Elevations Casework</a>
					: A desk built to my specifications
				</li>
				<li>
					<a href="https://www.hon.com/chairs/nucleus" target='_blank' rel='noopener nofollow'>Nucleus Chair by HON</a>
					: An amazing chair that is highly configurable
				</li>
			</ul>

			<h3>Software</h3>
			<ul>
				<li>
					<a href="https://www.google.com/search?client=firefox-b-1-d&q=vscode" target='_blank' rel='noopener nofollow'>VSCode</a>
					: The editor I reach for in most cases.
				</li>
				<li>
					<a href="https://www.iterm2.com/" target='_blank' rel='noopener nofollow'>iTerm 2</a>
					: The terminal I'm using instead of the default.
				</li>
				<li>
					<a href="https://github.com/arcticicestudio/nord-visual-studio-code" target='_blank' rel='noopener nofollow'>Nord Theme</a>
					: The theme I use in both VSCode and iTerm2.
				</li>
				<li>
					<a href="https://ohmyz.sh/" target='_blank' rel='noopener nofollow'>Z Shell/OhMyZsh</a>
					: Custom styles/configuration for terminal
				</li>
				<li>
					<a href="https://github.com/cdimascio/lambda-zsh-theme" target='_blank' rel='noopener nofollow'>Lambda Zsh theme</a>
					: Custom theme for Zsh
				</li>
			</ul>
		</Layout>
	);
};

export default UsesPage;
