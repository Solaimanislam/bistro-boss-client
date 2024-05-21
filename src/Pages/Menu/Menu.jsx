import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../src/assets/assets/menu/banner3.jpg';
import dessertImg from '../../../src/assets/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../src/assets/assets/menu/pizza-bg.jpg';
import saladImg from '../../../src/assets/assets/menu/salad-bg.jpg';
import soupImg from '../../../src/assets/assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
                
            </Helmet>
            <Cover
            img={menuImg}
            title='Our Menu'
            ></Cover>
            {/* Main cover */}
            <SectionTitle
            subHeading="Don't Miss"
            heading="Today's Offered"
            ></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
            items={desserts} title="dessert" img={dessertImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
            items={pizza} title="pizza" img={pizzaImg}
            ></MenuCategory>

            {/* Salad menu items */}
            <MenuCategory
            items={salad} title="salad" img={saladImg}
            ></MenuCategory>

            {/* Soup menu items */}
            <MenuCategory
            items={soup} title="soup" img={soupImg}
            ></MenuCategory>
            
            
        </div>
    );
};

export default Menu;