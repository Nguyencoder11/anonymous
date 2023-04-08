export const host = "http://localhost:5000";
//dành cho đăng nhập
export const loginRoute = `${host}/api/auth/login`;
//dành cho đăng kí
export const registerRoute = `${host}/api/auth/logup`; 
export const logoutRoute = `${host}/api/auth/logout`;
//dùng cho contact
export const allUsersRoute = `${host}/api/auth/allusers`;
//dùng cho gửi tin nhắn
export const sendMessageRoute = `${host}/api/messages/addmsg`;
//lấy ra toàn bộ tin nhắn
export const recieveMessageRoute = `${host}/api/messages/getmsg`;