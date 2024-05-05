import moment from "moment/moment";
import { RiMovie2Fill } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { TbCategoryFilled } from "react-icons/tb";
import { FaCommentDots } from "react-icons/fa";

export const Empty = ({ message }) => {
    return (
        <div className="w-full flex-column gap-6 py-12 border rounded-md border-dotted px-4 bg-main">
            <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
                <RiMovie2Fill size={45} />
            </div>
            <p className="text-md">{message}</p>
        </div>
    );
};

export const EmptyForUsers = ({ message }) => {
    return (
        <div className="w-full flex-column gap-6 py-12 border rounded-md border-dotted px-4 bg-main">
            <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
                <TbUsersGroup size={45} />
            </div>
            <p className="text-md">{message}</p>
        </div>
    );
};

export const EmptyForCategories = ({ message }) => {
    return (
        <div className="w-full flex-column gap-6 py-12 border rounded-md border-dotted px-4 bg-main">
            <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
                <TbCategoryFilled size={45} />
            </div>
            <p className="text-md">{message}</p>
        </div>
    );
};

export const EmptyForComments = ({ message }) => {
    return (
        <div className="w-full flex-column gap-6 py-12 border rounded-md border-dotted px-4 bg-main">
            <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
                <FaCommentDots size={45} />
            </div>
            <p className="text-md">{message}</p>
        </div>
    );
};

export const shortUpperCaseId = (id) => {
    return id.slice(0, 7).toUpperCase();
};

export const DateFormat = (date) => {
    return moment(date).format("DD MMMM YYYY");
};
