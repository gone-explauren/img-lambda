# AWS Lambda Functions

## How to Use

This Lambda function is set to run every time an image is added to the images folder of my four-oh-one AWS bucket.
If there is already a manifest (images.json), all new images will be added to the manifest. If not, this Lambda function will create the images.json manifest.

### Links

* images.json: <https://four-oh-one.s3.us-west-2.amazonaws.com/images.json>
