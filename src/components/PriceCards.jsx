
const PriceCards = ({price,title,paragraph,li,lis,list,lists,liste,li1,btn}) => {
  return (
    <div className="bg-[#d6d6d6] py-6 px-4  ">
     <h2 className="text-[#5a7d62] pb-4"> {price}</h2>
     <h1 className="pb-3">{title}</h1>
     <p>{paragraph}</p>
     <p>{li1}</p>
     <p className="pb-5">{li}</p>
     <p>{lis}</p>
     <p>{list}</p>
     <p>{lists}</p>
     <p>{liste}</p>
     <button className="hover:bg-[#5a7d62] hover:text-white py-1 px-3 rounded-md border border-[#5a7d62] text-[#5a7d62] mt-4">{btn}</button>

    </div>
    
  )
}

export default PriceCards