import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';

let timeoutId;

function Search({ query, setQuery }) {
  const [currentQuery, setCurrentQuery] = useState('');

  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setQuery(currentQuery), 1500);
  }, [currentQuery]);

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={currentQuery}
        type="text"
        onChange={(event) => {
          setCurrentQuery(event.target.value);
        }}
      />
    </>
  );
}

export default Search;