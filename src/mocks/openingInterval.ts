import { OpeningInterval, WeekOpeningIntervals } from "../types/interfaces";

const day19hTo23h: OpeningInterval = {
    openingHour: "19:00",
    closeHour: "23:00"
}

export const everyDay19hTo23h: WeekOpeningIntervals = {
    sunday: day19hTo23h,
    monday: day19hTo23h,
    tuesday: day19hTo23h,
    wednesday: day19hTo23h,
    thursday: day19hTo23h,
    friday: day19hTo23h,
    saturday: day19hTo23h
}