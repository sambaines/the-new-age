<style>
  .article {
    grid-area: 2 / 1 / 3 / 5;
	  padding: 64px 0 0 48px;
  }

  .title {
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

  .category {
    border-radius: 2px 2px 12px 2px;
    color: var(--primary-dark);
    font-family: var(--body-text);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.02rem;
    text-align: center;
    padding: 4px 16px 4px 12px;
    position: relative;
  }

  .work-cat {
    background-color: var(--secondary-light);
  }

  .date {
    color: var(--accent-primary);
    font-family: var(--body-text);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.06rem;
    margin-top: 4px;
    position: relative;
    left: 1rem;
  }

  .caption {
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
  }

  @media screen and (min-width: 1048px) {
    .article {
        grid-area: 2 / 2 / 3 / 8;
        max-width: 542px;
        padding: 64px 48px 0;
      }

    .title {
      max-width: 448px;
      padding: 4rem 0 0.5rem;
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

}
</style>

<div class="article">
  <h1 class="title">
      Building a swatch system using Figma and Sass Lists.
  </h1>
  <div class="line"></div>

  <span class="category work-cat">WORK</span>
  <span class="date">8th October</span>

</div>
<div class="text">
  <p>As part of the work developing <a href="/work/eclecticcharmdesign">Eclectic Charm's new site</a>, the product details page required a little bit
    of Sass magic using a feature I hadn't come across before which is 'Sass Lists'. In order to get the product variants to display a swatch which represented
    the colorway of the jewellery to a higher degree I needed to design and build a swatch system. Pulling product data from shopify gave us a variant name, but due to
    the nature of shopify it is difficult to add extra fields, say one for a swatch or image of a swatch, and then pull that extra data into Gatsby.
  </p>
  <p>
    Instead I decide to build a collection of swatches within Figma which could be exported as SVGs and stored in a swatches folder, allowing for reusability and control
    over the SVG performance. To achieve this we matched the product variant name to the SVG swatch name inside Figma before exporting - this also means for new products
    if the use the same variant name the swatch can be reused in code.
  </p>
  <img class="inline-image" src="/figma-ec-swatch-system.png" alt="How the swatch system looks inside of Figma." />
  <span class="caption">How the swatch system looks inside of Figma.</span>
  <p>
    On the product details page of the site, the variants options work as a SELECT html element, styled to be individual circles which can be selected - the idea
    to replace the circle's background image with the swatch worked well and also allowed for a fallback incase the swatch didn't load properly. Due to the large number
    of swatches that would be required I wanted find a performant way to cycle through the swatches and choose the corresponding image to product variant. Javascript was an
    option for this but seemed like a stretch; it turns out there is a function for this in Sass called <a href="https://sass-lang.com/documentation/values/lists">'Lists'</a>. It was simple to implement using the code below:
  </p>
  <img class="inline-image" src="/ec-sass-swatches-code.png" alt="The code for the Sass List." />
  <span class="caption">The code for the Sass List.</span>
  <p>
    This code looks through a list called $swatches and replaces the matching value with the value in the CSS property - in this case the URL for the SVG swatch.
  </p>
  <p><span class="bold">Job done, well deserved
    pat on the back. Not quite.</span></p>
  <p>
    What I hadn't considered originally was that Gatsby adds unique pre-fixes to its images during build time - the simple solution was to add all the swatches to the static folder, which
    should have been obvious in all honesty. And then finally we had a complete solution which worked.
  </p>
  <p>There is still work to do in a version 2.0 of the site which splits out the variants
    color and fixing type, but that's a story for another time.
  </p>
  <img class="inline-image" src="/ec-ui-swatches.png" alt="The built product details page with custom swatches." />
  <span class="caption">The built product details page with custom swatches.</span>
</div>
