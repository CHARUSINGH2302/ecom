import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

const Home = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("ART DE LA TABLE");

  const toggleHeartColor = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <Wrapper>
      <Header>
        <TopSection>
          <Logo>
            <img src="/weframe logo.png" alt="Logo" />
          </Logo>
          <SearchBar>
            <input type="text" placeholder="Rechercher un produit..." />
            <FaSearch />
          </SearchBar>
          <Icons>
            <FaHeart
              className="icon"
              style={{ color: isHeartClicked ? "pink" : undefined }}
              onClick={toggleHeartColor}
            />
            <FaShoppingCart className="icon" />
            <FaUser className="icon" />
          </Icons>
        </TopSection>
        <NavMenu>
          {["ART DE LA TABLE", "MOBILIER", "NAPPAGE", "MATÉRIEL DE SALLE", "CUISINE", "BARBECUE", "PODIUM - PISTE DE DANSE", "SON ET LUMIÈRE", "PACKS", "CONSOMMABLES"].map((item) => (
            <NavItem
              key={item}
              onClick={() => handleMenuClick(item)}
              style={{
                color: selectedMenu === item ? "blue" : "#333",
                borderBottom: selectedMenu === item ? "2px solid blue" : "none", // Add underline
              }}
            >
              {item}
            </NavItem>
          ))}
        </NavMenu>
      </Header>

      {/* Section above images */}
      <SelectedCategory>
        <span>Home</span> / <span>{selectedMenu}</span>
      </SelectedCategory>

      {/* Product Section */}
      <ProductContent>
        <ImageContainer>
          <LeftSection>
            <ImageGallery>
              <Thumbnail src="/table.jpg" alt="Thumbnail" />
              <Thumbnail src="/table.jpg" alt="Thumbnail" />
              <Thumbnail src="/table.jpg" alt="Thumbnail" />
              <Thumbnail src="/table.jpg" alt="Thumbnail" />
            </ImageGallery>
          </LeftSection>
          <RightSection>
            <MainImage src="/machine.jpg" alt="Main Product" />
          </RightSection>
        </ImageContainer>
        <RightSectionDetails>
          <ProductTitle>
            Cheese – appareil à raclette 1/2 roue
            <HeartIcon>
              <FaHeart />
            </HeartIcon>
          </ProductTitle>
          <Price>39,50€ / pièce</Price>
          <Details>
            <li>Location appareil à raclette - Raclette traditionnelle 1/2 roue</li>
            <li>Réglable en hauteur</li>
            <li>Appareil à raclette professionnel</li>
            <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            <li>220V</li>
            <li>900W</li>
          </Details>
          <QuantityControl>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </QuantityControl>
          <AddToCartButton>AJOUTER AU PANIER</AddToCartButton>
          <SectionButtons>
          <button className="section-button">
            LIVRAISONS <span>+</span>
          </button>
          <button className="section-button">
            QUESTIONS <span>+</span>
          </button>
        </SectionButtons>
        </RightSectionDetails>
      </ProductContent>

      <DescriptionSection>
        <Description>
          <h3>
            <b>Description produit</b>
          </h3>
          <p>
            Festi vous propose à la location un/une "Jewel - grand couteau/10pc" pour votre événement et ce dès 0,35 €
            / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait
            l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC".
            Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours
            une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de
            la Table".
          </p>
        </Description>
      </DescriptionSection>
      

<RelatedProducts>
  <h2><b>Produits similaires</b></h2>
  <div className="product-list">
    {relatedProducts.map((product) => (
      <ProductCard key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </ProductCard>
    ))}
  </div>
</RelatedProducts>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors?.bg || "#f9f9f9"};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.header || "#ffffff"};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  height: 80px;
`;

const Logo = styled.div`
  img {
    max-height: 130px;
  }
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  margin: 0 1.5rem;

  input {
    width: 100%;
    padding: 0.8rem 2.5rem 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #888;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors?.icon || "#333"};
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors?.menuBg || "#f7f7f7"};
`;

const NavItem = styled.a`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.text || "#333"};
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: #007bff;
  }
`;

const SelectedCategory = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const ProductContent = styled.div`
  display: flex;
  margin: 2rem 1.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 10px;
  width: 761px;
  height: 652px;
`;

const LeftSection = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 0.5rem;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const RightSection = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -1rem;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightSectionDetails = styled.div`
  flex: 1;
  padding-left: 2rem;
`;

const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

const HeartIcon = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
  color: #ff3366;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
`;

const Details = styled.ul`
  font-size: 1.5rem;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  button {
    padding: 0.5rem;
    font-size: 1.5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  span {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 400px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DescriptionSection = styled.section`
  padding: 2rem 1.5rem;
  background-color: #ffffff;
`;

const Description = styled.div`
  width: 711px;
  height: 108px;
  margin-top: -15rem;
  padding: 1rem 1.5rem;
`;

const SectionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 758px;
  height: 62px;
  margin-top: 2rem;

  .section-button {
    width: 49%;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    cursor: pointer;
    text-align: center;

    span {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }

    &:hover {
      background-color: #e2e2e2;
    }
  }
`;

const RelatedProducts = styled.section`
  margin-top: 2rem;
  padding: 3rem;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ProductCard = styled.div`
  width: 200px;
  margin-bottom: 20px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin: 10px 0;
  }
`;

const relatedProducts = [
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  {
    id: 1,
    image: 'table.jpg',
    name: 'Product 1',
    price: '₹100'
  },
  // ... more products
];

export default Home;
