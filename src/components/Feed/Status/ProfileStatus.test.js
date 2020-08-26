import React from 'react';
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {create} from 'react-test-renderer'

describe('ProfileStatus', () => {
    // test('status from props in the state', () => {
    //     const component = create(<ProfileStatusWithHook status={'my new status'} />);
    //     const instance = component.getInstance();
    //     expect(instance.state.status).toBe('my new status');
    // });
    test('after creation span displayed', () => {
        const component = create(<ProfileStatusWithHook status='my new status' />);
        const root = component.root;
        const span = root.findAllByType("span")
        expect(span).not.toBeNull();
    });
    test('after creation input not displayed', () => {
        const component = create(<ProfileStatusWithHook status='my new status' />);
        const root = component.root;
        expect(() =>
        {let input = root.findByType("input")}).toThrow();
    });
})

