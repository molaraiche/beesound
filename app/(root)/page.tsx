import BestSelling from "@/components/BestSelling";
import BlackFriday from "@/components/BlackFriday";
import Home from "@/components/Home";
import NewArrivals from "@/components/NewArrivals";

const App = () => {
  return (
    <section>
      <Home />
      <BestSelling />
      <BlackFriday />
      <NewArrivals />
    </section>
  );
};

export default App;
