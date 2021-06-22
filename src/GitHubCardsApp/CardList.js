import React from 'react';
import ProfileCard from './Card'

/* Component Class version
class CardList extends React.Component {
    render() {
        let profiles = this.props.profiles;
        return (
            <div>
                {profiles.map(profile => <ProfileCard key={profile.id} {...profile}/>)};
            </div>
        )
    }
}
*/

// Component Function Version
function CardList (props){
    const profiles = props.profiles;
    return (
        <div>
        {profiles.map(profile => <ProfileCard key={profile.id} {...profile}/>)};
    </div>
    );
}

export default CardList