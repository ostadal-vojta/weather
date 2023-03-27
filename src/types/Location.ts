export type LatLang = {
    latitude: number;
    longitude: number;
}

export type LocationData = LatLang & {
    key: string;
    temperature: number;
};