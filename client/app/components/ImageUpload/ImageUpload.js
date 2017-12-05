import React, { Component } from 'react';
import 'whatwg-fetch';

// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({
    accessKeyId: "AKIAJUPGD63PGO6TDA6A",
    secretAccessKey: "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",
});

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
//var bucketName = 'jjg297-' + uuid.v4();
var bucketName = 'jjg297-my-first-bucket/Images';
var keyName = 'hello_world.txt';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {

    e.preventDefault();
    // TODO: do something with -> this.state.file
    var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });

    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
      <h1>Page currently unstable</h1>
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
export default ImageUpload;