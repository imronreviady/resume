import React, { Component, Fragment } from 'react';
import { DiscussionEmbed } from 'disqus-react';

class DisqusComment extends Component {
	render() {
		const disqusShortname = "imron-reviady";
		const disqusConfig = {
			url: this.props.url,
			identifier: this.props.identifier,
			title: this.props.title,
		};
		return (
			<Fragment>
				<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</Fragment>
		);
	}
}

export default DisqusComment;