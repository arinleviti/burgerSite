import './Marquee.css';
import Marquee from 'react-fast-marquee';
import logo from '../../assets/logo.png';

export function MyMarquee() {
  return (
    <div className='custom-marquee'>
      <Marquee gradient={false} speed={50} autoFill={true} loop={0} >
        <span style={{ marginRight: '2rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Home Delivery</span>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '2rem' }} />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>100% Organic</span>
    </Marquee>
    </div>
  );
}

export default MyMarquee;



