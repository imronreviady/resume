import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import renderHtml from 'react-render-html';

import DisqusComment from '../../components/DisqusComment';

import { getWork } from '../../store/actions/worksAction';

class SingleWork extends Component {

	componentDidMount() {
		this.props.getWork(this.props.match.params.slug);
	}

	renderWork = () => {
		return _.map(this.props.work, (work, key) => {
			document.title = work.title;
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
								{renderHtml(work.description)}
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
							<DisqusComment
								url={window.location.href}
								identifier={this.props.match.params.slug}
								title={work.title}
							/>
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