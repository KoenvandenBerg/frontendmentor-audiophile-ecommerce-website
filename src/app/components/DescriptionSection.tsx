import React from 'react';
import descriptionSectionStyles from '@/app/styles/DescriptionSection.module.css';

export default function DescriptionSection() {
  return (
    <div className={descriptionSectionStyles.container}>
      <section className={descriptionSectionStyles.content}>
        <picture>
          <source
            srcSet="/shared/tablet/image-best-gear.jpg"
            media="(min-width: 700px)"
          ></source>
          <source
            srcSet="/shared/desktop/image-best-gear.jpg"
            media="(min-width: 1100px)"
          ></source>
          <img
            src="/shared/mobile/image-best-gear.jpg"
            alt="Someone listening to music using headphones."
          ></img>
        </picture>
        <div className={descriptionSectionStyles.text}>
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </div>
  );
}
