import React from 'react';
import ProfileCard from './Card'

class CardList extends React.Component {
    render() {
        let items = this.props.profiles;
        return (
            <div>
                {items.map(item => <ProfileCard {...item} />)};
            </div>
        )
    }
}

export default CardList