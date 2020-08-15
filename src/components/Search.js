import React, { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="search__base" data-aos="fade-right" data-aos-duration="1500">
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
        placeholder="Your search of and for history ends here."
      />
      <button className="search btn">Search</button>
    </div>
  );
}
