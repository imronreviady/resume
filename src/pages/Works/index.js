import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getWorks } from '../../store/actions/worksAction';

class Works extends Component {

	componentDidMount() {
		this.props.getWorks();
		document.title = "Imron Reviady - Portfolio";
	}

	renderWorks = () => {
		return _.map(this.props.works, (work, key) => {
			return (
				<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item" key={key}>
					<Link to={`/work/${work.slug}`}>
						<img src={work.image} alt={work.title} className="img-responsive" />
						<h3 className="fh5co-work-title">{work.title}</h3>
						<p>{work.category}</p>
					</Link>
				</div>
			)
		});
	}

	render() {
		return (
			<Fragment>
				<div className="fh5co-narrow-content">
					<h2 className="fh5co-heading animate-box fadeInLeft animated">Portfolio</h2>
					<div className="row animate-box fadeInLeft animated">
							
						{
							!this.props.loading &&
							<div>{this.renderWorks()}</div>
						}
						{
							this.props.loading &&
							<div>Loading...</div>
						}

					</div>	
				</div>

				<div className="fh5co-narrow-content">
					<div className="row">
						<div className="col-md-4 animate-box fadeInLeft animated">
							<h1 className="fh5co-heading-colored">Start Your Project Now!</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box fadeInLeft animated">
							<p className="fh5co-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
							<p><a href="#" className="btn btn-primary btn-outline">Get Started</a></p>
						</div>
						<div className="col-md-7 col-md-push-1">
							<div className="row">
								<div className="col-md-6 animate-box fadeInLeft animated">
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
								<div className="col-md-6 animate-box fadeInLeft animated">
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		works: state.works.data,
		loading: state.works.loading
	}
}

export default connect(mapStateToProps, { getWorks })(Works);