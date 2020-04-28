import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

export default { title: 'Atoms|Button' };

export const withText = () => (
  <React.Fragment>
    <Button variant="primary" onClick={action('clicked')}>
      Primary Button
    </Button>
    <Button variant="secondary" onClick={action('clicked')}>
      Secondary Button
    </Button>
    <Button variant="light" onClick={action('clicked')}>
      Light Button
    </Button>
  </React.Fragment>
);

export const withOutline = () => (
  <React.Fragment>
    <Button variant="outline-primary" onClick={action('clicked')}>
      Primary Button
    </Button>
    <Button variant="outline-secondary" onClick={action('clicked')}>
      Secondary Button
    </Button>
    <Button variant="outline-light" onClick={action('clicked')}>
      Light Button
    </Button>
  </React.Fragment>
);

export const withEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
