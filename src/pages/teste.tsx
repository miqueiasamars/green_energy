import Image from 'next/image';
 
export default function Page() {
  return (
    <div className="grid-element">
      <Image
        fill={true}
        src="/greenenergy_pellets_energia.png"
        sizes="(max-width: 1200px) 50vw, 33vw"
        alt={''}
          />
    </div>
  );
}