import Navigation from '../Components/Navigation.js'
import '../Component_CSS/geo.css';
import '../Component_CSS/login.css';
import geo1 from '../Components/images/geo_1.jpg';
import geo2 from '../Components/images/geo_2.jpg';
import rain from '../Components/images/rain1.jpg';
import summer from '../Components/images/summer1.jpg';
import winter from '../Components/images/winter1.png';
import 'bootstrap/dist/css/bootstrap.css';

export default function Geography() {
    return (
        <>
            <div className='entire_geo'>
            
            <div className='Header'>
                <h1 className='geoHeading'>Geographical Structure of Tamilnadu</h1>
                <Navigation></Navigation>
            </div>

            <div className='contents'>
                <div className='geo-content1'>
                    <img src={geo1} className='geo-img1'/>
                    <div className='overview'>
                    <h3>Geography of Tamil Nadu: Overview</h3>
                    <p>Tamil Nadu is a state in southern India, known for its rich cultural heritage, classical arts, and historical significance. It is the seventh-largest state by area and the sixth-most populous state in India. The capital of Tamil Nadu is Chennai, a vibrant coastal city. The state is renowned for its Dravidian-style temples, classical music and dance, diverse cuisine, and contributions to literature and cinema. Tamil Nadu has a strong economy with a focus on agriculture, manufacturing, and services. The state is characterized by a mix of urban and rural landscapes, and it has played a pivotal role in shaping the political and cultural landscape of India.</p>
                    </div>
                </div>
                <div className='geo-content2'>
                    <img src={geo2} className='geo-img1'/>
                    <div>
                    <h2>Tamil Nadu Geographical Factors</h2>
                    <h4>Geographical Boundaries</h4>
                    <ul>
                        <li>East: Bay of Bengal</li>
                        <li>South: Indian Ocean</li>
                        <li>West: Kerala and Karnataka</li>
                        <li>North: Andhra Pradesh</li>
                        <li>Coastline: Extends approximately 1,076 kilometers along the Bay of Bengal.</li>
                    </ul>
                    </div>
                </div>
                <div className='geo-content3'>
                    <h3>Relief, Drainage, and Soils</h3>
                    Tamil Nadu's geographical relief is characterized by diverse features that contribute to its overall landscape.
                    The coastal plains, with fertile soils and numerous rivers, support extensive agriculture and fisheries. In the
                    central part of the state, plateaus, including the Deccan Plateau, present relatively flat terrain. The Western
                    Ghats along the western border and the Eastern Ghats in the north influence the climate and precipitation patterns.
                    These geographical variations contribute to the state's overall topographical richness.
                </div>
                <div className='geo-content4'>
                    <h3>Climate</h3>
                    Tamil Nadu experiences a tropical to subtropical climate with three distinct seasons. The coastal areas are
                    characterized by hot and humid conditions, while the interior regions enjoy a more moderate climate. The state 
                    undergoes summer, monsoon, and winter seasons, each influencing the overall climatic conditions. These varied 
                    climates contribute to the state's agricultural diversity, impacting crop patterns and livelihoods across different regions.
                    <div>
                        <figcaption>
                            <figure><img src={rain}/></figure>
                            Rainy Season
                        </figcaption>
                        <figcaption>
                            <figure><img src={summer}/></figure>
                            Summer Season
                        </figcaption>
                        <figcaption>
                            <figure><img src={winter}/></figure>
                            Winter Season
                        </figcaption>
                    </div>
                </div>
                <div className='geo-content5'>
                    <h3>Flora and Fauna</h3>
                    Tamil Nadu's diverse geography gives rise to a rich array of flora and fauna. The Western Ghats house lush evergreen 
                    forests, while the coastal plains are home to unique mangrove ecosystems. The state takes pride in its wildlife sanctuaries 
                    and national parks, where various species are protected. Elephants, tigers, and different types of deer are among the notable 
                    wildlife that thrives in these protected areas. The biodiversity reflects the state's commitment to environmental conservation and 
                    contributes to the overall ecological balance of Tamil Nadu.
                </div>                                               +
            </div>
            </div>
        </>
    );
}