<style>
  .project {
    grid-area: 2 / 1 / 3 / 5;
	  padding: 64px 0 0 48px;
  }

  .project-image {
    background-image: url("../landingpages.png");
    background-position: 20% 50%;
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

    #landingpages {
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
  <div class="project-image" id="landingpages">
  </div>
  <h1 class="project-title">
      A Collection of Landing Page Designs
  </h1>
  <div class="line"></div>
  <span class="tags">Web Design, Marketing, UI/UX</span>
</div>
<div class="text">
  <p>This is a collection of landing page designs and redesigns I have completed over the last couple of years. The majority of these take existing pages and bring them back from the grave
    to an update in line with the rest of the current site style. Let's take a walk through a couple of the briefs and the results.
  </p>
  <p><span class="bold">BRIEF</span> -- to take the old welly care guide page and bring it up to date with a more modern design that still fits into Joules' brand style.</p>
  <p>The Welly Care Guide as self-titled provides customers with information about how to care for a staple product the business sells: <span class="bold">wellies.</span></p>
  <img class="inline-image" src="/care-guide-old.jpg" alt="The original welly care guide design." />
  <span class="caption">The original welly care guide design.</span>
  <p>This redesign took the old page design (see below) and tore out the dated looking illustrations to replace them with up-to-date photography and a consistent colour palette
    throughout. The page had some main functionality that needed to be retained, such as the clean/store/protect information which is good for SEO and customer knowledge, which was
    revamped and placed into an accordion style dropdown to reduce page length and still sit in the initial view port. </p>
  <img class="inline-image" src="/care-guide-new.jpg" alt="The new welly care guide design." />
  <span class="caption">The new welly care guide design.</span>
  <p>The new page design was built again with the knowledge that it will be refreshed every 8 weeks with new imagery - so with that in mind I kept specific product lifestyle shots
    to key locations thus making the refresh process faster and more streamlined. The responsive version is below:</p>
  <img class="inline-image" src="/care-guide-new-mobile.png" alt="How the design responds down in size." />
  <span class="caption">How the design responds down in size.</span>
  <p>Let's look at another page.</p>
  <p><span class="bold">BRIEF</span> -- a small project to redesign a page which showed customers our blog posts and up-coming collections of products which, like the care guide,
    was refreshed every 8 weeks.</p>
  <img class="inline-image" src="/inspire-me-old.jpg" alt="The original 'Inspire Me' page." />
  <span class="caption">The original 'Inspire Me' page.</span>
  <p>The main appraoch to the redesign of this page was to improve it's UX and provide a nicer experience for customers, allowing the company to show a wider breadth of
    inspirational product and content.
  </p>
  <img class="inline-image" src="/inspireme.png" alt="The redesigned 'Inspire Me' page." />
  <span class="caption">The redesigned 'Inspire Me' page.</span>
  <p>The process started with a little IA to determine what we needed to keep on the page—blog posts, product categories we're excited about had to stay -
    I also added a link to other high quality content with a secondary hero block (denim care currently) to improve SEO. I pulled out a blog post for a hero to give
     an anchor to the top of the page and allow for more focus on a specific post in future refreshes.</p>
  <p>Likewise the blog post cards themselves were given more detail in an attempt to ensure a better user experience by having more understanding about a specific post before
    diving in. We retained the search feature but rather than a dropdown - it was replaced with a horizontal nav for better visibility and access below the H1.</p>
  <img class="inline-image" src="/inspireme-new-mobile.png" alt="How the new page design looks at mobile resolution." />
  <span class="caption">How the new page design looks at mobile resolution.</span>
  <p>The last page design in this collection, was to design an email sign up thankyou page which better reflected the brand look and feel for Joules. Using our talented <a href="https://www.instagram.com/rosie_mcadam/">
    illustrator Rosie's characters</a> and landscape elements, I re-composited the illustrations to form the fun and on-brand scene below.</p>
  <img class="inline-image" src="/signup-new.png" alt="An illustrated thankyou page design." />
  <span class="caption">An illustrated thankyou page design.</span>
  <p><a href="/work/landingpages#top">Back to top ^</a></p>
</div>


