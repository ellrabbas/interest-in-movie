import noPhoto from "../Assets/no-image-icon-4.png";

export const ImagePreview = ({ image, name, sizes }) => {
    return (
        <div className={` ${sizes} bg-main border rounded`}>
            <img
                src={image ? image : noPhoto}
                alt={name}
                className="w-full h-full object-cover rounded"
            />
        </div>
    );
};
