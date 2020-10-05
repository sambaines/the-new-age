<style>
  .intro {
    grid-area: 2 / 1 / 3 / 5;
    padding: 64px 58px 0 48px;
  }

  h1, h2 {
    font-size: 4rem;
    font-family: var(--body-text);
    font-weight: 700;
    color: var(--primary-light);
    margin: 0;
    position: relative;
    left: -24px;
  }

  .work {
    grid-area: 3 / 1 / 4 / 5;
    padding: 96px 0 0 48px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: var(--body-text);
    font-weight: 400;
    color: var(--primary-light);
    letter-spacing: 0.075rem;
  }

  .bold {
    font-weight: 700;
  }

  .project {
    padding-top: 24px;
    position: relative;
    width: 100%;
    margin: 1rem 0 0 0;
  }

  .project-image {
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

  .project-image::after {
    content: '';
     height: 1px;
     width: 4000px;
     position: absolute;
     background-color: var(--primary-dark);
     left: -1900px;
     top: 72px;
     z-index: -1;
  }

  #blendedworldsbranding {
    background-image: url("../blendedworldsbranding.png");
    background-position: center;
    background-size: 150%;
    background-repeat: no-repeat;
    background-color: #DED8D6;
  }

  #emaildesignsystem {
    background-image: url("../emaildesignsystem.png");
    background-position: center;
    background-size: 150%;
    background-repeat: no-repeat;
    background-color: var(--primary-dark);
  }

  #landingpages {
    background-image: url("../landingpages.png");
    background-position: 20% 50%;
    background-size: 125%;
    background-repeat: no-repeat;
    background-color: var(--primary-dark);
  }

  #eclecticcharmdesign {
    background-image: url("../eclecticcharmdesign.png");
    background-position: 10% 50%;
    background-size: 125%;
    background-repeat: no-repeat;
    background-color: var(--primary-dark);
  }

  img {
    width: 100%;
  }

  .project-title {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.075rem;
    margin: 0;
    padding: 1rem 0 0.25rem;
    max-width: 280px;
  }

  .tags {
    color: var(--accent-primary);
    font-family: var(--body-text);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.075rem;
    padding-right: 3rem;
  }

  .writing {
    grid-area: 4 / 1 / 5 / 5;
    padding: 96px 0 0 0;
  }

  .writing h2 {
    padding-left: 48px;
  }

  .article {
    background-color: var(--primary-dark);
    box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 20px 12px -12px rgba(0, 0, 0, 0.12);
    border-radius: 24px 4px 4px 4px;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem 1rem;
    position: relative;
    max-width: 380px;
  }

  .article::after {
    content: '';
     height: 1px;
     width: 4000px;
     position: absolute;
     background-color: var(--primary-dark);
     left: -1900px;
     top: 32px;
     z-index: -1;
  }

  .article-title {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.075rem;
    margin: 0 0 0.5rem 0;
    padding: 1rem 0 0 0;
    max-width: 320px;
  }

  .date {
    color: var(--accent-primary);
    font-family: var(--body-text);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.06rem;
    margin-top: 4px;
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
    position: absolute;
    right: 1.5rem;
  }

  .redesign {
    background-color: var(--accent-secondary);
  }

  .blendedworlds {
    background-color: var(--accent-primary);
  }

  .contact {
    grid-area: 5 / 1 / 6 / 5;
	  padding: 64px 0 0 48px;
  }

  .contact-button {
    background-color: var(--accent-primary);
    padding: 1rem 1.5rem 0.8rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 20px 12px -12px rgba(0, 0, 0, 0.12);
    border-radius: 16px 4px 4px 4px;
    display: inline-block;
    margin-top: 1rem;
    color: var(--primary-dark);
    font-family: var(--body-text);
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0.04rem;
    position: relative;
    left: -24px;
  }


  @media screen and (min-width: 1048px) {
    .intro {
        grid-area: 2 / 2 / 3 / 6;
        max-width: 542px;
        padding: 64px 48px 0;
      }

    .work {
      grid-area: 3 / 2 / 4 / 6;
    }

    .project-image {
      width: 620px;
      height: 400px;
    }

    #blendedworldsbranding, #emaildesignsystem, #landingpages, #eclecticcharmdesign {
      background-size: 100%;
    }

    .project-title {
      font-size: 1.5rem;
      line-height: 1.75rem;
      max-width: 520px;
      padding: 1.25rem 0 0.5rem;
    }

    .writing {
      grid-area: 4 / 2 / 5 / 6;
    }

    .article {
      margin-left: 24px;
    }

    .contact {
      position: fixed;
      bottom: 10vh;
      right: 6vw;
    }

}

@media screen and (min-width: 1440px) {
  .contact {
      right: 10vw;
    }

}

</style>

<svelte:head>
	<title>Hey, I'm Sam!</title>
</svelte:head>

<div class="intro">
  <h1>HEY</h1>
  <p>I'm Sam.</p>
  <p>A <span class="bold">designer, developer and creator</span>. I have a passion for building products that add a little bit of joy to the mundane.</p>
  <p>I currently have a focus on <span class="bold">headless commerce</span> and <span class="bold">building tooling</span> to bridge the gap between design and development.</p>
  <p>If your looking for a designer to bring something to life -- <span class="bold">let’s chat!</span></p>
</div>

<div class="work" id="work">
  <h2>Work</h2>
  <div class="project">
    <div class="project-image" id="eclecticcharmdesign">
    </div>
    <p class="project-title">
      <a href="/work/eclecticcharmdesign">
        Designing an E-commerce Store for Jewellery - Eclectic Charm
      </a>
    </p>
    <span class="tags">Web Design, UI/UX, Headless Commerce</span>
  </div>
  <div class="project">
    <div class="project-image" id="landingpages">
    </div>
    <p class="project-title">
      <a href="/work/landingpages">
        A Collection of Landing Page Designs
      </a>
    </p>
    <span class="tags">Web Design, Marketing, UI/UX</span>
  </div>
  <div class="project">
    <div class="project-image" id="emaildesignsystem">
    </div>
    <p class="project-title">
      <a href="/work/emaildesignsystem">
        Building a Modular Set of Email Components to Improve Workflow
      </a>
    </p>
    <span class="tags">Tooling, Email Design, Design Systems</span>
  </div>
  <div class="project">
    <div class="project-image" id="blendedworldsbranding">
    </div>
    <p class="project-title">
      <a href="/work/blendedworldsbranding">
        Designing the Blended Worlds Branding & Identity System
      </a>
    </p>
    <span class="tags">Branding, Visual Identity, Guidelines</span>
  </div>
</div>

<div class="writing" id="writing">
  <h2>Writing</h2>
  <a href="/writing/whenpushcomestoshove">
    <div class="article">
        <p class="article-title">When push comes to shove, build a new site.</p>
        <span class="date">1st October</span>
        <span class="category redesign">REDESIGN</span>
    </div>
  </a>
  <!--
  <a href="/">
    <div class="article">
        <p class="article-title">When push comes to shove, build a new site</p>
        <span class="date">24th Sept</span>
        <span class="category redesign">REDESIGN</span>
    </div>
  </a>
  <a href="/">
    <div class="article">
        <p class="article-title">When push comes to shove, build a new site</p>
        <span class="date">24th Sept</span>
        <span class="category blendedworlds">Blended Worlds</span>
    </div>
  </a> -->
</div>


<div class="contact">
  <h2>Let's Chat</h2>
  <a class="contact-button" href="mailto:heysambaines@gmail.com" target="_blank">heysambaines@gmail.com</a>
</div>


