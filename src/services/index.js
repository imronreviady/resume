import Axios from 'axios';

export async function uploadToCloudinary(image) {
	const form = new FormData();
	form.append('file', image);
	form.append('upload_preset', 'en2zhswl');

	const response = await Axios.post('https://api.cloudinary.com/v1_1/imronreviadyreactblog/image/upload', form);

	return response.data;
}