import { GridLoader } from "react-spinners";

function Loader() {
    return (
        <div className="w-full py-4 px-2 flex justify-center items-center">
            <GridLoader color="#2F2F2F" />
        </div>
    );
}

export default Loader;
