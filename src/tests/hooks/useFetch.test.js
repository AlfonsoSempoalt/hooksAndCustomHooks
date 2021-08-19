import { expect, describe } from '@jest/globals';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('test to useFetch', () => {
    test('should return the default information', () => {
        const { result } = renderHook(() =>
            useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
        );

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('should return get the info from the API', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(`https://www.breakingbadapi.com/api/quotes/${1}`)
        );

        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('should manage the error', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(`https://reqres.in/apiasd/users?page=2`)
        );
        await waitForNextUpdate();

        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('problems with the url petition');
    });
});
