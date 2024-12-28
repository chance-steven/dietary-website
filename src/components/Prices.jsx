import PriceCards from "./PriceCards"

const Prices = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:mx-[20%] ">
    <PriceCards price={<p>$39 /month </p>} title="Jumpstart Plan" paragraph="Perfect for get started on their" li1="nutrition journey" li="​Online Consultation" lis=" Daily meal tracking" list=" Weekly meal tracking" lists=" Strategy to more healthy" liste="Weight Assessment" btn="SELECT PLAN" />
    <PriceCards price={<p>$59 /month </p>} title="Transform Plan" paragraph="Perfect for achieve their health and" li1="wellness goals" li="​Online Consultation" lis=" Daily meal tracking" list=" Weekly meal tracking" lists=" Strategy to more healthy" liste="Weight Assessment"  btn="SELECT PLAN" />
    <PriceCards price={<p>$149 /month </p>} title="Daily Plan" paragraph="Duis aute irure dolor in reprehenderit" li1="in voluptate velit" li="​Online Consultation" lis=" Daily meal tracking" list=" Weekly meal tracking" lists=" Strategy to more healthy" liste="Weight Assessment"  btn="SELECT PLAN" />
    </div>
  )
}

export default Prices