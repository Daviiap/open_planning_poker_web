import React from 'react';
import { useRouter } from 'next/router';
import './back-button.css';

const BackButton = ({ name, url }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(url);
  }

  return (
    <button className="back-button" onClick={handleClick}>
      {name ?? "Back"}
    </button>
  );
};

export default BackButton;