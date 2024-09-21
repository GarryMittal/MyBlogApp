import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className = "headerTitleSm">React and Node</span> */}
        <span className = "headerTitleLg">Let your thoughts flow..</span>
      </div>
      <img className="headerImg" src = "/landing.jpg" alt = ""/>
    </div>
  );
}

export default Header;
