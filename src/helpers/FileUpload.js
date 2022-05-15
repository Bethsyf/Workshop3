export const FileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dmaviub4l/upload'

    const  formData = new FormData();
     formData.append("upload_preset", "workshop3");
    formData.append("file", file);

    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
       const cloudResp = await resp.json();
       console.log(cloudResp);
       return cloudResp.secure_url;

}