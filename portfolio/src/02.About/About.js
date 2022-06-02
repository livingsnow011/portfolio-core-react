import "./About.css";

function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>about</h2>
        <p>제 자신에 대한 소개와 약력, 목표 등을 적었습니다.</p>
      </div>

      <div className="section__wrapper about__wrapper">
        <article className="about__content about__wrapper-img"></article>

        <article className="about__content about">
          <div className="btn-container">
            <button className="tab-btn active" data-id="introduction">
              introduction
            </button>
            <button className="tab-btn" data-id="profile">
              profile
            </button>
            <button className="tab-btn" data-id="visions">
              visions
            </button>
          </div>

          <div className="about-content">
            <div className="content active" id="introduction">
              <h4>introduction</h4>
              <p>
                I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                direct trade hoodie ugh chambray, craft beer pork belly flannel
                tacos single-origin coffee art party migas plaid pop-up.
              </p>
            </div>
            <div className="content" id="profile">
              <h4>Profile</h4>
              <p>
                Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                crucifix offal deep v hella biodiesel. Church-key listicle
                polaroid put a bird on it chillwave palo santo enamel pin,
                tattooed meggings franzen la croix cray. Retro yr aesthetic four
                loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                Roof party hammock master cleanse pop-up truffaut, bicycle
                rights skateboard affogato readymade sustainable deep v
                live-edge schlitz narwhal.
              </p>
            </div>
            <div className="content" id="visions">
              <h4>visions</h4>
              <p>
                Chambray authentic truffaut, kickstarter brunch taxidermy vape
                heirloom four dollar toast raclette shoreditch church-key.
                Poutine etsy tote bag, cred fingerstache leggings cornhole
                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                swag, mixtape hashtag marfa readymade direct trade man braid
                cold-pressed roof party. Small batch adaptogen coloring book
                heirloom. Letterpress food truck hammock literally hell of wolf
                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                banh mi salvia venmo photo booth quinoa chicharrones.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
