import logo from '/miffy-gram.png'; 
import miffy_icon from '/miffy_icon.jpg';

export default function NavBar() {
    return (
        <div className="gram_logo">
                <img src={logo} alt="miffy-gram logo" width="557" height="157" />
                <img src={miffy_icon} className="column" alt="miffy-gram icon" height="90"/>
        </div>
    );
}