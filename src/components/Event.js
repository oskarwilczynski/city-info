import React from 'react';

class Event extends React.Component {
    render() {
        if (this.props.details.image.url === null) {
            var imageUrl = "http://webmaster.ypsa.org/wp-content/uploads/2012/08/no_thumb.jpg"
        } else {
            var imageUrl = this.props.details.image.url;
        }

        return (
            <div>
                <img src={imageUrl} />
                <h3>{this.props.details.title}</h3>
                <p>{this.props.details.venue_name}</p>
            </div>
        )
    }
}

export default Event;