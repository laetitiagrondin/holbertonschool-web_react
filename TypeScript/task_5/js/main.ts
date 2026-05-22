export interface MajorCredits {
    credits: number;
    _brand: "Major";
}

export interface MinorCredits {
    credits: number;
    _brand: "Minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "Major"
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: "Minor"
    };
}

const math: MajorCredits = { credits: 3, _brand: "Major" };
const physics: MajorCredits = { credits: 4, _brand: "Major" };

const history: MinorCredits = { credits: 2, _brand: "Minor" };
const art: MinorCredits = { credits: 1, _brand: "Minor" };

const totalMajor = sumMajorCredits(math, physics);
const totalMinor = sumMinorCredits(history, art);

console.log(totalMajor);
console.log(totalMinor);
