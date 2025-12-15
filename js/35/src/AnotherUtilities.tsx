export namespace AnotherUtilities {
    // Функція в просторі імен, яка повертає найбільше число з масиву
    export function maxArray(numbers: number[]): number {
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
