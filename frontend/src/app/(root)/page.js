import { BsCoin } from "react-icons/bs";

const HomePage=()=>{
  return <>
  <div className="py-10 flex flex-col gap-y-4">
    <div className="">
      <h1 className="text-5xl font-bold">PBI</h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3">

    {
      Array(3).fill(null).map((cur,i)=>{
        return <DashboardCard key={i} />
      })
    }
        
    </div>
  </div>
  </>
}

export default HomePage

const DashboardCard = () => {
  return <div className="flex items-center justify-between border py-3">
    <BsCoin className="text-3xl" />
    <div className="flexflex-col gap-y-2">
      <p>Amount</p>
      <h1>&#8377; 45</h1>
    </div>
  </div>
}