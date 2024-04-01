import { IService } from "@/types";

export type Locale = 'en';

export const locales: Array<Locale> = ['en'];

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
        title: 'International Passport',
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
    // {
    //     title: 'OLevel',
    //     shortName: 'DL',
    //     icon: 'cert'
    // },
];
