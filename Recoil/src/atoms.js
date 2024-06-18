import {atom, selector} from 'recoil'
export const networkAtom = atom({
    key:"networkAtom",
    default: 102
});

export const messageAtom = atom({
    key:"messageAtom",
    default: 0
});

export const jobAtom = atom({
    key:"jobAtom",
    default: 0
});

export const notificationAtom = atom({
    key:"notificationAtom",
    default: 0
});

export const totalSelector = selector({
    key:"totalSelector",
    get:({get})=>{

        //yeh hai get ka use wo value le aata hai atom pe jaake!
        const networkCount = get(networkAtom);
        const messageCount = get(messageAtom);
        const jobCount = get(jobAtom);
        const notificationCount = get(notificationAtom);

        return networkCount+messageCount+jobCount+notificationCount;
    }
})