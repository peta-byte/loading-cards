
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    user(): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    demographics(): Nullable<Demographics> | Promise<Nullable<Demographics>>;
    gender(filter?: Nullable<string>): Nullable<Gender> | Promise<Nullable<Gender>>;
    nationalities(): Nullable<Nationalities> | Promise<Nullable<Nationalities>>;
}

export interface User {
    gender: string;
    name: Name;
    location?: Nullable<Location>;
    email: string;
    login?: Nullable<Login>;
    dob?: Nullable<DateAge>;
    registered?: Nullable<DateAge>;
    phone?: Nullable<string>;
    cell?: Nullable<string>;
    id?: Nullable<UserID>;
    picture?: Nullable<Picture>;
    nat?: Nullable<string>;
}

export interface Name {
    title?: Nullable<string>;
    first?: Nullable<string>;
    last?: Nullable<string>;
}

export interface Street {
    number?: Nullable<number>;
    name?: Nullable<string>;
}

export interface Coordinates {
    latitude?: Nullable<string>;
    longitude?: Nullable<string>;
}

export interface Timezone {
    offset?: Nullable<string>;
    description?: Nullable<string>;
}

export interface Location {
    street?: Nullable<Street>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    country?: Nullable<string>;
    postcode?: Nullable<string>;
    coordinates?: Nullable<Coordinates>;
    timezone?: Nullable<Timezone>;
}

export interface Login {
    uuid?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    md5?: Nullable<string>;
    sha1?: Nullable<string>;
    sha256?: Nullable<string>;
    salt?: Nullable<string>;
}

export interface DateAge {
    date?: Nullable<string>;
    age?: Nullable<number>;
}

export interface UserID {
    name?: Nullable<string>;
    value?: Nullable<string>;
}

export interface Picture {
    large?: Nullable<string>;
    medium?: Nullable<string>;
    thumbnail?: Nullable<string>;
}

export interface Gender {
    gender?: Nullable<Nullable<string>[]>;
}

export interface Nationalities {
    nationalities?: Nullable<Nullable<string>[]>;
}

export interface Demographics {
    nationalities?: Nullable<Nullable<string>[]>;
    gender?: Nullable<Nullable<string>[]>;
}

type Nullable<T> = T | null;
