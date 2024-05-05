import toast from "react-hot-toast";
import Axios from "./axios";

const ImageUploadService = async (file, setLoading) => {
    try {
        setLoading(true);
        const { data } = await Axios.post("/upload", file);
        setLoading(false);
        toast.success("File uploaded successfully");
        return data;
    } catch (error) {
        setLoading(false);
        toast.error("Something went wrong");
    }
};

export default ImageUploadService;
