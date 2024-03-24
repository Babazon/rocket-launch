import { Launch } from "../services/types";

export const formatLaunchFailures = (launch: Launch): string => {
    return launch.failures.map(({ reason }: { reason: string }) => `${reason}`).join(', ') + '.';
}