"use client"
import { useState, useEffect } from "react"
import { collection, addDoc } from "firebase/firestore";

export default function Home() {

  const [items, setItems] = useState([
    { name: "sdgsg", price: 5.6 },
    { name: "sryiryisg", price: 9.54 },
    { name: "nmbmvb", price: 4.5 },
  ])

  const [total, setTotal] = useState(0)
  const [newItem, setNewItem] = useState({ name: "", price: "" })

  const addItem = async (e) => {
    e.preventDefault()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Expense tracker</h1>
        <div>
          <form className="flex gap-3 p-4 rounded bg-slate-900">
            <input type="text" placeholder="Enter Item" />
            <input type="number" placeholder="Enter €" />
            <button type="submit" className="p-2 text-center bg-slate-800">+</button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li key={id}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <button>x</button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? ('') : (
            <div>
              <span>Total: {total} €</span>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
