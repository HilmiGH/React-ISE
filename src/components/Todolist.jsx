import React, { useState } from 'react';

function Todolist() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Todo List App</h1>
      <input className="border border-black py-2 px-4 " type="text" placeholder="Masukkan angka " />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
    </>
  );
}

export default Todolist;
