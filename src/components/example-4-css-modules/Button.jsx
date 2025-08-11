import stlyes from './button.module.css';

const Button = ({ buttonText }) => {
  return <button className={stlyes.btn}>{buttonText}</button>;
};

export default Button;
