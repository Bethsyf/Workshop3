export const FileUpload = async (file) => {

    const urlCloudinary = 'https://api.cloudinary.com/v1_1/docutv7ug/upload'

    const  formData = new FormData();
     formData.append("upload_preset", "workshop3");
    formData.append("file", file);

    const resp = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)

    return data.secure_url

}