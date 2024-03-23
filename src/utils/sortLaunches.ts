import { Launch } from "../services/types";

export const sortLaunches = ({ launches, reverse }: { launches: Launch[], reverse?: boolean }): Launch[] => {
    return launches.sort((launchA, launchB) => {
        if (launchA.date_utc > launchB.date_utc) {
            return reverse ? -1 : 1;
        }
        if (launchA.date_utc < launchB.date_utc) {
            return reverse ? 1 : -1
        }
        return 0;
    })
}