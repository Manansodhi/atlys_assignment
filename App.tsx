import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PostList from './components/PostList';
import RegisterForm from './components/RegisterForm';

const App: React.FC = () => (
  <Router>
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-center text-2xl">Welcome to the Community</h1>
        <nav className="flex justify-center space-x-4">
          <Link to="/" className="text-blue-500">Login</Link>
          <Link to="/signup" className="text-blue-500">Sign Up</Link>
          <Link to="/posts" className="text-blue-500">Posts</Link>
        </nav>
      </header>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;


