import { useState, useEffect } from 'react';

const FullNameForm = () => {
  const [someName, setSomeName] = useState('');
  const [someLastName, setSomeLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    setFullName(`${someName} ${someLastName}`);
  }, [someName, someLastName]);

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={someName}
        onChange={(e) => setSomeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={someLastName}
        onChange={(e) => setSomeLastName(e.target.value)}
      />
      <div>{fullName}</div>
    </div>
  );
};

export default FullNameForm;
