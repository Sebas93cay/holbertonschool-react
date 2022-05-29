import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export const Header = () => {
  return (
    <div className='App-header'>
      <img src={logo} alt='logo' className='App-logo' />
      <h1>School dashboard</h1>
    </div>
  );
};
