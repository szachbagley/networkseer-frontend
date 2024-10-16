//import logo from './ (goes in src folder)

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark text-white">
      <div className="col-4">Logo Goes Here</div>
      <div className="col">
        <h1 className="subtitle">{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
