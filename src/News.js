import { useSelector } from "react-redux";


const News = () => {
    const counter = useSelector((state) => state.counter);
    return <div>
        <h2>News</h2>
        <h3>kichik counter sanogini korish: {counter}</h3>
    </div>
};

export default News;