import {Ecuacion} from './ecuacion';

describe('Ecuacion', () =>{
    it(' Should return [1, 3, 5, 7] if X is [0.0, 1.0, 2.0, 3.0], a = 2.0 and b = 1.0',()=>{
        const result = Ecuacion ([0.0, 1.0, 2.0, 3.0], 2.0, 1.0 );
        expect(result).toEqual([1, 3, 5, 7]);
    })
    it(' Should return [2, 2.5, 3, 3.5, 4] if X is [1.0, 2.0, 3.0, 4.0, 5.0], a = 0.5 and b = 1.5',()=>{
        const result = Ecuacion ([1.0, 2.0, 3.0, 4.0, 5.0], 0.5, 1.5);
        expect(result).toEqual([2, 2.5, 3, 3.5, 4]);
    })
    it(' Should return [5, 7, 9, 11, 13] if X is [0.5, 1.5, 2.5, 3.5, 4.5], a = 2 and b = 4',()=>{
        const result = Ecuacion ([0.5, 1.5, 2.5, 3.5, 4.5], 2, 4);
        expect(result).toEqual([5, 7, 9, 11, 13]);
    })
    it(' Should return [2, 3.5, 5, 6.5, 8] if X is [1, 2, 3, 4, 5], a = 1.5 and b = 0.5',()=>{
        const result = Ecuacion ([1, 2, 3, 4, 5], 1.5, 0.5);
        expect(result).toEqual([2, 3.5, 5, 6.5, 8]);
    })
    it(' Should return [51, 96, 141, 186, 231] if X is [15, 30, 45, 60, 75], a = 3 and b = 6',()=>{
        const result = Ecuacion ([15, 30, 45, 60, 75], 3, 6);
        expect(result).toEqual([51, 96, 141, 186, 231]);
    })
})