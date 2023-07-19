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
        </>
    );
}

export default Community;