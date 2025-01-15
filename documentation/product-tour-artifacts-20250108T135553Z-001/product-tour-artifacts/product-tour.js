class ProductTour extends HTMLElement { // 29-08-2024
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>
      :host {
          display: block;
      }
@media (min-width: 1em) {
  *, :after, :before {
    box-sizing: border-box;
  }
  svg {
    overflow: hidden;
  }
  p, h1, h2, h3, h4, h5 ,h6 {
    margin: 0;
  }
  button, a {
    cursor: pointer;
  }
  img, svg {
    display: block;
  }
  .visible-hidden {
    /* Screen readers hiden link */
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .visible-hidden:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
    top: -22px;
  }


  .gt_container {
    font-size: 1rem;
    line-height: 1;
    text-align: left;
  }
  .ds--grid .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -8px;
    margin-left: -8px;
  }
  .ds--grid [class*=col-] {
    position: relative;
    width: 100%;
    padding-right: 8px;
    padding-left: 8px;
  }
  .gt_container .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .gt_container .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .gt_container.gt_phone .col-3,
  .gt_container.gt_phone .col-9 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .gt_container .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .gt_container .d-none {
    display: none;
  }
}
@media (min-width: 640px) {
  .ds--grid .row {
    margin-right: -16px;
    margin-left: -16px;
  }
  .ds--grid [class*=col-] {
    padding-right: 16px;
    padding-left: 16px;
  }
}
@media (min-width: 980px) {
  .ds--grid .row {
    margin-right: -24px;
    margin-left: -24px;
  }
  .ds--grid [class*=col-] {
    padding-right: 24px;
    padding-left: 24px;
  }
}
@media (min-width: 1280px) {
  .gt_container.gt_phone .col-3,
  .gt_container.gt_phone .col-9 {
    flex: 0 0 33%;
    max-width: 33%;
  }
}

/* Custom CSS */

@media (min-width: 1em) {
  .gt_button-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    /* width: 24px;
    height: 24px; */
    padding: 0;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 8px;
    background: none;
    flex-shrink: 0;
    transition: fill .25s linear;
    transition-property: border, background;
  }

  .gt_button-icon svg {
    fill: #0040B0;
    width: 7px;
    height: 12px;
  }

  .gt_button-icon:hover {
    background: #EAECEE;
    border: 1px solid #475E75;
  }

  .gt_button-icon:active {
    background: #fff;
    border: 1px solid #0040B0;
  }

  .gt_button-icon:focus {
    outline: .125rem solid #007db8;
    outline-offset: .125rem;
  }
  .gt_button-icon:hover:focus,
  .gt_button-icon:active:focus {
    outline: none;
  }

  .gt_button-icon:disabled {
    pointer-events: none;
    opacity: .4;
  }
}
@media (min-width: 1em) {
  .gt_button {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    padding: 8px 9px;
    margin: 0;
    border: 1px solid #fff;
    border-radius: 8px;
    color: #000;
    background: #fff;
    transition: background .25s linear;
    transition-property: color, border, background;
  }
  .gt_button:focus {
    outline: .125rem solid #007db8;
    outline-offset: .125rem;
  }
  .gt_button:hover {
    text-decoration: none;
  }
  .gt_button:hover:focus,
  .gt_button:active:focus {
    outline: none;
  }
  .gt_button:disabled {
    pointer-events: none;
    opacity: .4;
  }

  .gt_button-primary,
  .gt_button-primary:visited {
    color: #fff;
    background: #0070F2;
    border-color: #0070F2;
  }
  .gt_button-secondary,
  .gt_button-secondary:visited {
    color: #0040B0;
    background: #fff;
    border-color: #475E75;
  }
  .gt_button-tetriary,
  .gt_button-tetriary:visited {
    color: #0040B0;
    background: transparent;
    border-color: transparent;
  }
  .gt_button-primary:hover {
    color: #fff;
    background: #0040B0;
    border-color: #0040B0;
  }
  .gt_button-secondary:hover,
  .gt_button-tetriary:hover {
    color: #0040B0;
    background: #EAECEE;
    border-color: #475E75;
  }
  .gt_button-primary:active,
  .gt_button-secondary:active,
  .gt_button-tetriary:active {
    color: #0040B0;
    background: #fff;
    border-color: #0040B0;
  }
  @media (min-width:980px) {
    .gt_button {
      padding: 11px 13px;
    }
  }
}
@media (min-width: 1em) {
  .gt_link {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    color: #0070F2;
    transition: background .25s linear;
    transition-property: color, background;
  }
  .gt_link .gt_link-icon {
    width: 16px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .gt_link .gt_link-icon.gt_link-icon-right {
    margin-left: 4px;
  }
  .gt_link svg {
    width: 6px;
    height: 10px;
    fill: #0070F2;
    transition: fill .25s linear;
  }
  .gt_link:hover {
    color: #0040B0;
    text-decoration: underline;
  }
  .gt_link:hover svg {
    fill: #0040B0;
  }
  .gt_link:active {
    color: #00144A;
    text-decoration: underline;
  }
  .gt_link:active svg {
    fill: #00144A;
  }
  .gt_link:visited {
    color: #002A86;
    text-decoration: none;
  }
  .gt_link:visited svg {
    fill: #002A86;
  }
  .gt_link:focus {
    outline: .125rem solid #007db8;
    outline-offset: .125rem;
  }
  .gt_link:hover:focus,
  .gt_link:active:focus {
    outline: none;
  }
}

@media (min-width: 1em) {
  .gt_focus:focus {
    outline: .125rem solid #007db8;
    outline-offset: .25rem
  }
  
  .gt_focus:focus:active,
  .gt_focus:focus:hover {
    outline: 0
  }
  .gt_accordion.gt_open:not(:last-child) {
    margin-bottom: 12px;
  }

  .gt_accordion-btn {
    width: 100%;
    position: relative;
    background: radial-gradient(158.17% 654.81% at 0 17.43%, #fbfcfc 0, #f5f6f7 100%);
    background: white;
    padding: 12px 8px;
    border: none;
    border-bottom: 1px solid #D5DADD;
    display: flex;
    align-items: center;
    align-content: center;
  }
  .gt_accordion-btn span {
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-shrink: 0;
  }

  .gt_accordion-btn svg {
    width: 7px;
    height: 12px;
    fill: #0040B0;
    transition: transform .25s linear;
  }
  .gt_open .gt_accordion-btn svg {
    transform: rotate(90deg);
  }
  .gt_content-container {
    position: relative;
  }

  .gt_accordion .gt_content-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .gt_hybrid_m .gt_accordion .gt_content-container,
  .gt_phone .gt_accordion .gt_content-container {
    padding: 12px;
    box-shadow: 0px 10px 30px 0px rgba(34, 54, 73, .25);
    border-radius: 24px;
  }
  .gt_hybrid_m .gt_accordion .gt_last-step .gt_content-container,
  .gt_phone .gt_accordion .gt_last-step .gt_content-container {
    padding: 0;
    box-shadow: none;
  }
  .gt_hybrid_m .gt_accordion .gt_content-container img,
  .gt_phone .gt_accordion .gt_content-container img {
    border-radius: 16px;
    max-width: 220px;
    min-width: auto;
  }
  .gt_accordion .gt_last-step .gt_content-container {
    margin-bottom: 0;
  }
  .gt_hybrid_m .gt_accordion .gt_last-step .gt_content-container,
  .gt_phone .gt_accordion .gt_last-step .gt_content-container {
    margin-top: 0;
  }
  .gt_accordion-text {
    width: 100%;
    margin-bottom: 12px;
  }

  .gt_accordion-content {
    display: none;
    position: relative;
  }

  .gt_accordion.gt_open .gt_accordion-content {
    display: block;
  }
  .gt_hybrid_m .gt_accordion.gt_open .gt_accordion-content,
  .gt_phone .gt_accordion.gt_open .gt_accordion-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gt_last-step .gt_controls,
  .gt_last-step .gt_accordion-text {
    display: none;
  }

  .gt_image,
  .gt_video {
    border: 1px solid #EAECEE;
    min-width: 100%;
    width: 100%;
  }

  .gt_next svg {
    transform: scale(-1, 1);
  }

  .gt_nav:first-child .gt_nav-content {
    opacity: 0;
  }
  .gt_nav.gt_active:first-child .gt_nav-content {
    opacity: 1;
  }
  .gt_nav.gt_active .gt_nav-content {
    overflow: visible;
  }

  .gt_nav-btn {
    background: 0 0;
    border: none;
    padding: 0;
    position: relative;
    margin: 0 12px 0 16px;
    text-align: left;
  }

  .gt_nav-btn h3 {
    transition: color .1s linear;
    color: #000;
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
  }
  .gt_nav-text,
  .gt_nav-heightholdel,
  .gt_accordion-text,
  .gt_accordion-heightholdel {
    color: #223548;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
  }
  .gt_nav-text {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .gt_accordion-btn p {
    color: #000;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    margin-left: 12px;
    text-align: left;
  }
  .gt_controls {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gt_controls p {
    max-width: 150px;
  }
  .gt_container .gt_controls p {
    width: 100%;
    text-align: center;
    color: #223548;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
  }

  .gt_nav-btn:hover h3,
  .gt_nav.gt_active .gt_nav-btn h3 {
    color: #0070F2;
  }

  .gt_nav-wrapper,
  .gt_nav.gt_active {
    position: relative;
  }
  .gt_nav-wrapper::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: #D5DADD;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .gt_nav.gt_active::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background: #0070F2;
    left: 0;
    top: 0;
    pointer-events: none;
    border-radius: 0px 4px 4px 0px;
  }

  .gt_nav-separator {
    height: 32px;
    width: 100%;
  }

  .gt_nav-content {
    position: relative;
    max-height: 0;
    padding: 0 12px 0 16px;
    overflow: hidden;
    transition: max-height .25s linear;
    transition-property: max-height, opacity;
    transition-duration: .25s, .5s;
  }
  .gt_mobile-extra {
    margin-top: 56px;
  }
  .gt_mobile-extra_buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .gt_modal {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    left: 0;
    right: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .9);
    z-index: 2000;
  }

  .gt_close {
    width: 32px;
    height: 32px;
    position: absolute;
    right: -45px;
    top: -45px;
    border: none;
    background: 0 0;
    padding: 0;
  }

  .gt_close svg {
    width: 32px;
    height: 32px;
    fill: #fff;
  }

  .gt_close:hover svg {
    opacity: .75;
  }

  .gt_hide-img img {
    display: none;
  }
  .gt_mobile .gt_content-modal {
    margin-top: 76px;
  }
  .gt_container .gt_desktop {
    display: none;
  }
  .gt_desktop .gt_content-modal {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: rgba(0, 0, 0, .5);
    z-index: 2;
  }
  .gt_phone .gt_desktop .gt_content-modal {
    top: 12px;
    bottom: 12px;
    left: 12px;
    right: 12px;
    border-radius: 16px;
  }

  .gt_content-info {
    width: 475px;
    background: #fff;
    padding: 24px 32px;
    box-shadow: 0px 20px 80px 0px rgba(34, 54, 73, .25);
  }
  .gt_phone .gt_content-info {
    width: calc(100% - 18px);
    padding: 24px 12px;
  }

  .gt_content-info_buttons {
    width: 100%;
    display: flex;
    margin-bottom: 16px;
  }
  .gt_phone .gt_content-info_buttons {
    flex-wrap: wrap;
  }
  .gt_phone .gt_content-info_buttons .gt_button {
    padding: 5.5px 10px;
  }

  .gt_content-info_link {
    display: flex;
  }
  .gt_content-modal_buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .gt_content-modal_buttons .gt_button:not(:last-child) {
    margin-bottom: 12px;
  }
  .gt_mobile-extra_buttons .gt_button:not(:last-child) {
    margin-bottom: 12px;
  }

  .gt_content-info_buttons .gt_button:not(:last-child) {
    margin-right: 16px;
  }
  .gt_phone .gt_content-info_buttons .gt_button:not(:last-child) {
    margin-right: 0;
    margin-bottom: 16px;
  }
  .gt_desktop-extra_buttons .gt_button:not(:last-child) {
    margin-right: 12px;
  }
  .gt_content-modal_link {
    display: flex;
    justify-content: center;
  }

  .gt_enlarge {
    display: none;
    margin-top: 20px;
  }

  [data-type=image] .gt_enlarge {
    display: flex;
  }

  .gt_video-container .gt_image,
  .gt_video-container .gt_video-btn_container {
    display: none;
  }
  .gt_video-btn_container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .gt_video-btn {
    display: block;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    opacity: 0;
    animation: btnFadeIn 1s linear forwards;
  }
  .gt_video-btn:focus {
    outline: .125rem solid #007db8;
    outline-offset: .125rem;
  }
  .gt_video-btn:hover:focus,
  .gt_video-btn:active:focus {
    outline: none;
  }
  @keyframes btnFadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .gt_video-btn svg {
    width: 40px;
    height: 40px;
    fill: #475E75;
  }

  .gt_enlarge svg {
    width: 18px;
    height: 18px;
    margin-left: 8px;
  }


  .gt_desktop-extra {
    width: 100%;
  }
  .gt_desktop-extra > div,
  .gt_desktop-extra_buttons {
    display: flex;
    justify-content: center;
  }
  .gt_desktop-extra h4 {
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #223548;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 24px;
  }
  .gt_desktop-extra2 h4 {
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #223548;
    text-align: center;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  .gt_mobile-extra h4 {
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #223548;
    text-align: center;
    margin-bottom: 20px;
  }
  .gt_mobile .gt_content-modal h3 {
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #223548;
    text-align: center;
    margin-bottom: 20px;
  }
  .gt_content-info h3 {
    font-family: "72 Brand","72 Brand Variable", "Arial", "Helvetica", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    color: #223548;
    margin-bottom: 24px;
  }
  .gt_phone .gt_content-info h3 {
    font-size: 20px;
    line-height: 22px;
  }
}



@media (min-width: 640px) {
  .gt_video-btn svg {
    width: 60px;
    height: 60px;
  }
  .gt_content-container {
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(34, 54, 73, .3);
    padding: 13px;
    border-radius: 8px;
  }
  .gt_phone .gt_content-container {
    border-radius: 24px;
    padding: 12px;
    box-shadow: 0px 10px 30px 0px rgba(34, 54, 73, 0.25);
  }
  .gt_phone .gt_content-container img {
    border-radius: 16px;
    max-width: 100%;
  }
  .gt_mobile-extra h4 {
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  .gt_accordion .gt_content-container {
    margin-bottom: 40px;
  }
  .gt_accordion-text {
    margin-bottom: 20px;
  }
  .gt_mobile .gt_content-modal {
    margin-top: 0;
  }
  .gt_mobile .gt_content-modal h3 {
    margin-bottom: 32px;
  }
  .gt_content-modal_buttons {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }
  .gt_content-modal_buttons .gt_button:not(:last-child) {
    margin-bottom: 0;
    margin-right: 16px;
  }
  .gt_mobile-extra_buttons .gt_button:not(:last-child) {
    margin-bottom: 0;
    margin-right: 12px;
  }
  .gt_mobile-extra_buttons {
    flex-direction: row;
  }
  .gt_container.gt_phone .gt_desktop {
    display: flex;
    justify-content: center;
  }
  .gt_container.gt_phone .gt_mobile {
    display: none;
  }
  .gt_container.gt_phone .col-9 {
    max-width: 320px;
  }
  .gt_hybrid_m .gt_accordion .gt_content-container img {
    max-width: 412px;
  }
}
@media (min-width: 980px) {
  .gt_video-btn svg {
    width: 90px;
    height: 90px;
  }
  .gt_content-container {
    box-shadow: 0px 10px 30px 0px rgba(34, 54, 73, .25);
    padding: 20px;
    border-radius: 12px;
  }
  .gt_desktop-extra2 h4 {
    font-size: 20px;
    line-height: 22px;
  }
  .gt_content-info h3 {
    margin-bottom: 32px;
  }
  .gt_phone .gt_content-info h3 {
    font-size: 24px;
    line-height: 26px;
  }
  .gt_phone .gt_content-info_buttons .gt_button {
    padding: 11px 13px;
  }
  .gt_phone .gt_content-info {
    width: calc(100% - 40px);
    padding: 24px 32px;
  }
  .gt_phone .gt_content-container {
    padding: 20px;
  }
  .gt_phone .gt_desktop .gt_content-modal {
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
  .gt_container.gt_phone .col-9 {
    max-width: 400px;
  }
  .gt_hybrid_m .gt_accordion .gt_content-container img {
    max-width: 275px;
  }
}
@media (min-width: 1280px) {
  .gt_container .gt_desktop {
    display: flex;
  }
  .gt_container .gt_mobile {
    display: none;
  }
  .gt_desktop-extra2 h4 {
    margin-top: 56px;
  }
}
.gt_hybrid_m .gt_accordion-text {
  text-align: center;
}
.gt_hybrid_d .gt_desktop .col-9 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.gt_hybrid_d .gt_desktop .gt_image {
  width: auto;
  min-width: auto;
  max-width: 300px;
  max-height: 600px;
  border-radius: 16px;
}
.gt_hybrid_d .gt_content-info {
  width: calc(100% - 40px);
  padding: 24px 32px;
}
.gt_hybrid_d .gt_content-info_buttons {
  flex-wrap: wrap;
}
.gt_hybrid_d .gt_content-info_buttons .gt_button:not(:last-child) {
  margin-right: 0;
  margin-bottom: 16px;
}
.gt_hybrid_d .gt_content-modal {
  border-radius: 16px;
}
    </style>`;
    this.shadowRoot.innerHTML += `<section class="gt_container"></section>`;
    this.isDevMode = false; // Set to false in production
  }

  connectedCallback() {
    this.initAttributes();
    // tracking?
    this.dispatchEvent(new CustomEvent('tourStarted', {
      detail: { message: 'Tour has started!' },
      bubbles: true,
      composed: true
    }));
    console.log("tourStarted event dispatched");
    this.logEvent('tour-started', 'Tour has started');
    // tracking?
    this.fetchHTML(this.dataConfig, this.urlPrefix);
  }

  initAttributes() {
    this.dataConfig = this.getAttribute("data-config");
    //console.log(this.dataset.config);
    //this.urlPrefix = this.getAttribute("data-url-prefix");
    this.urlPrefix = this.dataConfig.split("/fragments/")[0];

    /*
    Below are additional properties set in the html.
    These are place holders until we understand parent/child communication for inherited config properties.
    */ 
    this.tourTitle = this.getAttribute("data-title");
    this.campaignCode = this.getAttribute("data-campaign-code");
    this.targetUrl = this.getAttribute("data-target-url");
    this.userId = this.getAttribute("data-user-id");

    this.logEvent('attributes-initialized', `Initialized with dataConfig: ${this.dataConfig}, urlPrefix: ${this.urlPrefix}`);
    this.localFlag = this.dataset.localDev;
  }

  logEvent(eventType, message) {
    if (this.isDevMode) {
      console.log(`Event: ${eventType}, \nMessage: ${message}, \nTimestamp: ${new Date().toISOString()}`);
    }
  }

  async fetchHTML(url, urlPrefix) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const html = await response.text();
      this.parseMarkUp(html, urlPrefix);
    } catch (error) {
      console.error("Error fetching HTML:", error);
      this.logEvent('fetch-error', error.toString());
    }
  }

  parseMarkUp(html, urlPrefix) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    console.log("plain markup", tempDiv);

    const elements = tempDiv.querySelectorAll(".product-tour-section, .product-tour-step");
    let currentSection = 0;
    let dataObject = { sections: [] };

    elements.forEach((element) => {
      //console.log(element);

      let childRen = element.children;
      let obj = {};
      Array.from(childRen).forEach( el => {
        let divs = el.querySelectorAll("div");
        let key = divs[0].textContent.trim();
        let value = divs[1].textContent.trim();
        let link = el.querySelector("a");
        if (link) {
          obj[key+"_link"] = link.getAttribute("href");
        }
        if (key === "image") {
          value = divs[1].querySelector("picture");
          if (!!value) {
            let pictureHTML = value.outerHTML;
            pictureHTML = pictureHTML.replace(
              /"\.\/media_/g,
              `"${urlPrefix}/fragments/product-tours/media_`
            );
            let el = document.createElement("div");
            el.innerHTML = pictureHTML;
            let imgPathArray = [];
            let sources = el.querySelectorAll("source");
            sources.forEach( el => {
              imgPathArray.push(el.srcset);
            });
            let imageEl = el.querySelector("img");
            //let imgPath = imageEl.src;
            imgPathArray.push(imageEl.src);
            obj.imgAltText = imageEl.alt;
            obj.imgPathArray = imgPathArray;

            obj.imgPath = imgPathArray[imgPathArray.length - 1];
            //obj.imgPath = imgPathArray[0];
          }
        } else if (value.toLowerCase() === "false") {
          value = false;
        } else if (value.toLowerCase() === "true") {
          value = true;
        }
        obj[key] = value;
      });
      //console.log(obj);

      if (element.classList.contains("product-tour-section")) {
        currentSection++;
        obj.steps = [];
        dataObject.sections.push(obj);
      } else if (element.classList.contains("product-tour-step")) {
        const text = obj.text || "No text provided";
        const imgAltText = obj.imgAltText || "";
        const type = obj.type || "image";
        const imgHybridView = obj.imgHybridView || false;
        const videoPath = obj.videoPath || "";
        const imgPath = obj.imgPath || "";
        const imgPathArray = obj.imgPathArray || [];

        dataObject.sections[dataObject.sections.length - 1].steps.push({
          text,
          "content": {
            type,
            imgPath,
            imgAltText,
            imgHybridView,
            videoPath,

            imgPathArray,
          }
        });
      }
      
    });

    //this.logEvent('data-object-built', JSON.stringify(dataObject, null, 2));

    this.fillConfigObject(dataObject);
    this.buildTour();
  }

  fillConfigObject(data) {
    let configObj = {
      "overview": {
        "startAgainText": "Start tour again", //Usually default
      },
      "tours": [],
    };

    data.sections.forEach( el => {
      //console.log(el);
      if (el.name === "Overview") {
        configObj.overview.name = el.name;

        configObj.overview.text = el.steps[0].text;
        configObj.overview.type = el.steps[0].content.type;
        configObj.overview.imgPath = el.steps[0].content.imgPath;
        configObj.overview.imgPathArray = el.steps[0].content.imgPathArray;
        configObj.overview.imgAltText = el.steps[0].content.imgAltText;
        configObj.overview.imgHybridView = el.steps[0].content.imgHybridView;
        configObj.overview.videoPath = el.steps[0].content.videoPath;

        configObj.overview.bottomCTA1Text = el.cta1_text || "";
        configObj.overview.finalSlideCTA1Text = el.cta1_text || "";
        configObj.overview.bottomCTA1Link = el.cta1_url || "";
        configObj.overview.finalSlideCTA1Link = el.cta1_url || "";

        configObj.overview.bottomCTA2Text = el.cta2_text || "";
        configObj.overview.finalSlideCTA2Text = el.cta2_text || "";
        configObj.overview.bottomCTA2Link = el.cta2_url || "";
        configObj.overview.finalSlideCTA2Link = el.cta2_url || "";

        configObj.overview.bottomText = el.bottomText || "Take the next step and learn.";
        configObj.overview.finalSlideTitle = el.finalSlideTitle || "Ready to take the next step?";
        configObj.overview.ctaText = el.ctaText || "Start the tour";
        configObj.overview.mode = el.mode;
        //configObj.overview.xxx = el.xxx;
      } else {
        configObj.tours.push(el);
      }
    });
    this.config = configObj;
    this.pictureMode = true;
    console.log("resulting config", configObj);
  }

  buildTour() {
    this.v = {
      local: false, // Only for local env (mock SAP object)
      phone: false, // Phone version of Product Tour
      hybrid: false, // Hybrid version of Product Tour (based on desktop, phone should be false in this case)
    };
    switch (this.config.overview.mode) {
      case "phone":
        this.v.phone = true;
        break;
      case "hybrid":
        this.v.hybrid = true;
        break;
      default: break;
    }
    this.v.equalHeight = true;
    this.v.attribute = "Guided Product Tour";
    if (this.localFlag === "true") {
      this.v.local = true;
    }
    if (this.v.local) {
      window.SAP = {
        "InfoGraphics": {
          "createExtendLinkElement": () => {return document.createElement("div")},
          "getExtendLink": () => {return false},
        },
      };
    }
    let container = this.shadowRoot.querySelector(".gt_container");
    if (this.v.phone) {
      container.classList.add("gt_phone");
      this.v.attribute = "Guided Product Tour Phone";
    }
    container.innerHTML = `<a href="#tour-end" class="visible-hidden">Skip the tour</a><div class="py--7">
        <div class="ds--grid">
          <div class="row gt_mobile">
            <div class="col-12 gt_mobile-main">
            </div>
            <div class="col-12 gt_mobile-extra">
            </div>
          </div>

          <div class="row gt_desktop">
            <div class="col-3">
              <div></div>
            </div>
            <div class="col-9" data-type="image">
              <div class="gt_content-container"></div>
              <div class="gt_desktop-extra">
                <div class="">
                  <a href="javascript:void(0)" class="gt_enlarge gt_button gt_button-tetriary" aria-label="Enlarge screenshot"
                    data-analytics-aa-tracking="true" data-analytics-aa-region="Body" data-analytics-aa-mediatitle="${this.v.attribute} (desktop)" data-analytics-aa-mediatype="Demo" data-analytics-aa-linkname="Enlarge screenshot" data-analytics-aa-linktitle="Enlarge screenshot">
                    Enlarge
                    <svg width="12" height="12" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.375 14.8018C7.36719 14.8018 6.41797 14.6143 5.52734 14.2393C4.63672 13.8643 3.85156 13.3486 3.17188 12.6924C2.51562 12.0361 2 11.2627 1.625 10.3721C1.25 9.48145 1.0625 8.52051 1.0625 7.48926C1.0625 6.45801 1.25 5.49707 1.625 4.60645C2 3.71582 2.51562 2.94238 3.17188 2.28613C3.85156 1.62988 4.63672 1.11426 5.52734 0.739258C6.41797 0.364258 7.36719 0.176758 8.375 0.176758C9.40625 0.176758 10.3672 0.364258 11.2578 0.739258C12.1484 1.11426 12.9219 1.62988 13.5781 2.28613C14.2344 2.94238 14.75 3.71582 15.125 4.60645C15.5 5.49707 15.6875 6.45801 15.6875 7.48926C15.6875 8.35645 15.5469 9.17676 15.2656 9.9502C15.0078 10.7002 14.6445 11.3799 14.1758 11.9893L17.6914 15.5049C17.8555 15.6689 17.9375 15.8799 17.9375 16.1377C17.9375 16.3955 17.8555 16.6182 17.6914 16.8057C17.5273 16.9697 17.3164 17.0518 17.0586 17.0518C16.8008 17.0518 16.5898 16.9697 16.4258 16.8057L12.9102 13.29C12.3008 13.7588 11.6094 14.1338 10.8359 14.415C10.0625 14.6729 9.24219 14.8018 8.375 14.8018ZM8.375 13.0088C9.14844 13.0088 9.86328 12.8682 10.5195 12.5869C11.1992 12.3057 11.7852 11.9189 12.2773 11.4268C12.793 10.9111 13.1914 10.3252 13.4727 9.66895C13.7539 8.98926 13.8945 8.2627 13.8945 7.48926C13.8945 6.71582 13.7539 6.00098 13.4727 5.34473C13.1914 4.66504 12.793 4.0791 12.2773 3.58691C11.7852 3.07129 11.1992 2.67285 10.5195 2.3916C9.86328 2.11035 9.14844 1.96973 8.375 1.96973C7.60156 1.96973 6.875 2.11035 6.19531 2.3916C5.53906 2.67285 4.96484 3.07129 4.47266 3.58691C3.98047 4.0791 3.59375 4.66504 3.3125 5.34473C3.03125 6.00098 2.89062 6.71582 2.89062 7.48926C2.89062 8.2627 3.03125 8.98926 3.3125 9.66895C3.59375 10.3252 3.98047 10.9111 4.47266 11.4268C4.96484 11.9189 5.53906 12.3057 6.19531 12.5869C6.875 12.8682 7.60156 13.0088 8.375 13.0088ZM5.35156 8.40332C5.09375 8.40332 4.87109 8.32129 4.68359 8.15723C4.51953 7.96973 4.4375 7.74707 4.4375 7.48926C4.4375 7.23145 4.51953 7.02051 4.68359 6.85645C4.87109 6.66895 5.09375 6.5752 5.35156 6.5752H7.49609V4.46582C7.49609 4.20801 7.57812 3.99707 7.74219 3.83301C7.90625 3.64551 8.11719 3.55176 8.375 3.55176C8.63281 3.55176 8.84375 3.64551 9.00781 3.83301C9.19531 3.99707 9.28906 4.20801 9.28906 4.46582V6.5752H11.4336C11.6914 6.5752 11.9023 6.66895 12.0664 6.85645C12.2305 7.02051 12.3125 7.23145 12.3125 7.48926C12.3125 7.74707 12.2305 7.96973 12.0664 8.15723C11.9023 8.32129 11.6914 8.40332 11.4336 8.40332H9.28906V10.5127C9.28906 10.7705 9.19531 10.9932 9.00781 11.1807C8.84375 11.3447 8.63281 11.4268 8.375 11.4268C8.11719 11.4268 7.90625 11.3447 7.74219 11.1807C7.57812 10.9932 7.49609 10.7705 7.49609 10.5127V8.40332H5.35156Z" fill="#0040B0"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div><div class="" id="tour-end"></div>`;
    this.buildMobile(container);
    this.buildDesktop(container);
    this.setupEqualDescription();
  }

  buildMobile(sourceEl) {
    let accordionClick_shadow = this.accordionClick.bind(this);
    let advancePath_shadow = this.advancePath.bind(this);
    let changeStep_shadow = this.changeStep.bind(this);
    let container = sourceEl.querySelector(".gt_mobile-main");
    let mobileExtra = sourceEl.querySelector(".gt_mobile-extra");
    let overview = document.createElement("div");
    overview.className = "gt_accordion gt_open";
    let btn = document.createElement("button");
    btn.setAttribute("aria-label", this.config.overview.name);

    btn.setAttribute("data-analytics-aa-tracking", "true");
    btn.setAttribute("data-analytics-aa-region", "Body");
    btn.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (mobile)"));
    btn.setAttribute("data-analytics-aa-mediatype", "Demo");
    btn.setAttribute("data-analytics-aa-linkname", this.config.overview.name);
    btn.setAttribute("data-analytics-aa-linktitle", this.config.overview.name);

    btn.className = "gt_accordion-btn";
    btn.innerHTML = `<span class=""><svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/></svg></span>`;
    btn.innerHTML += '<p class="">' + (this.config.overview.name || "No name for overview") + '</p>';
    btn.addEventListener("click", function() {
      accordionClick_shadow(btn, false);
    });
    overview.append(btn);
    let content = document.createElement("div");
    content.className = "gt_accordion-content";
    let innerData = `<div class="gt_content-container">
      <img class="gt_image" src="${(this.config.overview.imgPath)}" alt="${(this.config.overview.imgAltText)}">
      </div>`;
    let pictureInnerData = `<div class="gt_content-container">
      <picture>
        <source type="image/webp" srcset="${(this.config.overview.imgPathArray[0])}" media="(min-width: 640px)">
        <source type="image/webp" srcset="${(this.config.overview.imgPathArray[1])}">
        <source type="image/png" srcset="${(this.config.overview.imgPathArray[2])}" media="(min-width: 640px)">
        <img loading="lazy" class="gt_image" alt="${(this.config.overview.imgAltText)}" src="${(this.config.overview.imgPathArray[3])}">
      </picture>
      </div>`;
    if (this.pictureMode) {
      innerData = pictureInnerData;
    }
    if (this.config.overview.imgHybridView) {
      sourceEl.classList.add("gt_hybrid_m");
    }

    innerData += `<p class="gt_accordion-text">
        ${(this.config.overview.text || "No text for overview")}
      </p>
      <div class="" style="width: 100%;">
        <button class="gt_link gt_start"
          aria-label="${this.config.overview.ctaText}"
          href="javascript:void(0)"

          data-analytics-aa-tracking="true"
          data-analytics-aa-region="Body"
          data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
          data-analytics-aa-mediatype="Demo"
          data-analytics-aa-linkname="${this.config.overview.ctaText}"
          data-analytics-aa-linktitle="${this.config.overview.name}"
        >
          ${(this.config.overview.ctaText || "No text for CTA")}
          <span class="gt_link-icon gt_link-icon-right">
            <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/>
            </svg>
          </span>
        </button>
      </div>`;

    content.innerHTML = innerData;
    let contentContainer = content.querySelector(".gt_content-container");
    contentContainer.dataset.type = "image";
    if (this.config.overview.type === "video") {
      contentContainer.dataset.type = "video";
      this.setupVideoStep(contentContainer, this.config.overview.videoPath, false);
    }
    content.querySelector(".gt_start").addEventListener("click", function() {
      advancePath_shadow(container, ".gt_open + .gt_accordion > button");
    });
    overview.append(content);
    this.v.preloadArr = [];

    let tours = [];
    this.config.tours.forEach((tour, index) => {
      tour.steps.forEach( el => {
        this.v.preloadArr.push({ path: el.content.imgPath, alt: el.content.imgAltText });
      });
      let lastTour = (index + 1 === this.config.tours.length);
      let defaultInfo = tour.steps[0];
      let item = document.createElement("div");
      item.className = "gt_accordion";
      item.dataset.step = "1";
      let btn = document.createElement("button");
      btn.setAttribute("aria-label", tour.name);

      btn.setAttribute("data-analytics-aa-tracking", "true");
      btn.setAttribute("data-analytics-aa-region", "Body");
      btn.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (mobile)"));
      btn.setAttribute("data-analytics-aa-mediatype", "Demo");
      btn.setAttribute("data-analytics-aa-linkname", tour.name);
      btn.setAttribute("data-analytics-aa-linktitle", tour.name);

      btn.className = "gt_accordion-btn";
      btn.innerHTML = `<span class=""><svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/></svg></span>`;
      btn.innerHTML += '<p class="">' + (tour.name || "No name for this 'Tour'") + '</p>';
      btn.addEventListener("click", function() {
        accordionClick_shadow(btn, defaultInfo);
      });
      item.append(btn);
      let content = document.createElement("div");
      content.className = "gt_accordion-content";
      let innerData = `<div class="gt_content-container"></div>`;
      innerData += `<p class="gt_accordion-text">
          ${tour.steps[0].text}
        </p><span class="gt_accordion-heightholdel" data-tour="${index}"
        style="position:absolute;pointer-events:none;visibility:hidden;opacity:0;padding:0 0px 0 0px;width:100%;left:0;bottom:42px;"></span>
        <div class="gt_controls">
          <button class="gt_button-icon gt_previous"
            aria-label="Previous Step"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="Previous Step"
            data-analytics-aa-linktitle="${tour.name}"
          >
            <svg viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.475 12.125C6.25 12.125 6.025 12.0462 5.85625 11.8775L0.90625 7.15249C0.72625 6.98374 0.625 6.74749 0.625 6.49999C0.625 6.25249 0.72625 6.01624 0.90625 5.84749L5.85625 1.12249C6.21625 0.773743 6.79 0.796243 7.1275 1.15624C7.47625 1.51624 7.45375 2.08999 7.09375 2.42749L2.83 6.49999L7.09375 10.5725C7.45375 10.9212 7.465 11.4837 7.1275 11.8437C6.9475 12.0237 6.71125 12.125 6.475 12.125Z"/>
            </svg>
          </button>
          <p class="">
            Step <span>1</span> of ${tour.steps.length + lastTour}
          </p>
          <button class="gt_button-icon gt_next"
            aria-label="Next Step"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="Next Step"
            data-analytics-aa-linktitle="${tour.name}"
          >
            <svg viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.475 12.125C6.25 12.125 6.025 12.0462 5.85625 11.8775L0.90625 7.15249C0.72625 6.98374 0.625 6.74749 0.625 6.49999C0.625 6.25249 0.72625 6.01624 0.90625 5.84749L5.85625 1.12249C6.21625 0.773743 6.79 0.796243 7.1275 1.15624C7.47625 1.51624 7.45375 2.08999 7.09375 2.42749L2.83 6.49999L7.09375 10.5725C7.45375 10.9212 7.465 11.4837 7.1275 11.8437C6.9475 12.0237 6.71125 12.125 6.475 12.125Z"/>
            </svg>
          </button>
        </div>`;

      content.innerHTML = innerData;
      content.querySelector(".gt_previous").addEventListener("click", function() {
        changeStep_shadow(container, tour, item, false, tour.steps.length, lastTour);
      });
      content.querySelector(".gt_next").addEventListener("click", function() {
        changeStep_shadow(container, tour, item, true, tour.steps.length, lastTour);
      });
      item.append(content);
      tours.push(item);
    });

    container.innerHTML = "";
    container.append(overview);
    tours.forEach( el => {
      container.append(el);
    });

    //mobileExtra
    if (this.config.overview.bottomText) {
      let bottomText = document.createElement("h4");
      bottomText.className = "";
      bottomText.innerHTML = this.config.overview.bottomText;
      mobileExtra.append(bottomText);
    }
    let bottomCTAContainer = document.createElement("div");
    bottomCTAContainer.className = "gt_mobile-extra_buttons";
    if (this.config.overview.bottomCTA1Text && this.config.overview.bottomCTA1Link) {
      let cta1 = document.createElement("a");
      cta1.className = "gt_button gt_button-primary";
      let cta1_transformed = window.SAP.InfoGraphics.createExtendLinkElement('requestDemo_M');
      cta1_transformed.className += " gt_button gt_button-primary";

      cta1.innerHTML = this.config.overview.bottomCTA1Text;
      cta1.setAttribute("href", this.config.overview.bottomCTA1Link);

      cta1.setAttribute("data-analytics-aa-destinationurl", this.config.overview.bottomCTA1Link);

      cta1.setAttribute("aria-label", this.config.overview.bottomCTA1Text);

      cta1.setAttribute("data-analytics-aa-tracking", "true");
      cta1.setAttribute("data-analytics-aa-region", "Body");
      cta1.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (mobile)"));
      cta1.setAttribute("data-analytics-aa-mediatype", "Demo");
      cta1.setAttribute("data-analytics-aa-linkname", this.config.overview.bottomCTA1Text);
      cta1.setAttribute("data-analytics-aa-linktitle", this.config.overview.bottomCTA1Text);
      
      if (window.SAP.InfoGraphics.getExtendLink('requestDemo_M')) {
        bottomCTAContainer.append(cta1_transformed);
      } else {
        bottomCTAContainer.append(cta1);
      }
    }
    if (this.config.overview.bottomCTA2Text && this.config.overview.bottomCTA2Link) {
      let cta2 = document.createElement("a");
      cta2.className = "gt_button gt_button-secondary";
      let cta2_transformed = window.SAP.InfoGraphics.createExtendLinkElement('visitProduct_M');
      cta2_transformed.className += " gt_button gt_button-secondary";

      cta2.innerHTML = this.config.overview.bottomCTA2Text;
      cta2.setAttribute("href", this.config.overview.bottomCTA2Link);

      cta2.setAttribute("data-analytics-aa-destinationurl", this.config.overview.bottomCTA2Link);

      cta2.setAttribute("aria-label", this.config.overview.bottomCTA2Text);

      cta2.setAttribute("data-analytics-aa-tracking", "true");
      cta2.setAttribute("data-analytics-aa-region", "Body");
      cta2.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (mobile)"));
      cta2.setAttribute("data-analytics-aa-mediatype", "Demo");
      cta2.setAttribute("data-analytics-aa-linkname", this.config.overview.bottomCTA2Text);
      cta2.setAttribute("data-analytics-aa-linktitle", this.config.overview.bottomCTA2Text);

      if (window.SAP.InfoGraphics.getExtendLink('visitProduct_M')) {
        bottomCTAContainer.append(cta2_transformed);
      } else {
        bottomCTAContainer.append(cta2);
      }
    }
    mobileExtra.append(bottomCTAContainer);
  }

  buildDesktop(sourceEl) {
    let escapeEnlargeModal_shadow = this.escapeEnlargeModal.bind(this);
    let advancePath_shadow = this.advancePath.bind(this);
    let navClick_shadow = this.navClick.bind(this);
    let changeStepNav_shadow = this.changeStepNav.bind(this);
    let wrapper = sourceEl.querySelector(".gt_desktop");
    let col3 = wrapper.querySelector(".col-3");
    col3.innerHTML = `<div class="gt_nav-wrapper"></div>`;
    let container = wrapper.querySelector(".gt_nav-wrapper");
    let contentContainer = wrapper.querySelector(".gt_content-container");
    let desktopExtra = wrapper.querySelector(".gt_desktop-extra");
    let col12 = document.createElement("div");
    col12.className = "col-12 gt_desktop-extra2";
    wrapper.append(col12);
    let enlargeBtn = wrapper.querySelector(".gt_enlarge");

    let overview = document.createElement("div");
    overview.className = "gt_nav gt_active";
    let btn = document.createElement("button");
    btn.setAttribute("aria-label", this.config.overview.name);

    btn.setAttribute("data-analytics-aa-tracking", "true");
    btn.setAttribute("data-analytics-aa-region", "Body");
    btn.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (desktop)"));
    btn.setAttribute("data-analytics-aa-mediatype", "Demo");
    btn.setAttribute("data-analytics-aa-linkname", this.config.overview.name);
    btn.setAttribute("data-analytics-aa-linktitle", this.config.overview.name);

    btn.className = "gt_focus gt_nav-btn";
    let text = "<h3 class='m-0'>" + (this.config.overview.name || "No name for overview") + "</h3>";
    btn.innerHTML = text;

    btn.addEventListener("click", function() {
      navClick_shadow(btn, false, contentContainer);
    });
    overview.append(btn);
    let content = document.createElement("div");
    content.className = "gt_nav-content";
    content.style.maxHeight = "500px";
    let innerData = `<p class="gt_nav-text">
        ${(this.config.overview.text || "No text for overview")}
      </p>
      <div class="">
        <button class="gt_link gt_start"
          aria-label="${this.config.overview.ctaText}"
          href="javascript:void(0)"

          data-analytics-aa-tracking="true"
          data-analytics-aa-region="Body"
          data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
          data-analytics-aa-mediatype="Demo"
          data-analytics-aa-linkname="${this.config.overview.ctaText}"
          data-analytics-aa-linktitle="${this.config.overview.name}"
        >
          ${(this.config.overview.ctaText || "No text for CTA")}
          <span class="gt_link-icon gt_link-icon-right">
            <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/>
            </svg>
          </span>
        </button>
      </div>`;

    content.innerHTML = innerData;
    content.querySelector(".gt_start").addEventListener("click", function() {
      advancePath_shadow(container, ".gt_active + .gt_nav-separator + .gt_nav > button");
    });
    overview.append(content);
    contentContainer.innerHTML = '<img class="gt_image" src="' +
      (this.config.overview.imgPath) + '" alt="' + (this.config.overview.imgAltText) +
      '">';
    let pictureInnerData = `<picture>
        <source type="image/webp" srcset="${(this.config.overview.imgPathArray[0])}" media="(min-width: 640px)">
        <source type="image/webp" srcset="${(this.config.overview.imgPathArray[1])}">
        <source type="image/png" srcset="${(this.config.overview.imgPathArray[2])}" media="(min-width: 640px)">
        <img loading="lazy" class="gt_image" alt="${(this.config.overview.imgAltText)}" src="${(this.config.overview.imgPathArray[3])}">
      </picture>`;
    if (this.pictureMode) {
      contentContainer.innerHTML = pictureInnerData;
    }
    contentContainer.dataset.type = "image";
    if (this.config.overview.type === "video") {
      contentContainer.dataset.type = "video";
      this.setupVideoStep(contentContainer, this.config.overview.videoPath, true);
    }
    if (this.config.overview.imgHybridView) {
      sourceEl.classList.add("gt_hybrid_d");
    }

    let tours = [];
    this.config.tours.forEach((tour, index) => {
      let lastTour = (index + 1 === this.config.tours.length);
      let defaultInfo = tour.steps[0];
      let item = document.createElement("div");
      item.className = "gt_nav";
      item.dataset.step = "1";
      let btn = document.createElement("button");
      btn.setAttribute("aria-label", tour.name);

      btn.setAttribute("data-analytics-aa-tracking", "true");
      btn.setAttribute("data-analytics-aa-region", "Body");
      btn.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (desktop)"));
      btn.setAttribute("data-analytics-aa-mediatype", "Demo");
      btn.setAttribute("data-analytics-aa-linkname", tour.name);
      btn.setAttribute("data-analytics-aa-linktitle", tour.name);

      btn.className = "gt_focus gt_nav-btn";
      let text = "<h3 class='m-0'>" + (tour.name || "No name for this 'Tour'") + "</h3>";
      btn.innerHTML = text;

      btn.addEventListener("click", function() {
        navClick_shadow(btn, defaultInfo, contentContainer);
      });
      item.append(btn);
      let content = document.createElement("div");
      content.className = "gt_nav-content";
      let innerData = `<p class="gt_nav-text">
          ${tour.steps[0].text}
        </p><span class="gt_nav-heightholdel" data-tour="${index}"
          style="position:absolute;pointer-events:none;visibility:hidden;opacity:0;padding:0 12px 0 16px;width:100%;left:0;top:0;"></span>
        <div class="gt_controls">
          <button class="gt_button-icon gt_previous"
            aria-label="Previous Step"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="Previous Step"
            data-analytics-aa-linktitle="${tour.name}"
            disabled
          >
            <svg viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.475 12.125C6.25 12.125 6.025 12.0462 5.85625 11.8775L0.90625 7.15249C0.72625 6.98374 0.625 6.74749 0.625 6.49999C0.625 6.25249 0.72625 6.01624 0.90625 5.84749L5.85625 1.12249C6.21625 0.773743 6.79 0.796243 7.1275 1.15624C7.47625 1.51624 7.45375 2.08999 7.09375 2.42749L2.83 6.49999L7.09375 10.5725C7.45375 10.9212 7.465 11.4837 7.1275 11.8437C6.9475 12.0237 6.71125 12.125 6.475 12.125Z"/>
            </svg>
          </button>
          <p class="">
            Step <span>1</span> of ${tour.steps.length + lastTour}
          </p>
          <button class="gt_button-icon gt_next"
            aria-label="Next Step"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="Next Step"
            data-analytics-aa-linktitle="${tour.name}"
            disabled
          >
            <svg viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.475 12.125C6.25 12.125 6.025 12.0462 5.85625 11.8775L0.90625 7.15249C0.72625 6.98374 0.625 6.74749 0.625 6.49999C0.625 6.25249 0.72625 6.01624 0.90625 5.84749L5.85625 1.12249C6.21625 0.773743 6.79 0.796243 7.1275 1.15624C7.47625 1.51624 7.45375 2.08999 7.09375 2.42749L2.83 6.49999L7.09375 10.5725C7.45375 10.9212 7.465 11.4837 7.1275 11.8437C6.9475 12.0237 6.71125 12.125 6.475 12.125Z"/>
            </svg>
          </button>
        </div>`;

      content.innerHTML = innerData;
      content.querySelector(".gt_previous").addEventListener("click", function() {
        changeStepNav_shadow(container, tour, item, false, tour.steps.length, lastTour, contentContainer);
      });
      content.querySelector(".gt_next").addEventListener("click", function() {
        changeStepNav_shadow(container, tour, item, true, tour.steps.length, lastTour, contentContainer);
      });
      item.append(content);
      tours.push(item);
    });

    container.innerHTML = "";
    container.append(overview);
    tours.forEach( el => {
      let separator = document.createElement("div");
      separator.className = "gt_nav-separator";
      container.append(separator);
      container.append(el);
    });

    let v_shadow = this.v;
    enlargeBtn.addEventListener("click", function() {
      enlargeBtn.blur();
      document.addEventListener('keydown', escapeEnlargeModal_shadow);
      if (contentContainer.dataset.type = "image") {
        let container = document.createElement("div");
        container.className = "gt_modal";
        if (v_shadow.phone) {
          container.classList.add("gt_phone");
        }
        let flag = sourceEl.classList.contains("gt_hybrid_d")
        if (v_shadow.hybrid && flag) {
          container.classList.add("gt_hybrid");
        }
        let wrapper = document.createElement("div");
        wrapper.setAttribute("style", "position:relative;")
        wrapper.innerHTML = `<button class="gt_close"
          aria-label="Close"

          data-analytics-aa-tracking="true"
          data-analytics-aa-region="Body"
          data-analytics-aa-mediatitle="${v_shadow.attribute} (desktop)"
          data-analytics-aa-mediatype="Demo"
          data-analytics-aa-linkname="Close"
          data-analytics-aa-linktitle="Close"
        >
          <svg class="" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M31.75 3.4225L28.5775 0.25L16 12.8275L3.4225 0.25L0.25 3.4225L12.8275 16L0.25 28.5775L3.4225 31.75L16 19.1725L28.5775 31.75L31.75 28.5775L19.1725 16L31.75 3.4225Z"/></svg>
        </button>`;
        wrapper.innerHTML += contentContainer.innerHTML;
        let btn = wrapper.querySelector("button");
        btn.addEventListener("click", function() {
          container.remove();
          document.removeEventListener('keydown', escapeEnlargeModal_shadow);
        });
        let style = document.createElement("style");
        style.innerHTML = `.gt_modal {
          display: flex;justify-content: center;align-items: center;align-content: center;
          left: 0;right: 0;position: fixed;top: 0;bottom: 0;
          background: rgba(0, 0, 0, .9);z-index: 2000;
        }
        .gt_modal img {min-width: auto;max-width: 80vw;max-height: 80vh;width: 100%;border: none;display: block;}
        .gt_hybrid.gt_modal img,.gt_phone.gt_modal img {max-width: 414px;}
        .gt_close {width: 32px;height: 32px;position: absolute;right: -45px;top: -45px;border: none;background: 0 0;padding: 0;cursor: pointer;}
        .gt_close svg {width: 32px;height: 32px;fill: #fff;}
        .gt_close:hover svg {opacity: .75;}
        @media (min-width: 1280px) {.gt_modal img {max-width: 1120px;}}
        @media (min-width: 1600px) {.gt_modal img {max-width: 1420px;}}`;
        container.append(style);
        container.append(wrapper);
        document.body.append(container);
      } else {

      }
    });

    //desktopExtra
    if (this.config.overview.bottomText) {
      let bottomText = document.createElement("h4");
      bottomText.innerHTML = this.config.overview.bottomText;
      if (this.v.phone) {
        bottomText.className = "gt_title";
        col12.append(bottomText);
      } else {
        desktopExtra.append(bottomText);
      }
    }
    let bottomCTAContainer = document.createElement("div");
    bottomCTAContainer.className = "gt_desktop-extra_buttons";
    if (this.config.overview.bottomCTA1Text && this.config.overview.bottomCTA1Link) {
      let cta1 = document.createElement("a");
      cta1.className = "gt_button gt_button-primary";
      let cta1_transformed = window.SAP.InfoGraphics.createExtendLinkElement('requestDemo_D');
      cta1_transformed.className += " gt_button gt_button-primary";

      cta1.innerHTML = this.config.overview.bottomCTA1Text;
      cta1.setAttribute("href", this.config.overview.bottomCTA1Link);

      cta1.setAttribute("data-analytics-aa-destinationurl", this.config.overview.bottomCTA1Link);

      cta1.setAttribute("aria-label", this.config.overview.bottomCTA1Text);

      cta1.setAttribute("data-analytics-aa-tracking", "true");
      cta1.setAttribute("data-analytics-aa-region", "Body");
      cta1.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (desktop)"));
      cta1.setAttribute("data-analytics-aa-mediatype", "Demo");
      cta1.setAttribute("data-analytics-aa-linkname", this.config.overview.bottomCTA1Text);
      cta1.setAttribute("data-analytics-aa-linktitle", this.config.overview.bottomCTA1Text);

      if (window.SAP.InfoGraphics.getExtendLink('requestDemo_D')) {
        bottomCTAContainer.append(cta1_transformed);
      } else {
        bottomCTAContainer.append(cta1);
      }
    }
    if (this.config.overview.bottomCTA2Text && this.config.overview.bottomCTA2Link) {
      let cta2 = document.createElement("a");
      cta2.className = "gt_button gt_button-secondary";
      let cta2_transformed = window.SAP.InfoGraphics.createExtendLinkElement('visitProduct_D');
      cta2_transformed.className += " gt_button gt_button-secondary";

      cta2.innerHTML = this.config.overview.bottomCTA2Text;
      cta2.setAttribute("href", this.config.overview.bottomCTA2Link);

      cta2.setAttribute("data-analytics-aa-destinationurl", this.config.overview.bottomCTA2Link);

      cta2.setAttribute("aria-label", this.config.overview.bottomCTA2Text);

      cta2.setAttribute("data-analytics-aa-tracking", "true");
      cta2.setAttribute("data-analytics-aa-region", "Body");
      cta2.setAttribute("data-analytics-aa-mediatitle", (this.v.attribute + " (desktop)"));
      cta2.setAttribute("data-analytics-aa-mediatype", "Demo");
      cta2.setAttribute("data-analytics-aa-linkname", this.config.overview.bottomCTA2Text);
      cta2.setAttribute("data-analytics-aa-linktitle", this.config.overview.bottomCTA2Text);

      if (window.SAP.InfoGraphics.getExtendLink('visitProduct_D')) {
        bottomCTAContainer.append(cta2_transformed);
      } else {
        bottomCTAContainer.append(cta2);
      }
    }
    if (this.v.phone) {
      col12.append(bottomCTAContainer);
    } else {
      desktopExtra.append(bottomCTAContainer);
    }
  }

  escapeEnlargeModal(e) {
    // Escape 27
    if (e.which === 27 || e.key === "Escape") {
      let enlargeModalCloseBtn = document.querySelector('.gt_modal .gt_close');
      !!enlargeModalCloseBtn && enlargeModalCloseBtn.click();
    }
  }

  accordionClick(btn, defaultInfo) {
    let openedAccordion = this.shadowRoot.querySelector(".gt_accordion.gt_open");
    if (!!openedAccordion) {
      this.resetAccordion(openedAccordion);
      if (openedAccordion == btn.parentElement) {
        openedAccordion.closest(".gt_container").classList.remove("gt_hybrid_m");
        return;
      }
    }
    this.setupAccordion(btn.parentElement, defaultInfo);
  }

  resetAccordion(accordion) {
    let contentContainer = accordion.querySelectorAll(".gt_content-container");
    this.removeExtraElements(contentContainer[0]);

    let mobileExtra = accordion.closest(".gt_mobile").querySelector(".gt_mobile-extra");
    mobileExtra.classList.remove("d-none");
    accordion.classList.remove("gt_open");
    contentContainer.forEach( el => {
      if (accordion.dataset.step !== undefined) {
        el.innerHTML = "";
        el.parentElement.classList.remove("gt_last-step", "gt_hide-img");
      }
    });
  };

  setupAccordion(accordion, defaultInfo) {
    // tracking?
    let sectionName = accordion.querySelector(".gt_accordion-btn").getAttribute("aria-label");
    this.dispatchEvent(new CustomEvent('accordionHeaderClicked', {
      detail: { sectionName },
      bubbles: true,
      composed: true
    }));
    console.log("MOBILE-accordion-header-opened event dispatched");
    this.logEvent('MOBILE-accordion-header-opened', `Accordion header opened: ${sectionName}`);
    // tracking?
    let hybridFlag = false;
    let contentContainer = accordion.querySelector(".gt_content-container");
    this.removeExtraElements(contentContainer);
    if (defaultInfo) {
      accordion.dataset.step = "1";
      accordion.querySelector(".gt_next").removeAttribute("disabled");
      accordion.querySelector(".gt_controls p span").innerHTML = "1";
      accordion.querySelector(".gt_accordion-text").innerHTML = defaultInfo.text;

      contentContainer.innerHTML = '<img class="gt_image" src="' + (defaultInfo.content.imgPath) + '" alt="' + (defaultInfo.content.imgAltText) + '">';
      let pictureInnerData = `<picture>
          <source type="image/webp" srcset="${(defaultInfo.content.imgPathArray[0])}" media="(min-width: 640px)">
          <source type="image/webp" srcset="${(defaultInfo.content.imgPathArray[1])}">
          <source type="image/png" srcset="${(defaultInfo.content.imgPathArray[2])}" media="(min-width: 640px)">
          <img loading="lazy" class="gt_image" alt="${(defaultInfo.content.imgAltText)}" src="${(defaultInfo.content.imgPathArray[3])}">
        </picture>`;
      if (this.pictureMode) {
        contentContainer.innerHTML = pictureInnerData;
      }
      if (defaultInfo.content.type === "image") {
        contentContainer.dataset.type = "image";
      } else if (defaultInfo.content.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, defaultInfo.content.videoPath, false);
      }
      hybridFlag = defaultInfo.content.imgHybridView;
    } else {
      if (this.config.overview.type === "image") {
        contentContainer.dataset.type = "image";
      } else if (this.config.overview.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, this.config.overview.videoPath, false);
      }
      hybridFlag = this.config.overview.imgHybridView;
    }
    let sourceEl = accordion.closest(".gt_container");
    if (hybridFlag) {
      sourceEl.classList.add("gt_hybrid_m");
    } else {
      sourceEl.classList.remove("gt_hybrid_m");
    }
    accordion.classList.add("gt_open");
    let content = accordion.querySelector(".gt_accordion-content");
    this.setEqualDescription(content);
    // let height = 0;
    // content.childNodes.forEach((el,index) => {
    //   height += el.offsetHeight;
    //   if (index === 0) {
    //     el.style.minHeight = height + "px";
    //   }
    // });
    // height += 20 + 24 + 24; // top M 1st el Mb 2nd el Mb
    // content.style.maxHeight = height + "px";
    //content.style.maxHeight = 10000 + "px";
  };

  navClick(btn, defaultInfo, contentContainer) {
    btn.blur();
    let openedNav = this.shadowRoot.querySelector(".gt_nav.gt_active");
    if (!!openedNav) {
      let sameNavFlag = openedNav == btn.parentElement;
      this.resetNav(openedNav, contentContainer, !sameNavFlag);
      if (sameNavFlag) {
        return;
      }
    }
    this.setupNav(btn.parentElement, defaultInfo, contentContainer);
  }

  resetNav(nav, contentContainer, skipImageChange) {
    this.removeExtraElements(contentContainer);
    this.removeFinalStep(contentContainer);
    let btns = nav.querySelectorAll(".gt_start, .gt_next, .gt_previous");
    btns.forEach( el => {
      el.setAttribute("disabled", "disabled");
    });
    if (this.config.overview.type === "image") {
      contentContainer.dataset.type = "image";
      contentContainer.parentElement.dataset.type = "image";
    } else if (this.config.overview.type === "video") {
      contentContainer.dataset.type = "video";
      this.setupVideoStep(contentContainer, this.config.overview.videoPath, true);
    }
    this.changeImage(contentContainer, this.config.overview.imgPathArray, this.config.overview.imgPath, this.config.overview.imgAltText, this.config.overview.imgHybridView, "_d", skipImageChange);
    let desktopExtra = nav.closest(".gt_desktop").querySelector(".gt_desktop-extra");
    desktopExtra.classList.remove("d-none");
    let desktopExtra2 = nav.closest(".gt_desktop").querySelector(".gt_desktop-extra2");
    if (this.v.phone) {
      desktopExtra2.classList.remove("d-none");
    }
    nav.classList.remove("gt_active");
    let navContent = nav.querySelector(".gt_nav-content");
    navContent.removeAttribute("style");
  };

  setupNav(nav, defaultInfo, contentContainer) {
    // tracking?
    let sectionName = nav.querySelector(".gt_nav-btn").getAttribute("aria-label");
    this.dispatchEvent(new CustomEvent('accordionHeaderClicked', {
      detail: { sectionName },
      bubbles: true,
      composed: true
    }));
    console.log("DESKTOP-accordion-header-opened event dispatched");
    this.logEvent('DESKTOP-accordion-header-opened', `Accordion header opened: ${sectionName}`);
    // tracking?
    this.removeExtraElements(contentContainer);
    let btns = nav.querySelectorAll(".gt_start, .gt_next, .gt_previous");
    btns.forEach( el => {
      el.removeAttribute("disabled");
    });
    if (defaultInfo) {
      nav.dataset.step = "1";
      nav.querySelector(".gt_controls p span").innerHTML = "1";
      nav.querySelector(".gt_nav-text").innerHTML = defaultInfo.text;

      if (defaultInfo.content.type === "image") {
        contentContainer.dataset.type = "image";
        contentContainer.parentElement.dataset.type = "image";
      } else if (defaultInfo.content.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, defaultInfo.content.videoPath, true);
      }
      this.changeImage(contentContainer, defaultInfo.content.imgPathArray, defaultInfo.content.imgPath, defaultInfo.content.imgAltText, defaultInfo.content.imgHybridView, "_d");
    } else {
      if (this.config.overview.type === "image") {
        contentContainer.dataset.type = "image";
      } else if (this.config.overview.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, this.config.overview.videoPath, true);
      }
      this.changeImage(contentContainer, this.config.overview.imgPathArray, this.config.overview.imgPath, this.config.overview.imgAltText, this.config.overview.imgHybridView, "_d");
    }
    nav.classList.add("gt_active");
    let navContent = nav.querySelector(".gt_nav-content");
    this.setEqualDescription(navContent);
    let height = 0;
    navContent.childNodes.forEach((el) => {
      if (el.tagName === "P" || el.tagName === "DIV") {
        height += el.offsetHeight;
      }
    });
    height += 40 + 48; // p margin + extra 2 rows
    navContent.style.maxHeight = height + "px";
  };

  advancePath(container, selector) {
    let nextPath = container.querySelector(selector);
    !!nextPath && nextPath.click();
  };

  changeStep(container, tour, item, forward, stepsCount, lastTour) {
    // tracking?
    let sectionName = tour.name;
    let currentSlide = +item.dataset.step;
    if (forward) {
      this.logEvent('MOBILE-carousel-next-clicked', `Carousel next button clicked: Section ${sectionName}, Slide ${currentSlide}`);
    } else {
      this.logEvent('MOBILE-carousel-prev-clicked', `Carousel previous button clicked: Section ${sectionName}, Slide ${currentSlide}`);
    }
    // tracking?
    let currentStep = +item.dataset.step;
    let nextStep = forward ? currentStep + 1 : currentStep - 1;
    item.dataset.step = nextStep;
    let nextBtn = item.querySelector(".gt_next");
    let mobileExtra = item.closest(".gt_mobile").querySelector(".gt_mobile-extra");
    let skipA = false;

    let contentContainer = item.querySelector(".gt_content-container");
    this.removeExtraElements(contentContainer);
    if (nextStep === (stepsCount + 1)) {
      if (lastTour) {
        nextBtn.setAttribute("disabled", "disabled");
        contentContainer.parentElement.classList.add("gt_last-step", "gt_hide-img");
        contentContainer.innerHTML += `<div class="gt_content-modal">
        <h3 class="">${this.config.overview.finalSlideTitle}</h3>
        <div class="gt_content-modal_buttons">
          
        </div>
        <div class="gt_content-modal_link">
          <a href="javascript:void(0)"
            class="gt_link"
            
            aria-label="${this.config.overview.startAgainText}"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="${this.config.overview.startAgainText}"
            data-analytics-aa-linktitle="${this.config.overview.startAgainText}"
          >
            ${this.config.overview.startAgainText}
            <span class="gt_link-icon gt_link-icon-right">
              <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/>
              </svg>
            </span>
          </a></div>
        </div>`;
        let staticBtn1 = `<a href="${this.config.overview.finalSlideCTA1Link}"
                            class="gt_button gt_button-primary"

                            data-analytics-aa-destinationurl="${this.config.overview.finalSlideCTA1Link}"
                            aria-label="${this.config.overview.finalSlideCTA1Text}"

                            data-analytics-aa-tracking="true"
                            data-analytics-aa-region="Body"
                            data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
                            data-analytics-aa-mediatype="Demo"
                            data-analytics-aa-linkname="${this.config.overview.finalSlideCTA1Text}"
                            data-analytics-aa-linktitle="${this.config.overview.finalSlideCTA1Text}"
                          >
                            ${this.config.overview.finalSlideCTA1Text}
                          </a>`;
        let staticBtn2 = `<a href="${this.config.overview.finalSlideCTA2Link}"
                            class="gt_button gt_button-secondary"
                            
                            data-analytics-aa-destinationurl="${this.config.overview.finalSlideCTA2Link}"
                            aria-label="${this.config.overview.finalSlideCTA2Text}"

                            data-analytics-aa-tracking="true"
                            data-analytics-aa-region="Body"
                            data-analytics-aa-mediatitle="${this.v.attribute} (mobile)"
                            data-analytics-aa-mediatype="Demo"
                            data-analytics-aa-linkname="${this.config.overview.finalSlideCTA2Text}"
                            data-analytics-aa-linktitle="${this.config.overview.finalSlideCTA2Text}"
                          >
                            ${this.config.overview.finalSlideCTA2Text}
                          </a>`;
        let btnContainer = contentContainer.querySelector(".gt_content-modal_buttons");

        let cta1_transformed = window.SAP.InfoGraphics.createExtendLinkElement('requestDemo_M');
        cta1_transformed.className += " gt_button gt_button-primary";
        if (window.SAP.InfoGraphics.getExtendLink('requestDemo_M')) {
          btnContainer.append(cta1_transformed);
        } else {
          btnContainer.innerHTML += staticBtn1;
        }
        let cta2_transformed = window.SAP.InfoGraphics.createExtendLinkElement('visitProduct_M');
        cta2_transformed.className += " gt_button gt_button-secondary";
        if (this.config.overview.finalSlideCTA2Text) {
          if (window.SAP.InfoGraphics.getExtendLink('visitProduct_M')) {
            btnContainer.append(cta2_transformed);
          } else {
            btnContainer.innerHTML += staticBtn2;
          }
        }

        let startOver = contentContainer.querySelector(".gt_link");
        startOver.addEventListener("click", function() {
          let firstPathBtn = container.querySelector(".gt_accordion[data-step] > button");
          !!firstPathBtn && firstPathBtn.click();
          window.scrollTo({
            top: container.offsetTop,
            //behavior: "smooth"
          });
        });

        mobileExtra.classList.add("d-none");
      } else {
        this.advancePath(container, ".gt_open + .gt_accordion > button");
        skipA = true;
      }
    } else if (nextStep === 0) {
      let accordions = container.querySelectorAll('.gt_accordion');
      accordions.forEach((el, index) => {
        if (el.classList.contains("gt_open")) {
          accordions[index - 1].querySelector("button").click();
        }
      });
      skipA = true;
    } else {
      if (tour.steps[nextStep - 1].content.type === "image") {
        contentContainer.dataset.type = "image";
      } else if (tour.steps[nextStep - 1].content.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, tour.steps[nextStep - 1].content.videoPath, false);
      }
      this.changeImage(contentContainer, tour.steps[nextStep - 1].content.imgPathArray, tour.steps[nextStep - 1].content.imgPath, tour.steps[nextStep - 1].content.imgAltText, tour.steps[nextStep - 1].content.imgHybridView, "_m");

      let text = item.querySelector(".gt_accordion-content > p");
      text.innerHTML = tour.steps[nextStep - 1].text;
      contentContainer.parentElement.classList.remove("gt_last-step", "gt_hide-img");
      this.removeFinalStep(contentContainer);
      nextBtn.removeAttribute("disabled");
      mobileExtra.classList.remove("d-none");
    }
    let stepNumber = item.querySelector(".gt_controls p span");
    if (!skipA) {
      stepNumber.innerHTML = nextStep;
    }
  };

  changeStepNav(container, tour, item, forward, stepsCount, lastTour, contentContainer) {
    // tracking?
    let sectionName = tour.name;
    let currentSlide = +item.dataset.step;
    if (forward) {
      this.logEvent('DESKTOP-carousel-next-clicked', `Carousel next button clicked: Section ${sectionName}, Slide ${currentSlide}`);
    } else {
      this.logEvent('DESKTOP-carousel-prev-clicked', `Carousel previous button clicked: Section ${sectionName}, Slide ${currentSlide}`);
    }
    // tracking?
    let currentStep = +item.dataset.step;
    let nextStep = forward ? currentStep + 1 : currentStep - 1;
    item.dataset.step = nextStep;
    let nextBtn = item.querySelector(".gt_next");
    let desktopExtra = item.closest(".gt_desktop").querySelector(".gt_desktop-extra");
    let desktopExtra2 = item.closest(".gt_desktop").querySelector(".gt_desktop-extra2");
    let skipA = false;

    this.removeExtraElements(contentContainer);
    if (nextStep === (stepsCount + 1)) {
      if (lastTour) {
        nextBtn.setAttribute("disabled", "disabled");
        let info = document.createElement("div");
        info.className = "gt_content-modal";
        info.innerHTML = `<div class="gt_content-info">
        <h3 class="">${this.config.overview.finalSlideTitle}</h3>
        <div class="gt_content-info_buttons">
          
        </div>
        <div class="gt_content-info_link">
          <a href="javascript:void(0)"
            class="gt_link"
            
            aria-label="${this.config.overview.startAgainText}"

            data-analytics-aa-tracking="true"
            data-analytics-aa-region="Body"
            data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
            data-analytics-aa-mediatype="Demo"
            data-analytics-aa-linkname="${this.config.overview.startAgainText}"
            data-analytics-aa-linktitle="${this.config.overview.startAgainText}"
          >
            ${this.config.overview.startAgainText}
            <span class="gt_link-icon gt_link-icon-right">
              <svg viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.800005 9.99994C0.590005 9.99994 0.380005 9.91994 0.220005 9.74994C-0.0899951 9.42994 -0.0699963 8.91994 0.250004 8.61994L4.04 4.99994L0.250004 1.37994C-0.0699963 1.06994 -0.0799951 0.569939 0.220005 0.249939C0.530005 -0.0700608 1.03 -0.0800608 1.35 0.219939L5.75 4.41994C5.91 4.56994 6 4.77994 6 4.99994C6 5.21994 5.91 5.42994 5.75 5.57994L1.35 9.77994C1.2 9.92994 1 9.99994 0.800005 9.99994Z"/>
              </svg>
            </span>
          </a></div>
        </div>`;

        let staticBtn1 = `<a href="${this.config.overview.finalSlideCTA1Link}"
                            class="gt_button gt_button-primary"
                            
                            data-analytics-aa-destinationurl="${this.config.overview.finalSlideCTA1Link}"
                            aria-label="${this.config.overview.finalSlideCTA1Text}"

                            data-analytics-aa-tracking="true"
                            data-analytics-aa-region="Body"
                            data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
                            data-analytics-aa-mediatype="Demo"
                            data-analytics-aa-linkname="${this.config.overview.finalSlideCTA1Text}"
                            data-analytics-aa-linktitle="${this.config.overview.finalSlideCTA1Text}"
                          >
                            ${this.config.overview.finalSlideCTA1Text}
                          </a>`;
        let staticBtn2 = `<a href="${this.config.overview.finalSlideCTA2Link}"
                            class="${this.config.overview.finalSlideCTA2Text ? "": "d-none"} gt_button gt_button-secondary"
                            
                            data-analytics-aa-destinationurl="${this.config.overview.finalSlideCTA2Link}"
                            aria-label="${this.config.overview.finalSlideCTA2Text}"

                            data-analytics-aa-tracking="true"
                            data-analytics-aa-region="Body"
                            data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
                            data-analytics-aa-mediatype="Demo"
                            data-analytics-aa-linkname="${this.config.overview.finalSlideCTA2Text}"
                            data-analytics-aa-linktitle="${this.config.overview.finalSlideCTA2Text}"
                          >
                            ${this.config.overview.finalSlideCTA2Text}
                          </a>`;
        let btnContainer = info.querySelector(".gt_content-info_buttons");

        let cta1_transformed = window.SAP.InfoGraphics.createExtendLinkElement('requestDemo_D');
        cta1_transformed.className += " gt_button gt_button-primary";
        if (window.SAP.InfoGraphics.getExtendLink('requestDemo_D')) {
          btnContainer.append(cta1_transformed);
        } else {
          btnContainer.innerHTML += staticBtn1;
        }
        let cta2_transformed = window.SAP.InfoGraphics.createExtendLinkElement('visitProduct_D');
        if (!this.config.overview.finalSlideCTA2Text) {
          cta2_transformed.className += " d-none";
        }
        cta2_transformed.className += " gt_button gt_button-secondary";
        if (window.SAP.InfoGraphics.getExtendLink('visitProduct_D')) {
          btnContainer.append(cta2_transformed);
        } else {
          btnContainer.innerHTML += staticBtn2;
        }

        let startOver = info.querySelector(".gt_link");
        startOver.addEventListener("click", function() {
          let firstPathBtn = container.querySelector(".gt_nav[data-step] > button");
          !!firstPathBtn && firstPathBtn.click();
          window.scrollTo({
            top: container.offsetTop,
            //behavior: "smooth"
          });
        });
        contentContainer.append(info);

        desktopExtra.classList.add("d-none");
        if (this.v.phone) {
          desktopExtra2.classList.add("d-none");
        }
      } else {
        this.advancePath(container, ".gt_active + .gt_nav-separator + .gt_nav > button");
        skipA = true;
      }
    } else if (nextStep === 0) {
      let navs = container.querySelectorAll('.gt_nav');
      navs.forEach((el, index) => {
        if (el.classList.contains("gt_active")) {
          navs[index - 1].querySelector("button").click();
        }
      });
      skipA = true;
    } else {
      if (tour.steps[nextStep - 1].content.type === "image") {
        contentContainer.dataset.type = "image";
        contentContainer.parentElement.dataset.type = "image";
      } else if (tour.steps[nextStep - 1].content.type === "video") {
        contentContainer.dataset.type = "video";
        this.setupVideoStep(contentContainer, tour.steps[nextStep - 1].content.videoPath, true);
      }
      this.changeImage(contentContainer, tour.steps[nextStep - 1].content.imgPathArray, tour.steps[nextStep - 1].content.imgPath, tour.steps[nextStep - 1].content.imgAltText, tour.steps[nextStep - 1].content.imgHybridView, "_d");

      let text = item.querySelector(".gt_nav-text");
      text.innerHTML = tour.steps[nextStep - 1].text;
      this.removeFinalStep(contentContainer);
      nextBtn.removeAttribute("disabled");
      desktopExtra.classList.remove("d-none");
      if (this.v.phone) {
        desktopExtra2.classList.remove("d-none");
      }
      let navContent = item.querySelector(".gt_nav-content");
      let height = 0;
      navContent.childNodes.forEach((el) => {
        if (el.tagName === "P" || el.tagName === "DIV") {
          height += el.offsetHeight;
        }
      });
      height += 40 + 48; // p margin + extra 2 rows
      navContent.style.maxHeight = height + "px";
    }
    let stepNumber = item.querySelector(".gt_controls p span");
    if (!skipA) {
      stepNumber.innerHTML = nextStep;
    }
  };

  removeFinalStep(contentContainer) {
    let finalInfo = contentContainer.querySelectorAll('.gt_content-modal');
    finalInfo.forEach( el => {
      el.remove();
    });
  }

  changeImage(container, pathArray, newPath, newAlt, hybridFlag, size_prefix, skipFlag) {
    if (skipFlag) {return;}
    let image = new Image();
    image.src = newPath;
    let sipmpleTransition = false;
    let hybribClassName = "gt_hybrid" + size_prefix;
    let sourceEl = container.closest(".gt_container");
    if (hybridFlag) {
      sourceEl.classList.add(hybribClassName);
      sipmpleTransition = true;
    } else {
      sipmpleTransition = sourceEl.classList.contains(hybribClassName);
      sourceEl.classList.remove(hybribClassName);
    }
    if (this.pictureMode) {
      let pictureSources = container.querySelectorAll("source");
      pictureSources.forEach( (el, index) => {
        el.srcset = pathArray[index];
      });
    }
    let img = container.querySelector("img");
    img.style = "transition: all .2s linear 0s; opacity: 0;";
    setTimeout(() => {
      img.setAttribute("src", newPath);
      img.setAttribute("alt", newAlt);
      //img.style = "transition: all .4s linear 0s; opacity: 1;";
      img.style.transition = "all .4s linear 0s";
      img.style.opacity = "1";
    }, 300);
    if (sipmpleTransition || this.pictureMode) {
      img.setAttribute("src", newPath);
      img.setAttribute("alt", newAlt);
      img.style = "transition: none;";
    }
    img.removeAttribute("title");
    if (newAlt === "") {
      img.style.outline = "50px groove blue";
      img.style.outlineOffset = "-150px";
      img.title = "Alternative text is missing."
    }
  }

  removeExtraElements(container) {
    container.classList.remove("gt_video-container");
    let extraEl = container.querySelectorAll('video, .gt_video-btn_container, .gt_hot-spot_container');
    extraEl.forEach( el => {
      el.remove();
    });
  }

  setupVideoStep(container, videoPath, desktopFlag) {
    let btn = document.createElement("div");
    btn.className = "gt_video-btn_container";
    btn.innerHTML = `<button class="gt_video-btn"
    
      aria-label="Play"

      data-analytics-aa-tracking="true"
      data-analytics-aa-region="Body"
      data-analytics-aa-mediatitle="${this.v.attribute} (desktop)"
      data-analytics-aa-mediatype="Demo"
      data-analytics-aa-linkname="Play"
      data-analytics-aa-linktitle="Play"
      >
        <svg class="" width="12" height="12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 0C22.4375 0 0 22.4375 0 50C0 77.5625 22.4375 100 50 100C77.5625 100 100 77.5625 100 50C100 22.4375 77.5625 0 50 0ZM50 90C27.9375 90 10 72.0625 10 50C10 27.9375 27.9375 10 50 10C72.0625 10 90 27.9375 90 50C90 72.0625 72.0625 90 50 90ZM66.625 45.9375C67.9375 46.875 68.75 48.375 68.75 50C68.75 51.625 67.9375 53.125 66.625 54.0625L45.375 69.0625C44.5 69.6875 43.5 70 42.5 70C41.6875 70 40.9375 69.8125 40.1875 69.4375C38.5 68.5625 37.5 66.875 37.5 65V35C37.5 33.125 38.5625 31.4375 40.1875 30.5625C41.875 29.6875 43.8125 29.8125 45.375 30.9375L66.625 45.9375Z"/></svg>
      </button>`;
    container.append(btn);
    if (desktopFlag) {
      container.parentElement.dataset.type = "video";
    }
    container.querySelector(".gt_video-btn").addEventListener("click", function() {
      container.innerHTML +=`<video class="gt_video" preload="auto" controls autoplay loop playsinline webkit-playsinline x5-playsinline src="${videoPath}"></video>`;
      container.classList.add("gt_video-container");
    });
  }

  setupEqualDescription() {
    if (!this.v.equalHeight) { return; }
    let items = this.shadowRoot.querySelectorAll('.gt_nav-heightholdel, .gt_accordion-heightholdel');
    this.defineLongestDescription();
    items.forEach( el => {
      el.innerHTML = this.v.longest[el.dataset.tour].text;
    });
  }

  defineLongestDescription() {
    this.v.longest = [];
    this.config.tours.forEach( el => {
      let s = {
        length: 0,
        text: "",
      };
      el.steps.forEach(item => {
        if (item.text.length > s.length) {
          s.length = item.text.length;
          s.text = item.text;
        }
      });
      this.v.longest.push(s);
    });
  }

  setEqualDescription(item) {
    if (!this.v.equalHeight) { return; }
    let span = item.querySelector("span");
    if (!span) { return; }
    let p = item.querySelector("p");
    p.style.minHeight = span.clientHeight + "px";
  }
}

customElements.define("product-tour", ProductTour);