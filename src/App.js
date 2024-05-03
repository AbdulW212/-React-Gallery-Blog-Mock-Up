import './App.css';
import PageTwo from './components/PageTwo';
import PageOne from './components/PageOne'

function App() {
  const dates = ["11/12/20", "11/11/20"]

  const titleAndPic = [
    {
      title:"On the Street in Brooklyn",
      picture: "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
    },
    {
      title:"Vintage in Vogue",
      picture:"https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
    }
  ]

  const articles = ["They decided to find the end of the rainbow. While they hoped they would find a pot of gold, neither of them truly believed that the mythical pot would actually be there. Nor did they believe they could actually find the end of the rainbow.", "Still, it seemed like a fun activity for the day, and pictures of them chasing rainbows would look great on their Instagram accounts. They would have never believed they would actually find the end of a rainbow, and when they did, what they actually found there."]
  return (
    <div className="App">
     <PageOne dates={dates[0]} titleAndPic={titleAndPic[0]} articles={articles[0]}/>
      <PageTwo dates={dates[1]} titleAndPic={titleAndPic[1]} articles={articles[1]}/>


    </div>
  );
}

export default App;
