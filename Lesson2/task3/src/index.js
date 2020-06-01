import store from './store';
import {addUser, deleteUser} from './users.actions';

store.dispatch(addUser({name:'Sarah', id: 76}));
store.dispatch(addUser({name:'Bob', id: 75}));
store.dispatch(deleteUser(76));

console.log(store.getState());