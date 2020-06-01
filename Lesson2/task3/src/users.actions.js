export const ADDUSER = "USERS/ADDUSER";
export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (userName) => {
    return {
        type: ADDUSER,
        payload: userName
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETEUSER,
        payload: id
    };
};
