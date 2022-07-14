import Button from '../button/button.components';

import './section.styles.scss';


const places = [
    {
        id: 1,
        title: "Centralia, Pennsylvania",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    },

    {
        id: 2,
        title: 'Fort Benning, Georgia',
        description: 'lorem asdf daf sadfknl nhiudhfoa whe fnjkdbfjksabf askdfjkabdjkabwofnndvn'
    },

    {
        id: 3,
        title: 'Jacobs Hole, Texas',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    },

    {
        id: 4,
        title: 'Mount Ranier, Washington',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    },

    {
        id: 5,
        title: 'Ben & Jerry\'s Flavor Graveyard, Vermont',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, cupiditate.'
    },
]


const Section = () => {

    return( 
        <section className="section">
                <div className="container">

                    {places.map((place) => {
                        return(
                            <div>
                            <div className="info">
                                <h2 className="title">{place.title}</h2>
                                <div className="description">
                                    <p>
                                        {place.description}
                                    </p>
                                </div>
                                <div className="button-div">
                                    <Button buttonType='primary' type='button'>Test Button</Button>
                                </div>
                            </div>
                                <img  src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        );
                    })}
                    
                </div>
           </section>
    );

}

export default Section;