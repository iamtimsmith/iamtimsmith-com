import React from "react";
import Link from "next/link";

export default () => {
	return (
		<div
			style={{
				maxWidth: 800,
				margin: "0 auto",
				fontFamily: "sans-serif",
				lineHeight: 1.5,
			}}
		>
			<h1>Welcome! 👋</h1>
			<p>
				This page serves as a set of docs for using this content repo.
			</p>
			<h2>Motivations</h2>
			<p>
				Over the years, I've rebuilt my website with many tools (gatsby,
				markdown, wordpress, vue, etc) and it becomes cumbersome to move
				the data from one location to another and restructure the data.
				The goal of this repo is to provide a easy-to-use and
				easy-to-customize modern CMS solution with reusable data to
				prevent the need for all of this work in the future.
			</p>
			<h2>Useful Links</h2>
			<ul>
				<li>
					<Link href="/posts">Blog Posts</Link>
				</li>
				<li>
					<a href="https://www.iamtimsmith.com">iamtimsmith.com</a>
				</li>
			</ul>
			<h2>Pages</h2>
		</div>
	);
};
