"use client";

import { close, open } from "@/app/features/slicers/LightBoxSlice";
import { AppDispatch, AppState } from "@/app/features/store";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useDispatch, useSelector } from "react-redux";

export type LightBoxProps = ImageProps & {
  src: StaticImageData;
  alt: string;
};

export default function LightBox({ src, alt }: LightBoxProps) {
  const image = useSelector((state: AppState) => state.lightbox.image);
  const dispatch: AppDispatch = useDispatch();

  const handleOpen = (image: StaticImageData) => dispatch(open(image));
  const handleClose = () => dispatch(close());

  return (
    <>
      <div>
        <div
          className="transition duration-500 hover:scale-110 cursor-zoom-in"
          onClick={() => handleOpen(src)}
        >
          <Image
            src={src}
            alt={alt}
            layout="responsive"
            objectFit="cover"
            quality={40}
          />
        </div>
        {image === src && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80
             p-4 cursor-zoom-out"
            onClick={handleClose}
          >
            <div className="mx-auto">
              <Image
                src={src}
                alt={alt}
                layout="responsive"
                objectFit="cover"
                quality={90}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
