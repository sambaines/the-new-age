<style>
  .project {
    grid-area: 2 / 1 / 3 / 5;
	  padding: 64px 0 0 48px;
  }

  .project-image {
    background-image: url("../emaildesignsystem.png");
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
    Building a Modular Set of Email Components to Improve Workflow
  </h1>
  <div class="line"></div>
  <span class="tags">Tooling, Email Design, Design Systems</span>
</div>
<div class="text">
  <p>A large part of my web design role at Joules has comprised of maintaining and developing an evolving email design system. Paired with a developer, I work to create
    components in Photoshop which we mimic in code and pair up using the Photoshop API. The main focus of this work is to <span class="bold">improve the speed at which emails can be designed</span>
    and then subsequently built, whilst also <span class="bold">maintaining a consistency in design</span> across a team of four.
  </p>
  <img class="inline-image" src="/email-module.png" alt="An example email component we use." />
  <span class="caption">An example email component we use.</span>
  <p>Each set of modules is built as a single Photoshop file. The module sets include Heroes (like shown above), Text, Button, Images, Break Lines, Spacers and more.
    The visual below is the standard HERO module with which we would normally lead an email. The concept is simple, copy and images (and anything else i.e. buttons) are
    separated our within folders and all located within a master folder with a name corresponding to a HTML Module. This folder name for example is HERO_A_TOP_1280_D and
    the developer script will pull this out using the Photoshop API and load the HTML module by the same name when generating the code.
  </p>
  <p>From a development stand point the system runs on a couple of scripts - both built on Python - the first pulls out all the modules names from the Photoshop file and
    generates both an excel spreadsheet for links and any images within folders named 'IMAGE'. The second script parses those populated spreadsheets and builds HTML and
    CSS in the order laid out in the Photoshop file.
  </p>
  <p>
    Version one of the script didn't account for spacing between modules so a developer was adding these in by hand. My first update was to build a
    CC Library for module spacers with attached values i.e. SPACER_40 for 40px padding - this lead to making the build process almost 100% automated.
  </p>
  <img class="inline-image" src="/spacers.png" alt="The spacer library of components." />
  <span class="caption">The spacer library of components.</span>
  <p>Here is a collection of emails built with the system, which will hopefully show the variants and consistency that can be produced with an email design system.</p>
  <img class="inline-image" src="/email-collection.png" alt="A collection of emails built with the system." />
  <span class="caption">A collection of emails built with the system.</span>
  <p><a href="/work/emaildesignsystem#top">Back to top ^</a></p>
</div>
