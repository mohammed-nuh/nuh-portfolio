import nuhPic from '../assets/nuh_pic.jpg';

function Header() {
  return (
    <header className="py-4 mb-5 border-bottom bg-darkblue">
      <div className="container">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src={nuhPic}
            alt="Nuh"
            className="rounded-circle shadow mb-3"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <h1 className="text-light fw-bold mb-1">Mohammed Nuh</h1>
          <p className="text-light lead mb-0">Frontend React Developer</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
