import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title : 'My new Website',body:'lorem ipsum....',author:'mario',id:1},
        {title : 'Welcome Party!',body:'lorem ipsum....',author:'yoshi',id:2},
        {title: 'Web dev tops tips',body:'lorem ipsum...',author:'mario',id:3},
        {title: 'Land of Wano',body:'lorem ipsum...',author:'zoro',id:4}
    ]);

    // const [name,setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use Effect Ran');
    }, []);
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
            <BlogList blogs={blogs} title="All the Blogs !" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'zoro')} title="Zoro's Blog" />
            {/* <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p> */}
            {/* <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={(e) => {handleClickagain('mario',e)}}>Click me Again</button> */}
        </div>
      );
}

export default Home;