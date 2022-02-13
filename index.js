
class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>Lata Mangeshkar</h1>
                <h4>Queen of Melody</h4>
            </div>
        )
    }
}

class Picture extends React.Component{
    render(){
        return(
            <div className="Picture">
                <img src="https://images.hindustantimes.com/img/2022/02/06/1600x900/lata_mangeshkar_1644122706471_1644122706579.jpeg" />
                <h3>Lata Mangeshkar (1929 – 2022)</h3>
            </div>
        )
    }
}


class Biography extends React.Component{
    render(){
        return(
            <div className="Biography">

                 <div className="heading">
                     <h3>A Short Biography of Lata Mangeshkar</h3>
                 </div>
                
               <p className="bio">
               Lata Mangeshkar is one of the best playback singer in India. She was born in 28 September 1929 at Indore part of Madhya Pradesh, India. Lata was named “Hema” at her birth. Her parents later renamed her Lata after a female character, Latika, in one of her father’s plays, BhaawBandhan. She was born as the first of five children. Her parents were Pt. Dinanath Mangeshkar,a classical singer and theater actor and Shudhhamati, Deenanath’s second wife. Lata Mangeshkar always sings barefoot. She began her career in 1942 with Kiti Hasaal. Lata has performed in more than 1000 films in 20 languages. Lata’s name is recorded in the Guinness Book of World Records for having sung the maximum number of songs in the world. She has sung for over 50 years for actresses from Nargis to Priyanka Chopra, as well as having recorded albums of all kinds (ghazals, pop, etc). Famous Indian singer Asha Bhosle is her sister. And brother Hridayanath Mangeshkar has also big names in the world of Indian music.
               </p>
                 
                 <div className="quote">
                      <p >" I believe in one power, and that is the hand of God. I respect all religions. "</p>
                     <h5>--Lata Mangeshkar--</h5>
                 </div>
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header/>
                <Picture/>
                <Biography/>
            </div>
            
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)