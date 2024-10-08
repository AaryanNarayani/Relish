type NextBiteItemType = {
  name: string;
  imgUrl: string;
  desc: string;
}

const nextBiteItems: NextBiteItemType[] = [{
  name: 'Order Online',
  imgUrl: "/search/dishes/tonkotsu-tumbnail.png",
  desc: `Chill at home, your meal's on its way!`
},
{
  name: 'Dine in',
  imgUrl: "/home/nextBite/dine-in.png",
  desc: `Chill at home, your meal's on its way!`
},
{
  name: 'Trending',
  imgUrl: "/home/nextBite/trending.png",
  desc: `Chill at home, your meal's on its way!`
}]

function NextBite() {
  const list = nextBiteItems.map((item: NextBiteItemType, key: number) => (
    <NextBiteItemCard key={key} item={item} />
  ))

  return (
    <div className="w-full flex justify-center gap-8">
      {list}
    </div>
  )
}

export default NextBite

type NextBiteItemCardProps = {
  item: NextBiteItemType;
}

function NextBiteItemCard({ item }: NextBiteItemCardProps) {
  return (
    <div className="w-[350px] rounded-[20px] overflow-hidden bg-white gap-2 h-[300px]">
      <img className="w-full h-2/3 object-cover" src={item.imgUrl} alt={item.name}/>
      <div className="px-6 py-4">
        <div className=" text-2xl ">{item.name}</div>
        <p className="font-light text-gray-700 text-base">{item.desc}</p>
      </div>
    </div>
  )
}