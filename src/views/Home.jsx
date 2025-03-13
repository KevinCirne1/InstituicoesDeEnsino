import { MDBCarousel, MDBCarouselItem, MDBContainer } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <MDBContainer className="text-center mt-4">
      <h1>Plataforma de Instituições de Ensino</h1>

      {/* 🔹 Carrossel de imagens do MDBootstrap */}
      <MDBCarousel showControls showIndicators className="mt-4">
        <MDBCarouselItem itemId={1}>
          <img className="d-block w-100" src="https://www.ifpb.edu.br/guarabira/noticias/2019/06/campus-guarabira-e-inaugurado-em-clima-de-festa/dsc_0084.jpg/@@images/634cb526-aaa9-4394-8350-a90abbb934a7.jpeg" alt="Wild Landscape" />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img className="d-block w-100" src="https://uepb.edu.br/wp-content/uploads/2020/08/Bioterio-da-UEPB-1.jpeg" alt="Camera" />
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img className="d-block w-100" src="https://www.eesap.edu.br/storage/eesap/images/sobre_2.jpg" alt="Exotic Fruits" />
        </MDBCarouselItem>
      </MDBCarousel>

    </MDBContainer>
  );
};

export default Home;