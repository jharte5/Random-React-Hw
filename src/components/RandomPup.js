import React, {Component} from 'react';

let pups = [
    {   
        name: './images/pup1.jpg',
        number: '1'
    },
    {   
        name: './images/pup2.jpg',
        number: '2'
    },
    {   
        name: './images/pup3.jpg',
        number: '3'
    },
    {   
        name: './images/pup4.jpg',
        number: '4'
    },
    {   
        name: './images/pup5.jpg',
        number: '5'
    },
    {   
        name: './images/pup6.jpg',
        number: '6'
    },
    {   
        name: './images/pup7.jpg',
        number: '7'
    },
    {   
        name: './images/pup8.jpeg',
        number: '8'
    },
    {   
        name: './images/pup9.jpg',
        number: '9'
    },
    {   
        name: './images/pup10.jpg',
        number: '10'
    },
]



export default class RandomPup extends Component {
    constructor () {
        super();
        this.state = {
            pup: {   
                name: './images/pup1.jpg',
                number: '1'
            } ,

        };
    }

    handleChange = (event) => {
        let puppy = pups[Math.floor(Math.random() * 10) + 1]
        this.setState({pup: puppy}, () => {
            console.log(this.state)
        });
    };

    render() {
        return (
            <div>
                <img src={this.state.pup.name} alt=""/>
                <button 
                    className="ui primary button"
                    style={{ margin: '10px 15px'}}
                    onClick={this.handleChange}
                    >
                    Random</button>
            </div>
        )
    }
}



