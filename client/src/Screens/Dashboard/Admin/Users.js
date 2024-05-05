import React, { useEffect } from "react";
import SideBar from "../SideBar";
import Table2 from "../../../Components/Table2";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteUserAction,
    getAllUsersAction,
} from "../../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../../Components/Notifications/Loading";
import { EmptyForUsers } from "../../../Components/Notifications/Empty";

function Users() {
    const dispatch = useDispatch();

    const { isLoading, isError, users } = useSelector(
        (state) => state.adminGetAllUsers
    );

    const { isError: deleteError, isSuccess } = useSelector(
        (state) => state.adminDeleteUser
    );

    const deleteMoviesHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUserAction(id));
        }
    };

    useEffect(() => {
        dispatch(getAllUsersAction());

        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({
                type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_RESET",
            });
        }
    }, [dispatch, isError, deleteError, isSuccess]);
    return (
        <SideBar>
            <div className="text-text flex flex-col gap-6">
                <h2 className="text-xl font-bold">Users</h2>
                {isLoading ? (
                    <Loader />
                ) : users?.length > 0 ? (
                    <Table2
                        data={users}
                        users={true}
                        onDeleteFunction={deleteMoviesHandler}
                    />
                ) : (
                    <EmptyForUsers message="Sorry, you don't have any users" />
                )}
            </div>
        </SideBar>
    );
}

export default Users;