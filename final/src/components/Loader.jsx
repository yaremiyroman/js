import styled from 'styled-components';

const Container = styled.div`
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.75;
`;

const Spinner = styled.div`
  --size: 64px;
  --thickness: 4px;
  --color: #1976d2; /* MUI primary */
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  /* create ring with transparent gap using conic-gradient */
  background: conic-gradient(var(--color) 0deg 90deg, transparent 90deg 360deg);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - var(--thickness)), black calc(100% - var(--thickness)));
  mask: radial-gradient(farthest-side, transparent calc(100% - var(--thickness)), black calc(100% - var(--thickness)));
  animation: cp-rotate 1.2s linear infinite;
  position: fixed;
  justify-self: center;
  top: 42%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    /* add soft inner overlay to mimic two-layer arc */
    background: linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
    mix-blend-mode: screen;
    pointer-events: none;
  }

  @keyframes cp-rotate {
    to { transform: rotate(360deg); }
  }
`;

const Loader = () => {
  return (
    <>
      <Container></Container>
      <Spinner role="progressbar" aria-label="Loading"></Spinner>
    </>
  );
};

export default Loader;
