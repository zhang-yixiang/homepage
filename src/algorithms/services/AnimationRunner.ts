import type {AnimationStep} from "@/algorithms/services/AnimationStep";
export class AnimationRunner {
    steps: AnimationStep[]; // The array of AnimationStep objects
    currentStepIndex: number; // The index of the current step in the steps array

    constructor(steps: AnimationStep[]) {
        this.steps = steps;
        this.currentStepIndex = 0;
    }

    // Method to get the current step
    getCurrentStep(): AnimationStep {
        return this.steps[this.currentStepIndex];
    }

    // Method to move to the next step
    nextStep(): void {
        if (this.currentStepIndex < this.steps.length - 1) {
            this.currentStepIndex++;
        }
    }

    // Method to move to the previous step
    previousStep(): void {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
        }
    }

    // Other methods, if needed (e.g., jumpToStep, isAtStart, isAtEnd)
}
