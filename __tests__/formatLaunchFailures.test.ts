import { formatLaunchFailures } from '../src/utils/formatLaunchFailures';
import { Launch } from '../src/services/types';

describe('formatLaunchFailures', () => {
    it('returns an empty string when there are no failures', () => {
        const launchWithoutFailures: Partial<Launch> = {
            failures: [],
        };
        // @ts-ignore
        expect(formatLaunchFailures(launchWithoutFailures)).toEqual('');
    });

    it('formats a single failure reason correctly', () => {
        const launchWithSingleFailure: Partial<Launch> = {
            failures: [{ reason: 'Engine failure' }],
        };
        // @ts-ignore
        expect(formatLaunchFailures(launchWithSingleFailure)).toEqual('Engine failure.');
    });

    it('formats multiple failure reasons correctly', () => {
        const launchWithMultipleFailures: Partial<Launch> = {
            failures: [
                { reason: 'Engine failure' },
                { reason: 'Fuel tank leak' },
                { reason: 'Guidance system malfunction' },
            ],
        };
        // @ts-ignore
        expect(formatLaunchFailures(launchWithMultipleFailures)).toEqual(
            'Engine failure, Fuel tank leak, Guidance system malfunction.'
        );
    });

    it('returns an empty string when failures array is null or undefined', () => {
        const launchWithNullFailures: Partial<Launch> = {
            failures: undefined,
        };
        // @ts-ignore
        expect(formatLaunchFailures(launchWithNullFailures)).toEqual('');

        const launchWithUndefinedFailures: Partial<Launch> = {
            failures: undefined,
        };
        // @ts-ignore
        expect(formatLaunchFailures(launchWithUndefinedFailures)).toEqual('');
    });
});
