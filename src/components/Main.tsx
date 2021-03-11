import React from 'react';

export const Main = () => {
  return (
    <main>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              You're going to fall in love with nature
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventures like you never have before
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>

            <a href='#' className='btn-text'>
              Learn more &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                src='img/nat-1-large.jpg'
                alt='Photo 1'
                className='composition__photo composition__photo--p1'
              />
              <img
                src='img/nat-2-large.jpg'
                alt='Photo 2'
                className='composition__photo composition__photo--p2'
              />
              <img
                src='img/nat-3-large.jpg'
                alt='Photo 3'
                className='composition__photo composition__photo--p3'
              />
            </div>
          </div>
        </div>

        <div className='section-features'>
          <div className='row'>
            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Explore the world
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-compass'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Meet nature
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-map'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Find your way
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-heart'></i>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live a healthier life
                </h3>
                <p className='feature-box__text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
