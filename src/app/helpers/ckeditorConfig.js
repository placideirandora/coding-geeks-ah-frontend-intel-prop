/* eslint-disable consistent-return */
/* istanbul ignore file */


/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
// import axios from 'axios';

// const imageUpload = async file => {
//   try {
//     const imageData = new FormData();
//     imageData.append('upload_preset', 'coding-geeks');
//     imageData.append('file', file);

//     const result = await axios.post(
//       'https://api.cloudinary.com/v1_1/jkadhuwa/image/upload',
//       imageData
//     );

//     return result.data.url;
//   } catch (error) {
//     return error;
//   }
// };

// class UploadAdapter {
//   constructor(loader) {
//     this.loader = loader;
//   }

//   upload() {
//     return this.loader.file.then(file => imageUpload(file));
//   }
// }

// const UploadAdapterPlugin = editor => {
//   // eslint-disable-next-line no-param-reassign
//   editor.plugins.get('FileRepository').createUploadAdapter = loader => new UploadAdapter(loader);
// };

// const editorConfigs = {
//   toolbar: ['bold', 'italic', 'link', 'blockQuote', 'imageUpload'],
//   blockToolbar: ['heading', 'blockQuote', 'imageUpload'],
//   removePlugins: ['List', 'Table', 'TableToolbar', 'MediaEmbed'],
//   ckfinder: {
//     uploadurl: 'https://api.cloudinary.com/v1_1/jkadhuwa/image/upload'
//   },
//   // extraPlugins: [UploadAdapterPlugin],
//   placeholder: 'Write your story...',
//   heading: {
//     options: [
//       { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//       {
//         model: 'heading1',
//         view: 'h1',
//         title: 'Heading 1',
//         class: 'ck-heading_heading1'
//       }
//     ]
//   }
// };

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class MyUploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader;

    // URL where to send files.
    this.url = 'https://api.cloudinary.com/v1_1/jkadhuwa/image/upload';
  }

  // Starts the upload process.
  upload() {
    return new Promise((resolve, reject) => {
      this.initRequest();
      this.initListeners(resolve, reject);
      this.sendRequest();
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  initRequest() {
    // eslint-disable-next-line no-multi-assign
    const xhr = (this.xhr = new XMLHttpRequest());

    xhr.open('POST', this.url, true);
    xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  initListeners(resolve, reject) {
    const { xhr } = this;
    const { loader } = this;
    // const genericErrorText = "Couldn't upload file:"` ${loader.file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const { response } = xhr;

      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      resolve({
        default: response.url
      });
    });

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', evt => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  sendRequest() {
    const data = new FormData();

    data.append('upload', this.loader.file);
    data.append('upload_preset', 'qmci19m2');
    // console.log('---->>', this.loader);
    this.xhr.send(data);
  }
}
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = loader => new MyUploadAdapter(loader);
}

// ClassicEditor
//   .create(document.querySelector('#editor'), {
//     extraPlugins: [MyCustomUploadAdapterPlugin]

//     // ...
//   })
//   .catch(error => {
//     console.log(error);
//   });

const editorConfigs = {
  toolbar: ['heading', 'bold', 'italic', 'link', 'blockQuote', 'imageUpload', 'undo', 'redo'],
  blockToolbar: ['heading', 'blockQuote', 'imageUpload'],
  removePlugins: ['List', 'Table', 'TableToolbar', 'MediaEmbed'],
  extraPlugins: [MyCustomUploadAdapterPlugin]

};

export default editorConfigs;
