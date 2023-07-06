import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldItems => [...oldItems, item]);
    setNewItem('');
  }

  function removeItem(id) {
    setItems(oldItems => oldItems.filter(item => item.id !== id));
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="App w-11/12 block ml-auto mr-auto p-5">
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
          <span class="relative text-white">Lime</span>
        </span> Imparatorluğu Todo
      </blockquote>
      <div className="flex flex-col px-7 mt-20">
        <input
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-200 rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="text"
          placeholder="Todo ilave edin"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
        <button
          onClick={() => addItem()}
          className="transition duration-300 ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 rounded-md w-ful px-20 py-3 mt-3 text-white font-semibold text-sm"
        >
          Ekle
        </button>
      </div>

      <ul className="mt-5">
        {items.map(item => {
          return (
            <li
              className="transition duration-300 ease-in-out delay-150 border-collapse border border-slate-200 hover:border-red-200 flex justify-between py-3 px-5 mx-5 my-3 rounded-md shadow-md shadow-slate-300/50 hover:shadow-xl hover:cursor-pointer scale-95 hover:scale-100 hover:-translate-y-1"
              key={item.id}
              onClick={() => removeItem(item.id)}
            >
              <p className="break-words max-w-screen-lg text-left text-sm font-semibold leading-6 text-gray-900">
                {item.value}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {item.id}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
