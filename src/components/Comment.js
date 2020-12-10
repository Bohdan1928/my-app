import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                .{item.email} - {item.body}
            </div>
        );
    }
}

export default Comment;