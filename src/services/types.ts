// Define the types for the response data
export interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
}

export interface Patch {
    small: string | null;
    large: string | null;
}

export interface Reddit {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
}

export interface Flickr {
    small: string[];
    original: string[];
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
}

export interface Core {
    core: string | null;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: boolean | null;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
}

export interface Payload {
    id: string;
}

export interface Launch {
    fairings: Fairings | null;
    links: Links;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number | null;
    rocket: string;
    success: boolean | null;
    failures: any[]; // Assuming failure details are complex and can't be predicted
    details: string | null;
    crew: any[]; // Assuming crew details are complex and can't be predicted
    ships: string[];
    capsules: any[]; // Assuming capsule details are complex and can't be predicted
    payloads: Payload[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
}