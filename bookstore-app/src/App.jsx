import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
/* added an ID aspect to each book so it's easy to categorize */
const bookData = {
  "fiction": [
    {"id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"id": 2, "title": "1984", "author": "George Orwell", "price": 8.50},
    {"id": 3, "title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"id": 4, "title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"id": 5, "title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"id": 6, "title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"id": 7, "title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"id": 8, "title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"id": 9, "title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};

function App() {
  const [selectedGenre, setSelectedGenre] = useState("fiction");
  const [basket, setBasket] = useState([]);

  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  return (
    <>
      <div className="genres">
        <button onClick={() => setSelectedGenre("fiction")}>Fiction</button>
        <button onClick={() => setSelectedGenre("non-fiction")}>Non-Fiction</button>
        <button onClick={() => setSelectedGenre("children")}>Children</button>
      </div>
      <div className="card">
        <h2>{selectedGenre}</h2>
        <ul>
          {bookData[selectedGenre].map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} - ${book.price}
              <button onClick={() => addToBasket(book)}>Add to Basket</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="basket">
        <h2>Basket</h2>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> by {item.author} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
