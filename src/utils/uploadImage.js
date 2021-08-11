import multer from "multer";
import cloudinaryV2 from '../config/cloudinary.js';
import { CloudinaryStorage } from "multer-storage-cloudinary";
const storage = new CloudinaryStorage({  
    cloudinary: cloudinaryV2,  
    folder: "app",  
    allowedFormats: ["jpg", "png", "jpeg"],  
    transformation: [{ 
        width: 1000, 
        height: 1000, 
        crop: "limit" 
    }],
});
const upload = multer({ storage: storage });

export default upload;