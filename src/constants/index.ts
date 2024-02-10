import { Icon } from "@/types";

export type IService = {
    title: string;
    shortName: string;
    icon: Icon;
}

export const services: Array<IService> = [
    {
        title: 'NIN',
        shortName: 'NIN',
        icon: 'id'
    },
    {
        title: 'BVN',
        shortName: 'BVN',
        icon: 'user'
    },
    {
        title: 'Passport',
        shortName: 'Passport',
        icon: 'reg'
    },
    {
        title: 'Phone Number.',
        shortName: 'Phone No.',
        icon: 'phone'
    },
    {
        title: 'Drivers License',
        shortName: 'DL',
        icon: 'card'
    },
    {
        title: 'OLevel',
        shortName: 'DL',
        icon: 'cert'
    },
];
