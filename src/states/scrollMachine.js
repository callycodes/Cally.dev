import { createMachine } from "xstate";

const scrollMachine = createMachine({
  id: "toggle",
  initial: "still",
  states: {
    still: {
      on: { SWITCH: "scrolling" }
    },
    scrolling: {
      on: { SWITCH: "still" }
    }
  }
});

export default scrollMachine;