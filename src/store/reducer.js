export const initialState = [
  {
    condition: false,
    question: "What is your name?",
    type: "text",
    subInputs: [
    ],
  },
];

const emptyInput = {
  condition: '',
  question: '',
  type: '',
  subInputs: [
  ],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_INPUT':
      return [
        ...state,
        payload || emptyInput,
      ];
    default:
      return state;
  }
}