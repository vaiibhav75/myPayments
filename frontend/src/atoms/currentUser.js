import { atom } from 'recoil';
import Cookies from 'js-cookie';

const initialCurrentUser = () => {
    const userCookie = Cookies.get('currentUser');
    return userCookie ? JSON.parse(userCookie) : {};
};

export const currentUser = atom({
    key: 'currentUser',
    default: initialCurrentUser(),
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet(newValue => {
                Cookies.set('currentUser', JSON.stringify(newValue), { expires: 7 });
            });
        }
    ]
});

