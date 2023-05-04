import web3Desktop from './../../assets/images/image-web-3-desktop.jpg';
import web3Mobile from './../../assets/images/image-web-3-mobile.jpg';
import gamingGrowthImage from './../../assets/images/image-gaming-growth.jpg';
import top10LaptopsImage from './../../assets/images/image-top-laptops.jpg';
import retroPcsImage from './../../assets/images/image-retro-pcs.jpg';

function Body() {
  return (
    <main>
      <article className="main-content">
        <picture>
          <source src={web3Desktop} />
          <img src={web3Mobile} alt="web 3"></img>
        </picture>
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
      </article>
      <article className="sidebar">
        <div>
          <span>New</span>
          <h2>Hydrogen VS Electric Cars</h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div>
          <h2>The Downsides of AI ARtistry</h2>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div>
          <h2>Is VC Funding Drying Up?</h2>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </article>
      <article className="bottom-content">
        <div>
          <div>
            <img src={retroPcsImage} alt="retro pcs" />
            <div>
              <span>01</span>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={top10LaptopsImage} alt="top 10 laptops" />
            <div>
              <span>02</span>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for varius needs and budgets.</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={gamingGrowthImage} alt="growth of gaming" />
            <div>
              <span>03</span>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Body;
