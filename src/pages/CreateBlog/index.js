import React, { Component } from 'react';
import { connect } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { uploadToCloudinary } from '../../services';

import { saveBlog } from '../../store/actions/blogsAction';

class CreateBlog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			category: '',
			image: null,
			description: EditorState.createEmpty()
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
		})
	}

	handleEditorState = (editorState) => {
		this.setState({
			description: editorState,
		});
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
		const blog = {
			title: this.state.title,
			slug: this.slugify(this.state.title),
			image: image.secure_url,
			category: this.state.category,
			description: draftToHtml(convertToRaw(this.state.description.getCurrentContent()))
		};
		this.props.saveBlog(blog);
	}

	render() {
		return (
			<div className="fh5co-narrow-content animate-box fadeInLeft animated">
				<div className="row">
					<div className="col-md-12">
						<h1>Add Blog</h1>
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
										<Editor
                							editorState={this.state.description}
                							onEditorStateChange={this.handleEditorState}
                						/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input type="submit" className="btn btn-primary btn-md" value="Tambah Blog" />
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
		blogs: state.blogs
	}
}

export default connect(mapStateToProps, { saveBlog })(CreateBlog);