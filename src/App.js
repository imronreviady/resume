import React, { Component, Fragment } from 'react';

import LeftMenu from './components/LeftMenu';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="fh5co-page">
          
            <LeftMenu />

            <div id="fh5co-main">
              <div className="fh5co-narrow-content">
                <h2 className="fh5co-heading animate-box" data-animate-effect="fadeInLeft">We Love To Design <span>See Our Portfolio</span></h2>
                <div className="row animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_1.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Illustration, Branding</p>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_2.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Web, Packaging</p>
                    </a>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_3.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Branding, Web</p>
                    </a>
                  </div>
                  <div className="clearfix visible-md-block" />
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_4.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Logo, Branding, Web</p>
                    </a>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_5.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Web, Packaging, Branding</p>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_6.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Branding</p>
                    </a>
                  </div>
                  <div className="clearfix visible-md-block visible-sm-block" />
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_7.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Web, Illustration</p>
                    </a>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_8.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Branding, Web</p>
                    </a>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="work.html">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/work_1.jpg`} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">Work Title Here</h3>
                      <p>Illustration, Branding</p>
                    </a>
                  </div>
                  <div className="clearfix visible-md-block" />
                </div>
              </div>
              <div className="fh5co-testimonial">
                <div className="fh5co-narrow-content">
                  <div className="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                    <div className="item">
                      <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/testimonial_person2.jpg`} alt="Free HTML5 Bootstrap Template" />
                      </figure>
                      <p className="text-center quote">“Design must be functional and functionality must be translated into visual aesthetics, without any reliance on gimmicks that have to be explained. ” <cite className="author">— Ferdinand A. Porsche</cite></p>
                    </div>
                    <div className="item">
                      <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/testimonial_person3.jpg`} alt="Free HTML5 Bootstrap Template" />
                      </figure>
                      <p className="text-center quote">“Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while. ”<cite className="author">— Steve Jobs</cite></p>
                    </div>
                    <div className="item">
                      <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/testimonial_person4.jpg`} alt="Free HTML5 Bootstrap Template" />
                      </figure>
                      <p className="text-center quote">“I think design would be better if designers were much more skeptical about its applications. If you believe in the potency of your craft, where you choose to dole it out is not something to take lightly. ”<cite className="author">— Frank Chimero</cite></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fh5co-narrow-content">
                <h2 className="fh5co-heading animate-box" data-animate-effect="fadeInLeft">This Is What <span>We Love To Do</span></h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                      <div className="fh5co-icon">
                        <i className="icon-strategy" />
                      </div>
                      <div className="fh5co-text">
                        <h3>Strategy</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                      <div className="fh5co-icon">
                        <i className="icon-telescope" />
                      </div>
                      <div className="fh5co-text">
                        <h3>Explore</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                      <div className="fh5co-icon">
                        <i className="icon-circle-compass" />
                      </div>
                      <div className="fh5co-text">
                        <h3>Direction</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                      <div className="fh5co-icon">
                        <i className="icon-tools-2" />
                      </div>
                      <div className="fh5co-text">
                        <h3>Expertise</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fh5co-counters" style={{backgroundImage: 'url(assets/images/hero.jpg)'}} data-stellar-background-ratio="0.5" id="counter-animate">
                <div className="fh5co-narrow-content animate-box">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <span className="fh5co-counter js-counter" data-from={0} data-to={67} data-speed={5000} data-refresh-interval={50} />
                      <span className="fh5co-counter-label">Clients Worked With</span>
                    </div>
                    <div className="col-md-4 text-center">
                      <span className="fh5co-counter js-counter" data-from={0} data-to={130} data-speed={5000} data-refresh-interval={50} />
                      <span className="fh5co-counter-label">Completed Projects</span>
                    </div>
                    <div className="col-md-4 text-center">
                      <span className="fh5co-counter js-counter" data-from={0} data-to={27232} data-speed={5000} data-refresh-interval={50} />
                      <span className="fh5co-counter-label">Line of Codes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fh5co-cards">
                <div className="fh5co-narrow-content">
                  <h2 className="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Press Release</h2>
                  <div className="fh5co-flex-wrap">
                    <div className="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                      <h5>Expertise</h5>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p><a href="#" className="btn btn-md btn-primary">Learn More</a></p>
                    </div>
                    <div className="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                      <h5>Explore</h5>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas.</p>
                      <p><a href="#" className="btn btn-md btn-primary">Learn More</a></p>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="fh5co-narrow-content">
                <div className="row">
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <h1 className="fh5co-heading-colored">We Design Beautiful &amp; Functional Website</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <p className="fh5co-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
                  </div>
                  <div className="col-md-7 col-md-push-1">
                    <div className="row">
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</div>

      </Fragment>
    );
  }
}

export default App;
