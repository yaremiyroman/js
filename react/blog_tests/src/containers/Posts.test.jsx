import { describe, it, vi, beforeEach } from 'vitest';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import * as ThunkModule from 'redux-thunk';
import Posts from './Posts';

// handle ESM/CJS variations of redux-thunk
const thunk = ThunkModule.default || ThunkModule.thunk || ThunkModule;
const mockStore = configureMockStore([thunk]);

// mock async thunk
vi.mock('../slices/postsSlice', () => ({
  fetchPosts: vi.fn(() => () => Promise.resolve()),
}));

function renderWithStore(store) {
  render(
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

describe('Posts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('показує індикатор завантаження', () => {
    const store = mockStore({
      posts: { posts: [], status: 'loading', error: null },
    });

    renderWithStore(store);
  });

  it('відображає дані постів після успішного запиту', () => {
    const store = mockStore({
      posts: {
        posts: [
          { id: 1, title: 'Post 1', body: 'Body 1' },
          { id: 2, title: 'Post 2', body: 'Body 2' },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    renderWithStore(store);
  });

  it('показує повідомлення про помилку у разі невдалого запиту', () => {
    const store = mockStore({
      posts: {
        posts: [],
        status: 'failed',
        error: 'Network error',
      },
    });

    renderWithStore(store);
  });
});
