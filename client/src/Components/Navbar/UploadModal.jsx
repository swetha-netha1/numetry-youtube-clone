import React, { useState } from 'react';
import './UploadModal.css'; // You'll need to create this CSS file

function UploadModal({ onClose }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.includes('video')) {
      setFile(selectedFile);
    } else {
      alert('Please select a video file');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    setIsUploading(true);
    
    // Here you would typically send the file to your backend
    // This is a mock implementation
    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setTimeout(() => setProgress(i), i * 100);
      }
      
      // In a real app, you would use something like:
      // const formData = new FormData();
      // formData.append('video', file);
      // formData.append('title', title);
      // formData.append('description', description);
      // const response = await axios.post('/api/videos/upload', formData, {
      //   onUploadProgress: (progressEvent) => {
      //     const percentCompleted = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     setProgress(percentCompleted);
      //   }
      // });
      
      // Simulate completion
      setTimeout(() => {
        setIsUploading(false);
        alert('Upload completed successfully!');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className="upload-modal-overlay">
      <div className="upload-modal">
        <div className="upload-modal-header">
          <h2>Upload Video</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        
        <div className="upload-modal-body">
          {!file ? (
            <div className="file-drop-area">
              <label htmlFor="file-upload" className="file-upload-label">
                <div className="upload-icon">+</div>
                <div className="upload-text">Select video to upload</div>
                <input
                  id="file-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          ) : (
            <div className="file-preview">
              <div className="file-info">
                <div className="file-name">{file.name}</div>
                <div className="file-size">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </div>
              </div>
              
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter video title"
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter video description"
                />
              </div>
              
              {isUploading && (
                <div className="upload-progress">
                  <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                  <div className="progress-text">{progress}%</div>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="upload-modal-footer">
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
          {file && !isUploading && (
            <button onClick={handleUpload} className="upload-button">
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadModal;