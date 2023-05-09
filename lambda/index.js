import {
	S3Client,
	GetObjectCommand,
	PutObjectCommand
} from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-west-2' });

export const handler = async(event) => {
	const bucketName = event.Records[0].s3.bucket.name;
	const fileName = event.Records[0].s3.object.key;
	const fileSize = event.Records[0].s3.object.size;
	
	const getImageManifest = {
			Bucket: bucketName,
			Key: 'images.json'
	};
	
	try {
			const manifest = await s3Client.send(new GetObjectCommand(getImageManifest));
			console.log("Added to Manifest!")
					
	} catch (e) {
			console.log(e);
			
			if (e.Code === 'NoSuchKey') {
					const data = {};
					const putManifest = {
					Bucket: bucketName,
					Key: 'images.json',
					Body: JSON.stringify(data)
					}
					const manifest = await s3Client.send(new PutObjectCommand(putManifest));
					console.log("Manifest created!")
			}
	}

	const response = {
			statusCode: 200,
			body: JSON.stringify('Okie dokie! Have a great day!'),
	};
	return response;
};
