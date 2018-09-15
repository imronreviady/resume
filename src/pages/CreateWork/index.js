import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadToCloudinary } from '../../services';

import { saveWork } from '../../store/actions/worksAction';

class CreateWork extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			category: '',
			image: null,
			description: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
		})
	}

	slugify = (text) => {
		return text.toString().toLowerCase()
			.replace(/\s+/g, '-')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-\-+/g, '-')         // Replace multiple - with single -
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/-+$/, '');            // Trim - from end of text
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const image = await uploadToCloudinary(this.state.image);
		const work = {
			title: this.state.title,
			slug: this.slugify(this.state.title),
			image: image.secure_url,
			category: this.state.category,
			description: this.state.description
		};
		this.props.saveWork(work);
		this.setState({
			title: '',
			image: null,
			category: '',
			description: ''
		})
	}

	render() {
		return (
			<div className="fh5co-narrow-content animate-box fadeInLeft animated">
				<div className="row">
					<div className="col-md-12">
						<h1>Add Work</h1>
					</div>
				</div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-12">
									<div className="form-group">
										<input
											onChange={this.handleChange}
											type="text"
											className="form-control"
											name="title"
											placeholder="Title..."
											required
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input
											onChange={this.handleChange}
											type="file"
											className="form-control"
											name="image"
											placeholder="Image..."
											required
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input
											onChange={this.handleChange}
											type="text"
											className="form-control"
											name="category"
											placeholder="Category..."
											required
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<textarea
											onChange={this.handleChange}
											cols={30} 
											rows={7}
											className="form-control"
											name="description"
											placeholder="Description..."
											required
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="submit" className="btn btn-primary btn-md" value="Tambah Work" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		works: state.works
	}
}

export default connect(mapStateToProps, { saveWork })(CreateWork);