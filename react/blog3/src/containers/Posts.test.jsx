import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Posts from './Posts';

// мок для fetchPosts action
import * as postsSlice from '../slices/postsSlice';
vi.mock('../slices/postsSlice', () => ({
  fetchPosts: vi.fn(),
}));

const mockStore = configureStore([]);

// utility для рендера з redux store
function renderWithStore(store) {
  return render(
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
      posts: { posts: [], state: 'loading', error: null }
    });

    renderWithStore(store);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('відображає дані користувача після успішного запиту', () => {
    const store = mockStore({
      posts: {
        posts: [
          { id: 1, title: 'Post 1', body: 'Body 1' },
          { id: 2, title: 'Post 2', body: 'Body 2' },
        ],
        state: 'idle',
        error: null,
      }
    });

    renderWithStore(store);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Body 2')).toBeInTheDocument();
  });

  it('показує повідомлення про помилку у разі невдалого запиту', () => {
    const store = mockStore({
      posts: {
        posts: [],
        state: 'error',
        error: 'Network error',
      }
    });

    renderWithStore(store);
    expect(screen.getByTestId('error-message')).toHaveTextContent('Network error');
  });
});
