import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { apiUrl } from "../url";




// function test(){
//   $.ajax({
//     type : 'post',           
//     url : 'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023',          
//     async : false, 
//     dataType : 'json',
//     success : (data)=>{
  
//       console.log("data = " + data)
//     }

//   })
// }

// const test = fetch(apiUrl.home)

// // console.log("apiUrl.home2 = " +  toString.test) 조대현코드
// fetch(apiUrl.home)
// .then(res => res.json())
// .then(res => {
//   // data를 응답 받은 후의 로직
// });


const Home = () => {
  const [results, setResults] = useState([]);

  

  const getMovies = async () => {
    const json = await (await fetch(apiUrl.home)).json();
    setResults(json.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <Layout>
      <div className={styles.container}>
        {results.length > 0 &&
          results.map((result) => (
            <div key={result.id} className={styles.item}>
              <Link to={`/character/${result.id}`}>
                <img
                  src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                  alt={result.id}
                />
                <h1 className={styles.name}>
                  {result.name.length > 10
                    ? result.name.slice(0, 10) + "..."
                    : result.name}
                </h1>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Home;
