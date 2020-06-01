export const ADDUSER = "USERS/ADDUSER";
export const DELETEUSER = "USERS/DELETEUSER";

export const addUser = (name) => {
    return {
        type: ADDUSER,
        payload: name
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETEUSER,
        payload: id
    };
};
