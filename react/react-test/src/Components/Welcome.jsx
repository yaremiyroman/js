import React from 'react';

// Класовий компонент
class Welcome extends React.Component {
 render() {
   return (
     <h1>Привіт, {this.props.name}</h1>
   );
 }
}

export default Welcome;
