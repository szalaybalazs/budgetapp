import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SectionList } from 'react-native';

const Context = createContext();

export const useBalance = () => useContext(Context);

const dummyEntries = [
  {
    category: 'INCOME',
    amount: 120000,
    date: new Date('2020-01-12'),
  },
  {
    category: 'FOOD',
    amount: 12000,
    date: new Date('2020-01-16'),
  },
  {
    category: 'SPORT',
    amount: 5000,
    date: new Date('2020-01-27'),
  },
  {
    category: 'EDUCATION',
    amount: 1350,
    date: new Date('2020-01-30'),
  },
  {
    category: 'FOOD',
    amount: 1250,
    date: new Date(),
  }
]

const calculateBalance = (entries = []) => entries.reduce((balance, entry) => entry.category === 'INCOME' ? balance + entry.amount : balance - entry.amount, 0);
const calculateDailyBalance = (entries = []) => (date = new Date()) => entries.filter(entry => new Date(entry.date).toDateString() === date.toDateString()).reduce((balance, entry) => entry.category === 'INCOME' ? balance + entry.amount : balance - entry.amount, 0);
const calculateCategoryBalance = (entries = []) => (category = null, month = null) => entries.filter(entry => entry.category === category && (month ? new Date(entry.date).getMonth() === month : true)).reduce((balance, entry) => entry.category === 'INCOME' ? balance + entry.amount : balance - entry.amount, 0);


const Provider = ({ children }) => {
  const [entries, setEntries] = useState(dummyEntries);

  const _handleLoad = async () => {

  }

  const _handleAdd = ({ category, value }) => {
    const _entries = [...entries];
    _entries.push({ category, amount: parseInt(value), date: new Date() });
    setEntries(_entries);
  }
  useEffect(() => {
    _handleLoad();
  });

  return (
    <Context.Provider
      value={{ 
        balance: calculateBalance(entries), 
        getDay: calculateDailyBalance(entries), 
        getCategory: calculateCategoryBalance(entries),
        entries,
        addEntry: _handleAdd,
      }}
    >
      { children }
    </Context.Provider>
  )
}

export default Provider;
