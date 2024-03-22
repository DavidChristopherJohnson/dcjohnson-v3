import Image from "next/image";
import Avatar from '@/assets/Avatar.jpg';

export default function Home() {
  return (
    <>
      <h1>About Me</h1>
      <Image src={Avatar} alt="David Johnson sat in a red chair looking at the camera" />      
    </>
  );
}
