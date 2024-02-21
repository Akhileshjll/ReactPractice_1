import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

export default function App(){
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className='title'>Personal Digital Assignment</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                             title="Alexa" 
                             handle="@alexa99" 
                             image={AlexaImage}
                             description="Alexa was created by Amazon and helps you buy things" 
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                              title="Cortana" 
                              handle="@cortana3" 
                              image={CortanaImage}
                              description="Cortona is developed by Microsoft and it helps you as an personal assistant"
                            />

                        </div>
                        <div className='column is-4'>
                          <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage} 
                            description="Siri is developed by Apple and it helps you as virtual assistant "
                          />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}