import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  offset: 400,
  duration: 1000,
});

function OnScrollAnimate() {
  return (
    <>
      <header className="main-header">
        <h1>
          <span>Acrylic Painting</span>Gallery
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, modi.</p>
      </header>
      <main className="container">
        <section className="card">
          <img src="img/paint_1.png" alt="" />
          <div>
            <h3>Acrylic Painting One</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat minima officia in nihil! Consequuntur, illum! Aut, assumenda quod dicta doloremque rem alias animi doloribus officiis enim quas modi ab.</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
        <section className="card" data-aos="fade-left">
          <img src="img/paint_2.png" alt="" />
          <div>
            <h3>Acrylic Painting Two</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat minima officia in nihil! Consequuntur, illum! Aut, assumenda quod dicta doloremque rem alias animi doloribus officiis enim quas modi ab.</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
        <section className="card" data-aos="fade-right">
          <img src="img/paint_3.png" alt="" />
          <div>
            <h3>Acrylic Painting Three</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat minima officia in nihil! Consequuntur, illum! Aut, assumenda quod dicta doloremque rem alias animi doloribus officiis enim quas modi ab.</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
        <section className="card" data-aos="fade-left">
          <img src="img/paint_4.png" alt="" />
          <div>
            <h3>Acrylic Painting Four</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat minima officia in nihil! Consequuntur, illum! Aut, assumenda quod dicta doloremque rem alias animi doloribus officiis enim quas modi ab.</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
        <section className="card" data-aos="fade-right">
          <img src="img/paint_5.png" alt="" />
          <div>
            <h3>Acrylic Painting Five</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat minima officia in nihil! Consequuntur, illum! Aut, assumenda quod dicta doloremque rem alias animi doloribus officiis enim quas modi ab.</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default OnScrollAnimate;
