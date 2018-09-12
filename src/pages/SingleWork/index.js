import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getWork } from '../../store/actions/worksAction';

class SingleWork extends Component {

	componentDidMount() {
		const str = this.props.location.pathname;
		console.log(str.substr(str.length - 20));
		this.props.getWork(str.substr(str.length - 20));
	}

	renderWork = () => {
		return _.map(this.props.work, (work, key) => {
			return (
				<div className="fh5co-narrow-content" key={key}>
					<div className="row">
						<div className="col-md-12 animate-box fadeInLeft animated">
							<figure className="text-center">
								<img src={work.image} alt={work.title} className="img-responsive" />
							</figure>
						</div>
						<div className="col-md-8 col-md-offset-2 animate-box fadeInLeft animated">
							<div className="col-md-9 col-md-push-3">
								<h1>{work.title}</h1>
								{work.description}
							</div>
							<div className="col-md-3 col-md-pull-9 fh5co-services">
								<h3>Category</h3>
								<ul>
									<li>{work.category}</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row work-pagination animate-box fadeInLeft animated">
						<div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0">
							<div className="col-md-4 col-sm-4 col-xs-4 text-center">
								<a href="#"><i className="icon-long-arrow-left" /> <span>Previous Project</span></a>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-4 text-center">
								<a href="#"><i className="icon-th-large" /></a>
							</div>
							<div className="col-md-4 col-sm-4 col-xs-4 text-center">
								<a href="#"><span>Next Project</span> <i className="icon-long-arrow-right" /></a>
							</div>
						</div>
					</div>
				</div>
			)
		});
	}

	render() {
		return (
			<Fragment>
			{
				!this.props.loading &&
				<div>{this.renderWork()}</div>
			}
			{
				this.props.loading &&
				<div className="fh5co-narrow-content">
					<div className="row">
						<div>LOADING.....</div>
					</div>
				</div>
			}
			</Fragment>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		work: state.work.data,
		loading: state.work.loading
	}
}

export default connect(mapStateToProps, { getWork })(SingleWork);