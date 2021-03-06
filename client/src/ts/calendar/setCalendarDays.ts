/* eslint-disable max-len */
import { state } from '../store';

export const setCalendarDays = ((): (() => void) => {
  const date: Date = new Date();
  state.year = date.getFullYear();
  state.month = date.getMonth();
  state.date = date.getDate();
  state.today = `${state.year}-${state.month + 1}-${state.date}`;

  return (): void => {
    const prevMonthLastDay: Date = new Date(state.year, state.month, 0);
    const currentMonthLastDay: Date = new Date(state.year, state.month + 1, 0);
    const currentMonthFirstDay: Date = new Date(state.year, state.month, 1);

    const getPrevMonthDays = (day: Date): number[] => Array
      .from({ length: day.getDay() }, (_, i) => prevMonthLastDay.getDate() - prevMonthLastDay.getDay() + i);

    const getNextMonthDays = (day: Date): number[] => Array
      .from({ length: 6 - day.getDay() }, (_, i) => i + 1);

    const getCurrentMonthDays = (day: Date): number[] => Array
      .from({ length: day.getDate() }, (_, i) => i + 1);

    state.currentMonthDays = getCurrentMonthDays(currentMonthLastDay);
    state.prevMonthDays = getPrevMonthDays(currentMonthFirstDay);
    state.nextMonthDays = getNextMonthDays(currentMonthLastDay);
  };
})();
