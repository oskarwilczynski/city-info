import React from 'react';

class Event extends React.Component {
    render() {
        const imagePlaceholder = "https://www.makeupgeek.com/content/wp-content/themes/makeup-geek/images/placeholder-square.svg"

        return (
            <div>
                <img src={this.props.details.image ? this.props.details.image.url : imagePlaceholder} />
                <h3>{this.props.details.title}</h3>
                <p>{this.props.details.venue_name}</p>
            </div>
        )
    }
}

export default Event;