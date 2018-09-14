import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { getCertificates } from '../../store/actions/certificatesAction';

class Certificates extends Component {

	componentDidMount() {
		this.props.getCertificates();
	}

	renderCertificates = () => {
		return _.map(this.props.certificates, (certificate, key) => {
			return (
				<div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item" key={key}>
					<Link to={`/certificate/${key}`}>
						<img src={certificate.image} alt={certificate.title} className="img-responsive" />
						<h3 className="fh5co-work-title">{certificate.title}</h3>
						<p>{certificate.provider}</p>
					</Link>
				</div>
			)
		});
	}

	render() {
		return (
			<Fragment>
				<div className="fh5co-narrow-content">
					<h2 className="fh5co-heading animate-box fadeInLeft animated">Certificates</h2>
					<div className="row animate-box fadeInLeft animated">
							
						{
							!this.props.loading &&
							<div>{this.renderCertificates()}</div>
						}
						{
							this.props.loading &&
							<div>LOADING.....</div>
						}

					</div>	
				</div>
			</Fragment>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		certificates: state.certificates.data,
		loading: state.certificates.loading
	}
}

export default connect(mapStateToProps, { getCertificates })(Certificates);