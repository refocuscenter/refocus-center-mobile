import { Unit } from "./enums";

export interface User {
    id: number,
    displayName: string,
    profilePhoto: string,
    token: string
    userAccountInStore: UserAccountStore[]
}

export interface UserAccountStore {
    balance: number,
    store: Store
    basket: Basket
}

export interface Basket {
    totalValue?: number,
    productPortions: ProductPortion[]
}

export interface ProductPortion {
    portion: number,
    product: Product
}

export interface Product {
    name: string,
    image: string,
    value: number,
    barcode?: string
}

export interface ProductCategory {
    product: Product,
    categories: string[]
}

export interface UnitStore {
    id: number,
    name?: string,
    image?: string,
    openingIntervals: WeekOpeningIntervals
    store: Store,
    balance: number,
    history: Extract[]
}

export interface Store {
    id: number,
    name: string,
    image: string
}

export interface WeekOpeningIntervals {
    sunday: OpeningInterval,
    monday: OpeningInterval,
    tuesday: OpeningInterval,
    wednesday: OpeningInterval,
    thursday: OpeningInterval,
    friday: OpeningInterval,
    saturday: OpeningInterval
}

export interface OpeningInterval {
    openingHour: string,
    closeHour: string
}

export interface HighlightScreen {
    image: string,
    title: string
    unitStore: UnitStore
}

export interface Extract {
    type: number,
    value: number,
    date: Date
}