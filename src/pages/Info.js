import InfoCard from'../components/InfoCard'
import ReviewContainer from '../components/ReviewContainer';

const Info = () => {
    return (
        <>
            <div className="app">
                <h3>'Movie Name'</h3>
                <InfoCard />
                <ReviewContainer />
            </div>
        </>
    );
};
 
export default Info;