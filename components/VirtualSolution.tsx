import Image from 'next/image';
import Link from 'next/link';

interface VirtualSolutionProps {
  imageSrcSet: string;
  title: string;
  description: string;
  linkText: string;
}

function VirtualSolution({
  imageSrcSet,
  title,
  description,
  linkText,
}: VirtualSolutionProps) {
  return (
    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
      <div className="justify-center items-center flex grow flex-col flex-1 max-md:mt-8">
        <div className="shadow-lg bg-white self-stretch flex w-full grow flex-col px-5 py-8 rounded-xl">
          <div className="self-center flex w-[311px] max-w-full flex-col">
            <div className="justify-between items-start flex w-[205px] max-w-full gap-3">
              <Image
                src={imageSrcSet}
                alt=""
                className="rounded-[50%]"
                width={100}
                height={100}
              />
              <h2 className="text-zinc-800 text-xl font-semibold">{title}</h2>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-[166.667%] mt-5">
              {description}
            </p>
            <Link href="#" className="text-neutral-500 text-lg mt-8">
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualSolution;
