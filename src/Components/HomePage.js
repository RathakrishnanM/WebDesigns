import '../Component_CSS/login.css';
import Geography from '../Components/images/Geography_of_TamilNadu.jpg'
import CulutureImage from '../Components/images/culture_of_tamilNadu.jpg';
import HistoryImage from '../Components/images/three_kings.jpg';
import GeographyCard from '../Components/images/geo_tn_card.jpg';
import PlaceToVisitCard from '../Components/images/Places to visit.jpg';
import TravelGuidance from '../Components/images/TravelGuidance.jpg';
import Navigation from '../Components/Navigation.js'


export default function HomePage() {
    return (
        <>
            <div className="EntireHomePage">

                <div className="Header">
                    <h1>History and Highlights of TamilNadu</h1>
                    <hr></hr>
                    <div className="firstSideImage"></div>
                    <Navigation></Navigation>
                </div>

                <div className='HomePageMainHeading'>
                    <h3 className='quoats'><q>The Tamilnadu, A symphony of timeless traditions and architectural opulence, where every sunrise echoes the grandeur of a rich cultural heritage</q></h3>
                </div>

                <div className='HomePageCardElements'>
                    <div className="HomePageMainCards">
                        <img src={HistoryImage} />
                        <div className='HomePageMainCardContent'>Tamil Nadu's ancient rulers: Chola, Chera, Pandya</div>
                    </div>
                    <div className="HomePageMainCards">
                        <img src={CulutureImage} />
                        <div className='HomePageMainCardContent'>Tamil Nadu's culture: diverse and vibrant traditions.</div>
                    </div>
                    <div className="HomePageMainCards">
                        <img src={GeographyCard} />
                        <div className='HomePageMainCardContent'>Tamil Nadu: Flat lands, hills, and coastal areas.</div>
                    </div>
                    <div className="HomePageMainCards">
                        <img src={PlaceToVisitCard} />
                        <div className='HomePageMainCardContent'>Tamil Nadu's gems: Scenic spots, history, cultural wonders.</div>
                    </div>
                </div>
                
                <hr />

                <div className="GeographicalContent">
                    <h3>Geographical facts about Tamil Nadu</h3>
                    <ul>
                        <li>
                            <figure>
                                <img src={Geography} alt=''/>
                                <figcaption>Geographical representation of TamilNadu.</figcaption>
                            </figure>
                        </li>
                        <li>This state is connected by three southern counterparts, namely-Karnataka on the northwest side, Andhra Pradesh on the north, and Kerala on the West.</li>
                        <li>The state has three hills with peak heights. This state also has Nilgiris and the Anamalai hills. The highest peak of Nilgiris hills is situated at 2640 m above sea level and is known as Doddabetta.</li>
                        <li>Western ghats cover most of the western region of the state. But there is a gap or break between the western ghats called the Palghat gap, which is about 25 km in width. If these gaps lie in the Western ghats on the southern side, then they are known as the Anamalai range of Elephant Hills.</li>
                        <li>On the east side of Tamil Nadu, there are Palani Hills. Kodaikanal is the most famous hill station, situated on Palani Hills.</li>
                        <li>Tamil Nadu is considered one of the biggest states by area (11th largest in terms of area).  </li>
                        <li>It is also heavily populated and ranks 6th by population.</li>
                        <li>Kanchipuram is known as the largest district in terms of area. In comparison, Chennai is considered the largest in terms of population. </li>
                        <li>Some rivers that flow through this state include Chittar, Bhavani, Kaveri, Meyar, Palar, Ponnaiyar, Amravati, Vaigal, Tamaraparni, and Cheyyar.</li>
                        <li>Kaveri river is known as the biggest river, it is about 760 Km.  </li>
                        <li>There are about 74 million Tamilians globally, and about 63 million people reside in India. </li>
                    </ul>
                </div>

                <div className='TravelGuidance'>
                    <div className='TravelGuidance_SomeDesign'></div>
                    <h3>Travel Guidance</h3>
                    <div className='TravelGuidance_Content_Area'>
                        <figure>
                            <img src={TravelGuidance}/>
                            <figcaption>Explore more about Our travel guidance</figcaption>    
                        </figure>    
                    Explore the beauty of Tamil Nadu on a journey that takes you through diverse landscapes and rich cultural heritage.
                     From the pristine beaches of Marina to the historical wonders of Mahabalipuram, each destination holds a unique charm.
                      Experience the tranquility of Ooty's lush hills, the spirituality of Rameswaram, and the architectural marvels of ancient temples, including
                       the iconic Meenakshi Temple in Madurai. Immerse yourself in the vibrant culture of Chennai, sampling local cuisine and exploring bustling markets.
                        Discover the grandeur of Chettinad's mansions, the colonial legacy of Puducherry, and the natural wonders of tea estates and wildlife sanctuaries.
                     Tamil Nadu unfolds as a captivating tapestry of experiences, blending history, nature, and tradition. Plan your journey to this diverse and enchanting
                      destination today.  </div>
                    <button className='TravelGuidance_Explore'>Explore</button>
                </div>

                <div className='Blog'>
                    <div className='Blog_SomeDesign'></div>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About Me</a></li>
                        <li><a href="">Contact Details</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Use</a></li>
                    </ul>
                </div>

                <div className='BlogCopy'>&copy; 2023 TN GOVERNMENT Inc. ALL RIGHTS RESERVED.</div>

            </div>
        </>
    );
}