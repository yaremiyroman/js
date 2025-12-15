export namespace Utilities {
    // Функція в просторі імен, яка повертає найбільше число з масиву
    export function maxArray(numbers: number[]): number | never {
        if (numbers.length > 10) {
            throw new Error('Array is too big');
        }

        return Math.max(...numbers);
    }

    // Інтерфейс в просторі імен
    export interface Logger {
        log: (msg: string) => void;
    }

    // Клас в просторі імен
    export class ConsoleLogger implements Logger {
        log(msg: string) {
            console.log(msg);
        }
    }
}
