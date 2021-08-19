import { expect, describe } from '@jest/globals';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('tests to useForm hook', () => {
    const initialForm = {
        name: 'Alfonso',
        email: 'alfonso@gmail.com',
    };

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, resetForm] = result.current;
        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof resetForm).toBe('function');
    });

    test('should change the value of the form{change name}', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    value: 'Sempoalt',
                    name: 'name',
                },
            });
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({
            ...initialForm,
            name: 'Sempoalt',
        });
    });

    test('should restart the form to the default value', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, resetForm] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    value: 'Sempoalt',
                    name: 'name',
                },
            });
            resetForm();
        });
        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});
