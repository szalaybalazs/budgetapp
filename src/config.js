import { color } from 'react-native-reanimated';

export const colors = {
  primary: 'rgb(84, 113, 238)',
  darkBlue: 'rgb(24, 58, 91)',
  secondary: 'rgb(182, 191, 201)',
  background: 'rgb(249, 252, 255)',
  expense: 'rgb(206, 111, 106)',
  income: 'rgb(115, 188, 184)',
  white: '#fff',

  food: 'rgb(227, 93, 139)',
  sport: 'rgb(114, 190, 185)',
  education: 'rgb(244, 174, 61)',
  entertainment: 'rgb(85, 40, 224)',
};

export const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 12,

  elevation: 7,
}
export const blueShadow = {
  shadowColor: 'rgb(84, 113, 238)',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.42,
  shadowRadius: 12,

  elevation: 7,
}

export const BALANCE_HEIGHT = 124;

export const categories = [
  {
    id: 'TRANSPORT',
    label: 'Auto & Transport',
    defaultAmount: 5000,
  },
  {
    id: 'FOOD',
    color: colors.food,
    label: 'Food & Drinks',
    defaultAmount: 5000,
  },
  {
    id: 'SPORT',
    color: colors.sport,
    label: 'Sport',
    defaultAmount: 5000,
  },
  {
    id: 'EDUCATION',
    color: colors.education,
    label: 'Education',
    defaultAmount: 5000,
  },
  {
    id: 'ENTERTAINMENT',
    color: colors.entertainment,
    label: 'Entertainment',
    defaultAmount: 5000,
  }
];