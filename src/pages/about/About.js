import { useParams } from "react-router-dom";

// class About extends Component {
//   constructor(props) {
//     const { name } = props.match.params;
//     super(props);
//     this.state = {
//         name: name, 
//     }
//   }

//   render() {
//     const { name } = this.state
//     return (
//         <div>
//             <h1>This About page using class</h1>
//             <h1>The passed name is {name}</h1>
//         </div>
//     ); 
//   }
// }

// encouraged to use functional component

function About() {
    const { name } = useParams(); 

    return (
        <div>
            <h1>About</h1>
            <p>The passed params is {name}</p>
            <p>Functional component is stateless, but instead uses hook to manage state</p>
            <p>Every hook is independant to every component</p>
        </div>
    ); 
}

export default About;
