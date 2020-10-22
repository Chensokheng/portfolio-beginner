import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link as ScrollLink } from 'react-scroll';
import Typical from 'react-typical';

import content from '../content';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: '#091c29',
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
          <h2
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
          >
            {content.header.text[2]}{' '}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
