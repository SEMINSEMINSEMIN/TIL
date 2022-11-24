import './privacy.css'

function Privacy({name, phone, github}){
    return (
      <section className="privacy">
        <h2>개인정보</h2>
        <figure className="profile">
          <img className='profile-img' src='img/profile.jpg' alt="profile" />
          <figcaption>
            <p className="name">이름 : {name}</p>
            <p>전화번호 : {phone}</p>
            <p>github : <a href="https://github.com/SEMINSEMINSEMIN" >SEMINSEMINSEMIN</a></p>
          </figcaption>
        </figure>
      </section>
    )
}

export default Privacy