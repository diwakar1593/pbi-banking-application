import { BsCoin } from "react-icons/bs";
import { RiCoinsLine } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";
import Link from "next/link";
import HeaderName from "@/src/components/HeaderName";

const HomePage=()=>{

  const dashboard_data = [
    {
      title: "Amount",
      "Icon": <BsCoin className="text-6xl text-yellow-500" />,
      "value": `₹${0}`,
      link: '/amount'
    },
    {
      title: "FD Amount",
      "Icon": <RiCoinsLine className="text-6xl text-blue-700" />,
      "value": `₹${0}`,
      link: '/fd-amount'
    },
    {
      title: "ATM Cards",
      "Icon": <IoCardSharp className="text-6xl text-black" />,
      "value": `${2}`,
      link: '/atm-cards'
    },
  ]

  return <>
  <div className="py-10 flex flex-col gap-y-4">
    <HeaderName/>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">

    {
      dashboard_data.map((cur,i)=>{
        return <DashboardCard data={cur} key={i} />
      })
    }
        
    </div>
  </div>
  </>
}

export default HomePage

const DashboardCard = ({data}) => {
  return <Link href={data.link} className="flex items-center justify-between border py-3 px-10">
    {data.Icon}
    <div className="flexflex-col gap-y-2 justify-end">
      <p className="text-3xl font-semibold">{data.title}</p>
      <h3 className="text-4xl font-bold text-end">{data.value}</h3>
    </div>
  </Link>
}