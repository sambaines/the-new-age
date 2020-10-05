<style>
  .project {
    grid-area: 2 / 1 / 3 / 5;
	  padding: 64px 0 0 48px;
  }

  .project-image {
    background-image: url("../eclecticcharmdesign.png");
    background-position: 10% 50%;
    background-size: 125%;
    background-repeat: no-repeat;
    background-color: var(--primary-dark);
    width: 348px;
    height: 280px;
    box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 20px 12px -12px rgba(0, 0, 0, 0.12);
    border-radius: 24px 4px 4px 4px;
    position: relative;
    left: -24px;
  }

  .project-title {
    font-family: var(--body-text);
    color: var(--primary-light);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.25rem;
    letter-spacing: 0.075rem;
    margin: 0;
    padding: 1rem 0 0.25rem;
    max-width: 280px;
  }

  .line {
    width: 4000px;
    background-color: var(--primary-dark);
    height: 1px;
    position: relative;
    left: -50%;
    margin: 1rem 0;
    z-index: -1;
  }

  .tags, .caption {
    color: var(--accent-primary);
    font-family: var(--body-text);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.075rem;
    padding-right: 3rem;
    max-width: 320px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: var(--body-text);
    font-weight: 400;
    color: var(--primary-light);
    letter-spacing: 0.075rem;
    max-width: 270px;
  }

  p a {
    color: var(--accent-primary);
  }

  .bold {
    font-weight: 700;
  }

  .text {
    grid-area: 3 / 1 / 4 / 5;
    padding: 48px 0 0 48px;
  }

  .inline-image {
    width: 100%;
    position: relative;
    left: -24px;
    box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 20px 12px -12px rgba(0, 0, 0, 0.12);
    border-radius: 24px 4px 4px 4px;
    margin-top: 1rem;
    background-color: var(--primary-dark);
  }

  @media screen and (min-width: 1048px) {
    .project {
        grid-area: 2 / 2 / 3 / 8;
        max-width: 542px;
        padding: 64px 48px 0;
        height: 400px;
      }

    .project-image {
      width: 620px;
      height: 400px;
      position: absolute;
      left: 54%;
    }

    #eclecticcharmdesign {
      background-size: 100%;
    }

    .project-title {
      max-width: 448px;
      padding: 8rem 0 0.5rem;
    }

    p {
    max-width: 520px;
  }

  .line {
    left: -1900px;
  }

  .text {
    grid-area: 3 / 2 / 4 / 8;
  }

  .inline-image {
    margin-top: 2rem;
  }

}
</style>

<div class="project" id="top">
  <div class="project-image" id="eclecticcharmdesign">
  </div>
  <h1 class="project-title">
      Designing an E-commerce Store for Jewellery - Eclectic Charm
  </h1>
  <div class="line"></div>
  <span class="tags">Web Design, UI/UX, Headless Commerce</span>
</div>
<div class="text">
  <p>Let's take a look through the design to development process for this entire headless commerce site. The client runs a handmade jewellery site which was
    originally hosted with an all-in-one solution (Big Cartel), which worked well but lacked a strong brand element. They had some requirements for the new design:
    <span class="bold">minimal / clean design, responsive, showcase large product images, improved UX and adding brand personality.</span>
  </p>
  <p>For projects like this the logical starting point is to comb over the current site and build a picture of the information architecture, then work back
    with the client to understand the current layout and work out if it can be improved. From this a sitemap usually comes together for the new design.</p>
  <img class="inline-image" src="/ec-sitemap.png" alt="Information architecture for the new design." />
  <span class="caption">Information architecture for the new design.</span>
  <p>This provides a basic structure which can be built upon for the initial wireframes. The process for this is some quick and rough hand sketches, working from
    individual elements on a page and putting them together (a bit like a component set) before settling onto a few options to mock up in higher fidelity. Normally
    a selection of routes, 3 to 4, are presented for feedback and eventually refinement - before producing a final wireframe.
  </p>
  <img class="inline-image" src="/ec-ux-hp-wires.png" alt="Four homepage variant wireframes." />
  <span class="caption">Four homepage variant wireframes.</span>
  <img class="inline-image" src="/ec-ux-hp-final.png" alt="Settled homepage wireframe design." />
  <span class="caption">Settled homepage wireframe design.</span>
  <p>This method is then repeated for the most important pages within the sitemap and for this in particular it made sense to put a lot of thought into
    the <span class="bold">Product Details Page</span> and the UX involved in that. One of the defining details to achieve was to get across the delight in
    the product variants in a visual matter (as lets face it, dropdown selects are pretty uninspiring). To make this work, circular swatches were in place to make
    it easier and quicker to select a variant for purchase. Other screens that had some attention - the cart and menu.
  </p>
  <img class="inline-image" src="/ec-ux-pp-wires.png" alt="Product details page wireframes." />
  <span class="caption">Product details page wireframes.</span>
  <img class="inline-image" src="/ec-ux-menu-cart.png" alt="Menu and Cart explorations." />
  <span class="caption">Menu and Cart explorations.</span>
  <p>From here - once the client was happy with the direction - the visual design started. The main process involved gathering a little bit of information about the brand; fonts,
    colors, imagery, etc. Compiling this into a mini style guide which could be used across the design and checking to ensure the colors passed at least AA contrast levels (they needed a litte tweak).
    Major page visuals were created for the homepage and product details.
  </p>
  <img class="inline-image" src="/ec-ui-hp.png" alt="Visual design for the homepage." />
  <span class="caption">Visual design for the homepage.</span>
  <img class="inline-image" src="/ec-ui-pp.png" alt="Visual design for the product details page." />
  <span class="caption">Visual design for the product details page.</span>
  <p>The next step post sign off - the build. The tech stack for the site is as follows; Frontend - Gatsby (React), GraphQL, HTML, Sass, all hosted on Netlify with forms enabled and
    automatic rebuilds with pushes to Github. Backend - Shopify Lite as the CMS with a zapier integration for form responses.
  </p>
  <p>Moving the client to Shopify Lite helped to reduce the monthly costs <span class="bold">from £20 down to around £7</span>, which is a big deal for a small handmade business. Alongside
  this the site has increased custom functionality and page load speed was increased by a little under half a second. But the main positive was the client had a fully custom, branded
  store with full control for the future.</p>
  <p>The detail for custom swatches on the product details page came to life with a little bit of difficulty and required a bit of work but the outcome made a visible
    difference which really gets across the detail in each product variant.
  </p>
  <img class="inline-image" src="/ec-ui-swatches.png" alt="The built product details page with custom swatches." />
  <span class="caption">The built product details page with custom swatches.</span>
  <p>The site is live, <a href="https://www.eclecticcharm.co.uk">eclecticcharm.co.uk</a>, with version 1.0 launched, some details from above have changed in the process of
    development and initial launch feedback.</p>

  <p><a href="/work/eclecticcharmdesign#top">Back to top ^</a></p>
</div>


