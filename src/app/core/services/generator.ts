import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<any[]>('GeneratorService');

export function GeneratorFactory(length: number) {
    return function(): string {
        const result = Math.random().toString(36).substring(2, length + 2);
        return result;
    };
}
