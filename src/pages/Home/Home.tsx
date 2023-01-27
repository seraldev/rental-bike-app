import { BikesList } from '.';
import { BikesListProvider } from '../../context';

const HomePage = () => {
    return (
        <BikesListProvider>
            <BikesList />
        </BikesListProvider>
    )
}

export default HomePage;
