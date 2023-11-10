import './style.css';

function comp2() {
    return (
        // <!------service section start-->
        <div>
            <div className="service">
                <div className="title">
                    <h2>Our Services</h2>
                </div>
                <div className="box">
                    <div className="card">
                        <i className="fas fa-bars"></i>
                        <h5>Web Development</h5>
                        <div className="pra">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vitae cumque doloremque magnam.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <i className="far fa-user"></i>
                        <h5>User Experience</h5> {/* Changer le texte ici pour refléter le service réel */}
                        <div className="pra">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vitae cumque doloremque magnam.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <i className="far fa-bell"></i>
                        <h5>Notification Services</h5> {/* Changer le texte ici pour refléter le service réel */}
                        <div className="pra">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vitae cumque doloremque magnam.
                            </p>
                            <p style={{ textAlign: 'center' }}>
                                <a className="button" href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default comp2;
