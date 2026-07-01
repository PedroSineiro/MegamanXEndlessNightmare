export default class StateMachine {

    constructor(initialState, possibleStates, context) {

        this.initialState = initialState;

        this.possibleStates = possibleStates;

        this.context = context;

        this.state = null;

        for (const state of Object.values(
            this.possibleStates
        )) {
            state.stateMachine = this;
        }
    }

    step() {

        if (!this.state) {

            this.state =
                this.possibleStates[
                    this.initialState
                ];

            this.state.enter(this.context);
        }

        this.state.execute(this.context);
    }

    transition(newState) {

        if (this.state?.exit) {
            this.state.exit(this.context);
        }

        this.state =
            this.possibleStates[newState];

        this.state.enter(this.context);

    }
}