import React from "react";
//Global Style
// import GlobalStyle from "./components/GlobalStyle"
// import AboutSection from "./components/AboutSection";
//Import pages
// import AboutUs from "./pages/AboutUs";
// import Nav from "./components/Nav";
// import OurWork from "./pages/OurWork";
// import ContactUs from "./pages/ContactUs";
// import MovieDetail from "./pages/MovieDetail";
//Router
// import { Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error'
import GetUsers from "./components/GetUsers";

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if(graphqlErrors){

    graphqlErrors.map(({ message, location, path}) =>{
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri : "http://localhost:6969/graphql" }),
])

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  link: link
})
function App() {
  return (
    <ApolloProvider client={client}>
      {""}
      <GetUsers />
    </ApolloProvider>
  )
  // return (
  //   <div className="App">
  //     <GlobalStyle />
  //     <Nav />
  //     <Switch>
  //     <Route path="/" exact>
  //       <AboutUs />
  //     </Route>
  //     <Route path="/work" exact>
  //       <OurWork />
  //     </Route>
  //     <Route path="/work/:id">
  //       <MovieDetail />
  //     </Route>
  //     <Route path="/contact">
  //         <ContactUs />
  //     </Route>
  //     </Switch>
  //   </div>
  // );
}

export default App;
