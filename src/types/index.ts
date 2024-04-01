export type AuthForm = {
    email: string;
    password: string;
};

export type IOption = {
    name: string;
    value: string;
};

export type Icon = 'id' | 'user' | 'reg' | 'phone' | 'card' | 'cert';


export type IService = {
    title: string;
    shortName: string;
    icon: Icon;
};


export type PageParams = {
    params: {
        local: string;
        [key:string]: string;
    }
}

// export type Entity = {
//     name: string;
//     phoneNumber: string;
//     dateOfBirth: string;
//     residentialAddress: string;
//     nationality: string;
//     employmentStatus: string;
//     email: string;
//     gender: string;
//     maritalStatus: string;
//     permanentAddress: string;
//     state: string;
//     employer: string;
//     enrollmentBank: string;
// };