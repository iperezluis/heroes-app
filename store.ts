// function for storage my videos on amazon s3

// Declare AWS S3
const AWS = require("aws-sdk");

// Configure S3
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
});
const s3 = new AWS.S3();

// Function to upload video to S3 bucket
function uploadVideoToS3(videoFile) {
  // Set the parameters for uploading the video file to S3 bucket
  const params = {
    Bucket: "my-videos-bucket", // name of the bucket to upload to
    Key: videoFile.name, // name of the file to upload
    Body: videoFile, // actual file content to be uploaded
    ContentType: videoFile.type, // type of file being uploaded

    ACL: "public-read", // set permissions so anyone can view the content
  };

  return new Promise((resolve, reject) => {
    // Uploading files to the bucket
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const a = () => {};
