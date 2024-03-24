import { Launch } from '../services/types';

export const formatLaunchFailures = (launch: Partial<Launch>): string => {
  return launch.failures?.map(({ reason }: { reason: string }) => `${reason}`).join(', ') ?? '';
};
