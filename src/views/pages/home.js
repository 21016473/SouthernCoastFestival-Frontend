import App from '../../App'
import {html, render } from 'lit-html'
import Utils from '../../Utils'
import Event from '../../Event'
import Toast from '../../Toast'

import React from 'react'
import { renderReactComponent } from '../../components/react/reactHelper'
import EventContainer from '../../components/sc-events-grid.js'
import ContactForm from '../../components/react/sc-contact-form.js'
import eventData from '../../eventdata.js'

class HomeView {
  constructor() {
    this.events = eventData;
    console.log(this.events)
  }

  init(){
    console.log('HomeView.init')
    document.title = 'Home'   
    
    // await this.getEvents() // only use when front and back are talking
    this.render()
    Utils.pageIntroAnim()

    const jumpTo = document.querySelectorAll('.jumpTo')
    jumpTo.forEach(button => button.addEventListener('click', this.scrollTo))
  }

  async getEvents() {
    try {
      this.events = await Event.getEvents()
      console.log(this.events)
      this.render()
    } catch (err) {
      Toast.show(err, 'error')
    }
  }

  scrollTo() {
    const eventsSection = document.getElementById('events')
    eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render(){
    const template = html`

      <sc-app-header></sc-app-header>

      <div class="page-content">        
        
        <!--HERO-->
        <div id="home">
          <div class="hero-banner">
            <div id="hero-content">
              <h1>Come experience Geelong's Festival of Light!</h1>
              <p>We are back again! Enjoy family-friendly fireworks, laser shows, light installations with over 100,000 blubs and eat the night away.</p>
              <h3 style="font-weight: bold; color: #FFC600;">From August 24th to 25th, 2024.</h3>
              <button class="jumpTo">Find an event &#8595;</button>
            </div>
          </div>
        </div>

        <!--EVENTS-->
        <!-- use react grid to create events layout -->

        <div id="events">
          <div id="filter-container"></div>
        </div>

        <!--VENUE-->
        <div id="venue">
            <div class="venue-nav">
              <ul>
                <li><a href="#location">Location</a></li>
                <li><a href="#map">Festival Map</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#parking">Parking</a></li>
                <li><a href="#transport">Transport</a></li>
              </ul>
            </div>
            <div class="venue-container">
              <div id="location">
                <div class="left">
                  <h1>Location</h1>
                  <p>Rippleside Park, Bell Parade Geelong, Victoria, Australia</p>
                </div>
                <div class="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.567231010363!2d144.35266371147935!3d-38.12700147178166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad416b703b7800b%3A0xf04567605324bc0!2sRippleside%20Park!5e0!3m2!1sen!2sau!4v1721380831126!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div id="map">
                <div id="map-img"></div>
                <h1>Festival Map</h1>
              </div>
              <div id="accessibility">
                <h1>Accessibility</h1>
                <p>We are committed to providing an accommodating experience for all our guests. If you have any specific requirements, don't hesitate to contact us.</p>
                <div class="info">
                  <h3>Parking: </h3>
                  <p>Designated accessible parking spots are located close to the entrance for guests with mobility needs. Display the appropriate permits.</p>
                </div>
                <div class="info">
                  <h3>Pathways: </h3>
                  <p>The event grounds feature smooth pathways to ensure easy navigation for wheelchairs and mobility aids.</p>
                </div>
                <div class="info">
                  <h3>Restrooms: </h3>
                  <p>Wheelchair-accessible restrooms are available throughout the event site.</p>
                </div>
                <div class="info">
                  <h3>Viewing: </h3>
                  <p>We offer designated viewing areas for guests using wheelchairs, ensuring an unobstructed view of the light displays and performances.</p>
                </div>
                <div class="info">
                  <h3>Assistance: </h3>
                  <p>Our friendly staff and volunteers are on hand to assist with any needs or questions you may have during your visit.</p>
                </div>
              </div>
              <div id="parking">
                <h1>Parking</h1>
                <p>Lorem ipsum</p>
                <div class="info">
                  <h3>On-site: </h3>
                  <p>Our main event site features ample parking spaces just a short walk from the entrance. Follow signs to designated parking areas upon arrival.</p>
                </div>
                <div class="info">
                  <h3>Street: </h3>
                  <p>Our main event site features ample parking spaces just a short walk from the entrance. Follow signs to designated parking areas upon arrival.</p>
                </div>
                <div class="info">
                  <h3>Overflow: </h3>
                  <p>During peak times, additional overflow parking is available nearby. Shuttle services will be provided to transport guests to and from the main event area.</p>
                </div>
              </div>
              <div id="transport">
                <h1>Transport</h1>
                <p>For convenient access to the light festival, many parking spots are available nearby. Alternatively, access via public transport is easy with frequent bus services and a nearby train station.</p>
                <p>Follow signs for designated parking areas or plan your journey using public transport options for a hassle-free visit to this event.</p>
              </div>
            </div>
        </div>

        <!--ABOUT-->
        <div id="about">
          <div class="about-container">
            <div id="about-info">
              <h1>About the Festival</h1>
              <p>Transforming the city of Geelong into a luminous wonderland with art installations, dazzling displays, vibrant projections, and fireworks.</p>
              <p>Celebrate creativity and community spirit as local artists, alongside talented performers, showcase their artistry.</p>
              <p>Explore local shops offering unique wares, and savour delicious food from diverse local vendors, with moments that captivate all who attend.</p>
              <h2>Festival Dates</h2>
              <p>Saturday to Sunday, 24th to 25th of August, 2024</p>
              <h2>Hours of Operation</h2>
              <p>Saturday — 12:00PM to Midnight</p>
              <p>Sunday — 11:00AM to 10:00PM</p>
            </div>
            <div id="contact-form"></div>
          </div>
        </div>
      </div>   
      
      <sc-app-footer></sc-app-footer>
    `
    render(template, App.rootEl)

    const filterContainer = document.getElementById('filter-container')
    renderReactComponent(EventContainer, filterContainer)

    const contactFormContainer = document.getElementById('contact-form')
    renderReactComponent(ContactForm, contactFormContainer)
  }
}

export default new HomeView()