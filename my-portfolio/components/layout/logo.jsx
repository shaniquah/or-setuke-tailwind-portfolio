import Image from 'next/image';
import classes from './logo.module.css';

export default function Logo() {
  return <div className='flex mx-auto items-center justify-between'> <Image src={'/images/or-setuke-logo.png'} className='rounded-full' width={90} height={90}/> <h1 className='text-lg'>OR Setuke's Portfolio</h1></div>;
}
