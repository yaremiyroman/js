const Info = ({ activeUser }) => {
  return (
    <div id="info">
      <div
        id={`crosses`}
        className={`indicator ${activeUser ? 'active' : ''}`}
      >
        X
      </div>
      <h1>Tic Tac</h1>
      <div
        id={`rounds`}
        className={`indicator ${!activeUser ? 'active' : ''}`}
      >
        0
      </div>
    </div>
  );
};

export default Info;
