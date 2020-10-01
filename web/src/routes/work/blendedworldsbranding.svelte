<style>
  .project {
    grid-area: 2 / 1 / 3 / 5;
	  padding: 64px 0 0 48px;
  }

  .project-image {
    background-image: url("../blendedworldsbranding.png");
    background-position: center;
    background-size: 150%;
    background-repeat: no-repeat;
    background-color: #DED8D6;
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

    #blendedworldsbranding{
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
  <div class="project-image" id="blendedworldsbranding">
  </div>
  <h1 class="project-title">
      Designing the Blended Worlds Branding & Identity System
  </h1>
  <div class="line"></div>
  <span class="tags">Branding, Visual Identity, Guidelines</span>
</div>
<div class="text">
  <p>Blended Worlds are a company that tell stories and build worlds whilst helping others do the same. I helped to concept and define the brand from scratch, starting
    with setting out brand characteristics - <span class="bold">Fantastical, Authentic, Pocket Watches & Monocles (think vintage), Refined.</span></p>
  <p>From there I pulled moodboards to set the initial concept and designed a brand mark which encapsulated the characteristics, whilst having hidden semiotics within.
    The rest of the process involved building out logomark variants, selecting a color palette, typography choices and creating a set of guidelines.
  </p>
  <p>Below are some of the guidelines and features of the identity system.</p>
  <img class="inline-image" src="/bw-gl-cover.png" alt="Brand Guidelines Cover Page." />
  <span class="caption">Brand Guidelines Cover Page.</span>
  <img class="inline-image" src="/bw-gl-about.png" alt="The core values of the brand." />
  <span class="caption">The core values of the brand.</span>
  <p>The main logomark for the brand was designed to be responsive from the outset, with three breakpoint sizes, at which the mark reduces/increases it's level of detail.</p>
  <img class="inline-image" src="/bw-gl-responsivemark.png" alt="How the logomark responds in size." />
  <span class="caption">How the logomark responds in size.</span>
  <p>In the guidelines there are a collection of logo variants which were designed to make the brand as versatile as possible.</p>
  <img class="inline-image" src="/bw-gl-variants.png" alt="Blended Worlds logomark variants." />
  <span class="caption">Blended Worlds logomark variants.</span>
  <p>One of my favourite parts of developing a brand is building the color palette - and for this brand, making the palette as accessible as possible was a must. The
    overall feel of palette is quite muted, earthy and from nature - the colors picked below all have an opposite counterpart which lands them into AAA contrast status for
    accessibility.
  </p>
  <p>For this project I decided to take the accessibilty even further and build an augmented palette that takes the main palette and adjusts the values to account
    for colorblindness variants. This in the ends means that people with Protanopia or a similar visual state, will see a palette that much better reflects the true brand
    colors (although this is mainly only achieved in a digital realm).
  </p>
  <img class="inline-image" src="/bw-gl-palette.png" alt="The chosen AAA contrast palette." />
  <span class="caption">The chosen AAA contrast palette.</span>
  <p>
    When building a full identity system I like to add charcater to the brand with additional elements. For Blended Worlds a system of flourishes were crafted which could be
    move around and positioned together to create other elements of intrigue. These sorts of things are perfect touches to add to other brand collateral. Alongside this
    repeatable patterns always seem to be a useful addition to again bring the brand together further.
  </p>
  <img class="inline-image" src="/bw-gl-flourishes.png" alt="The flourishes system." />
  <span class="caption">The flourishes system.</span>
  <img class="inline-image" src="/bw-gl-patterns.png" alt="A collection of repeatable patterns for the brand." />
  <span class="caption">A collection of repeatable patterns for the brand.</span>
  <p><a href="/work/blendedworldsbranding#top">Back to top ^</a></p>
</div>


