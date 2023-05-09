export class AnimationStep {
    lineNumber: number[]; // The line number in the code corresponding to this step
    variables: { [key: string]: any }; // Variables and their values for this step
    animationState: any; // The state of the animation for this step (e.g., updated array, positions, colors)
    explanation: string; // The text explanation for this step

    constructor(lineNumber: number[], variables: { [key: string]: any }, animationState: any, explanation: string) {
        this.lineNumber = lineNumber;
        this.variables = variables;
        this.animationState = animationState;
        this.explanation = explanation;
    }

    // Other methods, if needed
}
