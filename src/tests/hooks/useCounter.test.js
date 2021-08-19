import { expect, describe } from '@jest/globals';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounterV2';

describe('Testing to useCounter', () => {
    test('should return the default values', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increase).toBe('function');
        expect(typeof result.current.decrease).toBe('function');
        expect(typeof result.current.restart).toBe('function');
    });

    test('should asing a default value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.counter).toBe(10);
    });

    test('should increment the counter in one', () => {
        const { result } = renderHook(() => useCounter(10));
        const { increase } = result.current;

        act(() => {
            increase();
        });

        const { counter } = result.current;
        expect(counter).toBe(11);
    });

    test('should decrement in one the counter', () => {
        const { result } = renderHook(() => useCounter());
        const { decrease } = result.current;
        act(() => {
            decrease();
        });
        const { counter } = result.current;
        expect(counter).toBe(0);
    });

    test('should restart to the default value', () => {
        const { result } = renderHook(() => useCounter());
        const { decrease, restart } = result.current;
        act(() => {
            decrease();
            restart();
        });
        const { counter } = result.current;
        expect(counter).toBe(1);
    });
});
