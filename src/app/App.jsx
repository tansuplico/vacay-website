import "../styles/App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Navbar,
  Banner,
  Popular,
  Client,
  Discount,
  Footer,
  Slider,
} from "../components";

function App() {
  const client = new QueryClient({});

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <Banner />
      <Slider />
      <Popular />
      <Client />
      <Discount />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;

// import getHotelDetails from "../api/hotels";

// import { Header, Banner } from "../components";

// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// function App() {
//   const client = new QueryClient({});
//   const { data } = useQuery("hotels", () => {
//     return Axios.get(getHotelDetails.then((res) => res.data));
//   });

//   console.log(data);
//   console.log("hello");

//   return (
//     <>
//       <QueryClientProvider client={client}>
//         <Header />
//         <h1>Hello</h1>
//       </QueryClientProvider>
//       <h1 className="bg-red-500">Hello</h1>
//     </>
//   );
// }

// export default App;
