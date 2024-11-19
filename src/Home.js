import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title : 'My new Website',body:'lorem ipsum....',author:'mario',id:1},
        {title : 'Welcome Party!',body:'lorem ipsum....',author:'yoshi',id:2},
        {title: 'Web dev tops tips',body:'lorem ipsum...',author:'mario',id:3},
        {title: 'Land of Wano',body:'lorem ipsum...',author:'zoro',id:4}
    ])
    // const [name, setName] = useState('mario');

    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(22);
    // }

    // const handleClickagain = (name,e) => {
    //     console.log('hello' + name,e);
    // }



    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All the Blogs !" />
            {/* <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e) => {handleClickagain('mario',e)}}>Click me Again</button> */}
        </div>
      );
}

export default Home;