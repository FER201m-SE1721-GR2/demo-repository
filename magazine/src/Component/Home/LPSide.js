import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faDiscord, faPinterest, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';


const Community = () => {
    return (
        <>
            <section className='community'>
                <div className="heading">
                    <h6>Community &nbsp; <FontAwesomeIcon icon={faUsers} style={{ color: "#13294e", }} /></h6>
                </div>


                <div className='socBox' style={{ marginTop: '50px' }}>
                    <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff", }} />
                    <span>&nbsp; 12,740 Likes</span>
                </div>
                <div className='socBox'>
                    <FontAwesomeIcon icon={faPinterest} style={{ color: "#ffffff", }} />
                    <span>&nbsp; 5,600 Fans</span>
                </div>
                <div className='socBox'>
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} />
                    <span>&nbsp; 8,700 Followers</span>
                </div>
                <div className='socBox'>
                    <FontAwesomeIcon icon={faDiscord} style={{ color: "#ffffff", }} />
                    <span>&nbsp; 22,700 Followers</span>
                </div>
                <div className='socBox'>
                    <FontAwesomeIcon icon={faSquareYoutube} style={{ color: "#ffffff", }} />
                    <span>&nbsp; 2,700 Subscriber</span>
                </div>
            </section>

            <div className="second-community">
                <div className="heading">
                    <h6>Subscribe &nbsp; <FontAwesomeIcon icon={faRightToBracket} style={{color: "#2b3f73",}} /></h6>
                </div>
            </div>
            <section className='subscribe'>
                <h1 className='title'>Subscribe to our New Stories</h1>
                <form action=''>
                    <input type='email' placeholder='Email Address...' />
                    <button>
                        <i className='fa fa-paper-plane'></i> SUBMIT
                    </button>
                </form>
            </section>
        </>
    );
}

export default Community;