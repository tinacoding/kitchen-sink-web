// React [Essentials]
// Elements [Local Components]
import { Button } from 'components';
import React, { ReactElement } from 'react';

function Home(): ReactElement {
  return (
    <div>
      <p>Home</p>
      <div>
        <Button text="button" />
      </div>
    </div>
  );
}

export default Home;
