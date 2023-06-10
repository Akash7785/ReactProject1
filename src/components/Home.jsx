import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            architecto illo veniam soluta! Tempora vitae unde sequi sapiente
            exercitationem laudantium repudiandae recusandae tempore architecto
            culpa atque assumenda sint, quod veritatis totam quisquam sunt, quam
            deserunt laborum sed maxime ea? Asperiores quidem quam quae deserunt
            illum aliquam magni repellendus dolore dolorum.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h2>Who we are ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            accusantium libero quos hic repellendus dicta delectus tempora
            distinctio, culpa voluptates, consequuntur aliquid? Aperiam quaerat
            laborum dolorem ipsam tempora, tenetur corporis dolore architecto
            sint delectus itaque hic est officia a veniam laudantium? Neque
            illum voluptatum voluptate, reprehenderit itaque ducimus officiis
            alias. Reprehenderit neque nulla recusandae? Tenetur, dolore esse. A
            laboriosam placeat esse architecto enim numquam aspernatur itaque
            amet et officiis libero culpa asperiores iste quam labore
            consequatur, fugit nesciunt corrupti magnam odio aperiam. Ullam, ea.
            Eaque officiis, ipsum nulla ullam qui sapiente fuga, facilis aliquam
            alias cumque cum quibusdam ipsa accusamus rerum enim quasi, a
            corrupti doloremque maxime magni eligendi? Aspernatur, illum! Unde,
            aspernatur molestias. Earum, odio. Quae doloremque magnam ipsa natus
            eveniet saepe repellat excepturi expedita accusantium cupiditate et
            est porro nulla maiores atque vel dolorem in dicta voluptatibus
            laudantium facere, asperiores cum labore facilis? Quo doloribus
            magni voluptatem illum laborum nostrum nihil itaque? Natus,
            asperiores autem? Ab dolorem quisquam doloribus cum, illum deserunt
            minima, voluptas recusandae inventore hic, itaque perspiciatis
            officiis. Consequatur eaque quidem magnam ad tempora quod.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
